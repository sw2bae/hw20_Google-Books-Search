import React from "react";
// import { Link, useLocation } from "react-router-dom";
import { useUserContext } from "../utils/BookContext";

function Result() {
    const books = useUserContext();
    console.log(books);
    // const { id, authors, description, image, link, title } = useUserContext();
    return (
        <div className="container card mt-3">
            <p className="mt-3 mb-3 text-left">Results : {books.length} Books</p>

            {books.map((book, index) => {
                return (
                    <div className="container card mt-3 mb-3" key={index}>
                        <div className="container">
                            <div className="row">
                                <p className="mt-3 mb-3 text-left font-weight-bold col-6">{book.title}</p>
                                <div className="mt-3 mb-3 col-6">
                                    <button className="mr-3">View</button>
                                    <button>Save</button>
                                </div>
                            </div>
                            <p className="mt-3 mb-3 text-left font-italic">Written By {book.authors}</p><hr />
                        </div>
                        <div className="row">
                            <img className="col-3 mb-3" src={book.image} alt={index} />
                            <p className="col-9">{book.description}</p>
                        </div>
                    </div>
                )
            })}
        </div >
    );
}

export default Result;
