import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import useAxios from "../../hooks/useAxios";

const PaymentSuccess = () => {

    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get('session_id');

    const axiosInstance = useAxios();

    useEffect(()=>{
        axiosInstance.post(`/success-payment?session_id=${sessionId}`)
        .then(res =>{
            console.log(res.data);
        })
    },[axiosInstance, sessionId])

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="bg-base-100 p-8 rounded-box shadow-lg text-center max-w-md w-full">
        
        {/* Success Icon */}
        <CheckCircle className="mx-auto text-green-500 w-16 h-16 mb-4" />

        {/* Title */}
        <h2 className="text-2xl font-bold text-green-600 mb-2">
          Payment Successful!
        </h2>

        {/* Message */}
        <p className="text-base-content mb-6">
          Thank you for your generous donation. Your payment has been completed
          successfully.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <Link to="/" className="btn btn-primary w-full">
            Go to Home
          </Link>
        </div>

      </div>
    </div>
  );
};

export default PaymentSuccess;
