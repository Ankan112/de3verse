

import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/home',
        element: <Home></Home>
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
    },
])

export default router;