import { useContext } from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { AuthContext } from "./Context/AuthProvider";
import router from "./Routes/Route";
import Loading from "./Shared/Loading";

export default function App() {
    const { theme, loading } = useContext(AuthContext)
    return (
        <>
            {
                loading ? <Loading /> : (
                    <div data-theme={
                        theme ? "dracula" : "emerald"
                    }>
                        <RouterProvider router={router}></RouterProvider>
                        <Toaster />
                    </div>
                )
            }

        </>
    )
}
