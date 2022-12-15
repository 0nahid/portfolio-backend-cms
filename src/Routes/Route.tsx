import { createBrowserRouter } from "react-router-dom";
import Login from "../Auth/Login";
import Dashboard from "../Dasboard/Dashboard";
import Hero from "../Dasboard/Hero";
import Welcome from "../Dasboard/Welcome";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />
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
            }
        ]
    }
])

export default router;