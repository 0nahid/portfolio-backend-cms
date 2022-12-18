import { createBrowserRouter } from "react-router-dom";
import Login from "../Auth/Login";
import RequireAuth from "../Auth/RequireAuth";
import Dashboard from "../Dashboard/Dashboard";
import Hero from "../Dashboard/Hero";
import ManageProject from "../Dashboard/ManageProject";
import Navmenu from "../Dashboard/Navmenu";
import Welcome from "../Dashboard/Welcome";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/dashboard",
        element: <RequireAuth><Dashboard /></RequireAuth>,
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