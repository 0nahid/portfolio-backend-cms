import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase.init";



export default function RequireAuth({ children }: any) {
    const [user, loading] = useAuthState(auth)
    const location = useLocation();
    if (loading) {
        return <div>Loading...</div>
    }
    if (!user) {
        return <Navigate to="/" state={{ from: location }} />
    }
    return children;
}