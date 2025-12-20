import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import MainDashboard from "../pages/Dashboard/MainDashboard/MainDashboard";
import AddRequest from "../pages/Dashboard/AddRequest/AddRequest";


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
    path:'/dashboard',
    element: <DashboardLayout />,
    children: [
      {
       path: 'main',
       element: <MainDashboard />
      },
      {
       path: 'add-request',
       element: <AddRequest />
      }
    ]
  }
]);

export default router;