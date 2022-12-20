import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Shared/Loading";
import auth from "../firebase.init";



export default function RequireAuth({ children }: any) {
    const [user, loading] = useAuthState(auth)
    const location = useLocation();
    if (loading) {
        return <Loading />
    }
    if (!user) {
        return <Navigate to="/" state={{ from: location }} />
    }
    return children;
}