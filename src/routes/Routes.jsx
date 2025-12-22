import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import MainDashboard from "../pages/Dashboard/MainDashboard/MainDashboard";
import AddRequest from "../pages/Dashboard/AddRequest/AddRequest";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import PrivateRoute from "./PrivateRoute";
import MyReqest from "../pages/Dashboard/MyRequest/MyReqest";
import Donate from "../pages/Donate/Donate";
import PaymentSuccess from "../pages/PaymentSuccess/PaymentSuccess";
import PaymentCancel from "../pages/PaymentCancel/PaymentCancel";
import SearchRequest from "../pages/SearchRequest/SearchRequest";


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
            path:'/search',
            Component: SearchRequest
        },
        {
            path:'/login',
            Component: Login 
        },
        {
            path:'/signup',
            Component: Register
        },
        {
            path:'/donate',
            element: <PrivateRoute><Donate /></PrivateRoute>
        },
        {
            path:'/payment-success',
            Component: PaymentSuccess
        },
        {
            path:'/payment-cancelled',
            Component: PaymentCancel
        }
    ]
  },
  {
    path:'dashboard',
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      {
       path: '/dashboard',
       element: <MainDashboard />
      },
      {
       path: 'add-request',
       element: <AddRequest />
      },
      {
       path: 'all-users',
       element: <AllUsers />
      },
      {
       path: 'my-request',
       element: <MyReqest />
      }
    ]
  }
]);

export default router;