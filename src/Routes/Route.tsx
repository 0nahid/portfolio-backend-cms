import { createBrowserRouter } from "react-router-dom";
import Login from "../Auth/Login";
import Dashboard from "../Dasboard/Dashboard";
import Hero from "../Dasboard/Hero";
import ManageProject from "../Dasboard/ManageProject";
import Navmenu from "../Dasboard/Navmenu";
import Welcome from "../Dasboard/Welcome";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    }, {
        path: "/login",
        element: <Login />
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard',
                element: <Welcome />
            },
            {
                path: '/dashboard/hero',
                element: <Hero />
            },
            {
                path: '/dashboard/manage-projects',
                element: <ManageProject />
            },
            {
                path: '/dashboard/navmenu',
                element: <Navmenu />
            }
        ]
    }
])

export default router;