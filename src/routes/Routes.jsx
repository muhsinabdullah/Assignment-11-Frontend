import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import MainDashboard from "../pages/Dashboard/MainDashboard/MainDashboard";
import AddRequest from "../pages/Dashboard/AddRequest/AddRequest";
import ManageRequest from "../pages/Dashboard/ManageRequest/ManageRequest";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import PrivateRoute from "./PrivateRoute";


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
       path: 'manage-request',
       element: <ManageRequest/>
      }
    ]
  }
]);

export default router;