import React from "react";
// import { Link, useLocation } from "react-router-dom";

function Result() {
    return (
        <div className="container card mt-3">
            <p className="mt-3 mb-3 text-left">Results</p>
            <div className="container card mt-3 mb-3">
                <div className="container">
                    <p className="mt-3 mb-3 text-left">Title</p>
                    <button>View</button>
                    <button>Save</button>
                </div>
                <p className="mt-3 mb-3 text-left">Written By Author</p><hr />
                <div className="row">
                    <img className="col-3"></img>
                    <p className="col-9">description</p>
                </div>
            </div>
        </div >
    );
}

export default Result;
