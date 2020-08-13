import React from "react";
// import { Link, useLocation } from "react-router-dom";

function Input(props) {
    return (
        <div className="container card mt-3">
            <p className="mt-3 mb-3 text-left">Book Search</p>
            <form onSubmit={props.handleFormSubmit} className="container">
                <input className="mt-1 mb-3 mr-3 text-center" placeholder="Search by Name" name="bookName"></input>
                <button className="mt-1 mb-3 ml-5" type="submit">Search</button>
            </form>
        </div >
    );
}

export default Input;
