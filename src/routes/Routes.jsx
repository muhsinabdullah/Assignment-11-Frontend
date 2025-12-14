import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children : [
        {
            path:'/',
            Component: Home
        }
    ]
  },
]);

export default router;