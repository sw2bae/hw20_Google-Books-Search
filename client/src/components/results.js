import React from "react";
// import { Link, useLocation } from "react-router-dom";
import { useUserContext } from "../utils/BookContext";

function Result() {
    const books = useUserContext();
    console.log(books);
    // const { id, authors, description, image, link, title } = useUserContext();
    return (
        <div className="container card mt-3">
            <p className="mt-3 mb-3 text-left">Results</p>

            {books.map((book, index) => {
                return (
                    <div className="container card mt-3 mb-3" key={index}>
                        <div className="container">
                            <p className="mt-3 mb-3 text-left">{book.title}</p>
                            <button>View</button>
                            <button>Save</button>
                        </div>
                        <p className="mt-3 mb-3 text-left">Written By {book.authors}</p><hr />
                        <div className="row">
                            <img className="col-3" src={book.image} alt={index} />
                            <p className="col-9">{book.description}</p>
                        </div>
                    </div>
                )
            })}
        </div >
    );
}

export default Result;
