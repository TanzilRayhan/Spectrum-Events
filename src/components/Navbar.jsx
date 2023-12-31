import { Link, NavLink } from "react-router-dom";
import userDefaultPic from "../../public/people.png";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut();
    };

    const navLinks = (
        <>
            <li>
                <NavLink className="font-bold" to="/">Home</NavLink>
            </li>
            <li>
                <NavLink className="font-bold" to="/about">About Us</NavLink>
            </li>
            <li>
                <NavLink className="font-bold" to="/contact">Contact Us</NavLink>
            </li>
            <li>
                <NavLink className="font-bold" to="/faq">FAQ</NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar max-w-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {navLinks}
                    </ul>
                </div>
                <a href="/" className="btn btn-ghost normal-case lg:text-xl font-extrabold font-Manrope ">
                    Spectrum-Events
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{navLinks}</ul>
            </div>
            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={userDefaultPic} />
                    </div>
                </label>
                {user ? (
                    <button onClick={handleSignOut} className="btn">
                        Sign Out
                    </button>
                ) : (
                    <Link to="/login">
                        <button className="btn font-bold ">Login</button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
