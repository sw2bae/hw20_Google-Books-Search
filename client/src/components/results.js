import React from "react";
// import { Link, useLocation } from "react-router-dom";
import { useUserContext } from "../utils/BookContext";

function Result() {
    const books = useUserContext();
    console.log(books);

    // const { id, authors, description, image, link, title } = useUserContext();

    function renderResult() {
        if (!books[0].id) {
            return (
                <div>
                </div>
            );
        } else if (books[0].id === "NoResult") {
            return (
                <div className="container card mt-3">
                    <p className="mt-3 mb-3 text-left">NO BOOK FOUND</p>
                </div>
            )
        }
        else {
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
                                            <a className="btn mr-3 border" href={book.link} target="_blank">View</a>
                                            <button className="btn mr-3">Save</button>
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
    };
    return (
        renderResult()
    )
}

export default Result;
