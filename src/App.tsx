import { RouterProvider } from "react-router-dom";
import router from "./Routes/Route";

export default function App() {
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    )
}
