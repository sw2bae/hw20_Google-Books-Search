import React from "react";
// import { Link, useLocation } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="search-tab" data-toggle="tab" href="#search" role="tab" aria-controls="search" aria-selected="false">Search</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="saved-tab" data-toggle="tab" href="#saved" role="tab" aria-controls="saved" aria-selected="false">Saved</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
