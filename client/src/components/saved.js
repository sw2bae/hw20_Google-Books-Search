import React from "react";

function Savedbook() {
    return (
        <div className="container card mt-3 mb-3">
            <div className="container">
                <div className="row">
                    <p className="mt-3 mb-3 text-left font-weight-bold col-6">book.title</p>
                    <div className="mt-3 mb-3 col-6">
                        <a className="btn mr-3 border" href="dummy" target="_blank">View</a>
                        <button className="btn mr-3">Delete</button>
                    </div>
                </div>
                <p className="mt-3 mb-3 text-left font-italic">Written By</p><hr />
            </div>
            <div className="row">
                <img className="col-3 mb-3" src="" alt="" />
                <p className="col-9">description</p>
            </div>
        </div>
    )

}

export default Savedbook;



