import React from "react";
// import { Link, useLocation } from "react-router-dom";

function Input() {
    return (
        <div className="container card mt-3">
            <p className="mt-3 mb-3 text-left">Book Search</p>
            <div className="container">
                <input className="mt-1 mb-3 mr-3 text-center" placeholder="Search by Name"></input>
                <button className="mt-1 mb-3 ml-5">Search</button>
            </div>
        </div >
    );
}

export default Input;
