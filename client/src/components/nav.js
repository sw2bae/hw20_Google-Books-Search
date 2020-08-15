import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
    const location = useLocation();
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link to={process.env.PUBLIC_URL + '/'} className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Home
            </Link>
            </li>
            <li className="nav-item">
                <Link
                    to={process.env.PUBLIC_URL + '/search'}
                    className={location.pathname === "/search" ? "nav-link active" : "nav-link"}
                >
                    Search
            </Link>
            </li>
            <li className="nav-item">
                <Link
                    to={process.env.PUBLIC_URL + '/saved'}
                    className={location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                >
                    Saved
            </Link>
            </li>
        </ul>
    );
}

export default Nav;
