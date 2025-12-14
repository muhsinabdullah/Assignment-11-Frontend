import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children : [
        {
            path:'/',
            Component: Home
        },
        {
            path:'/login',
            Component: Login 
        },
        {
            path:'/signup',
            Component: Register
        }
    ]
  },
]);

export default router;