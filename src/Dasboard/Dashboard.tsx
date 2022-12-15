import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 text-base-content">
                    <li><Link to="/dashboard/">Dashboard</Link></li>
                    <li><Link to="/dashboard/hero">Hero Section</Link></li>
                    <li><Link to="/dashboard/navmenu">Nav Menu</Link></li>
                    <li><Link to="/dashboard/projects">Manage Projects</Link></li>
                </ul>
            </div>
        </div>

    )
}


