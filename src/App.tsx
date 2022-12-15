import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import { AuthContext } from "./Context/AuthProvider";
import router from "./Routes/Route";

export default function App() {
    const { theme } = useContext(AuthContext)
    return (
        <div data-theme={
            theme ? "night" : "light"
        }>
            <RouterProvider router={router}></RouterProvider>
        </div>
    )
}
