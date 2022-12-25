import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { toast } from "react-hot-toast";
import { IoLogOut } from "react-icons/io5";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import auth from "../firebase.init";

export default function Dashboard() {
    const [signOut] = useSignOut(auth);
    const [user] = useAuthState(auth);
    // sign out
    const handleSignOut = async () => {
        const success = await signOut();
        if (success) {
            toast.success("Signed Out Successfully")
        }
    }
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content md:ml-2 shadow-xl rounded md:p-2">
                <Navbar />
                <Outlet></Outlet>
            </div>
            <div className="drawer-side shadow-2xl mr-2 rounded-xl">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 text-base-content"
                >
                    {navMenu}
                    {
                        user && <li>
                            <button
                                className="ring ring-error bg-error mt-10"
                                onClick={handleSignOut}
                            >
                                <IoLogOut />
                                Logout
                            </button>
                        </li>
                    }
                </ul>
            </div>
        </div>

    )
}


export const navMenu = [
    <>
        <li><Link to="/dashboard/">Dashboard</Link></li>
        <li><Link to="/dashboard/hero">Hero Section</Link></li>
        <li><Link to="/dashboard/navmenu">Nav Menu</Link></li>
        <li><Link to="/dashboard/manage-projects">Manage Projects</Link></li>
        <li><Link to="/dashboard/add-project">Add Project</Link></li>
        <li><Link to="/dashboard/manage-2">Manage 2</Link></li>
    </>
]