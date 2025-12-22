import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const axiosSecure = axios.create({
  baseURL: "https://backend-11-nine.vercel.app",
});

const useAxiosSecure = () => {
  const { user, loading } = useContext(AuthContext);
  const [instanceReady, setInstanceReady] = useState(false);

  useEffect(() => {
    if (loading) return;
    if (!user) return;

    const reqInterceptor = axiosSecure.interceptors.request.use(
      async (config) => {
        const token = await user.getIdToken();
        config.headers.Authorization = `Bearer ${token}`;
        return config;
      },
      (error) => Promise.reject(error)
    );

    const resInterceptor = axiosSecure.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error("Axios error:", error);
        return Promise.reject(error);
      }
    );

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setInstanceReady(true);

    return () => {
      axiosSecure.interceptors.request.eject(reqInterceptor);
      axiosSecure.interceptors.response.eject(resInterceptor);
    };
  }, [loading, user]);

  return instanceReady ? axiosSecure : null;
};

export default useAxiosSecure;
