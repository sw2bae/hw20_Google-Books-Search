import React, { useState, useEffect } from "react";
import API from "../utils/API";

function Savedbook() {
    // Setting our component's initial state
    const [bookList, setBookList] = useState([{
        // id: "",
        // authors: "",
        // description: "",
        // image: "",
        // link: "",
        // title: ""
    }]);

    // Load all books and store them with setBooks
    useEffect(() => {
        loadBooks()
    }, [])

    //Delete Btn
    // function deleteBtn() {
    //     // e.preventDefault();
    //     // const { value } = e.target;
    //     // const bookId = value
    //     // console.log(bookId);
    //     API.deleteBook(bookId)
    //     // .then(res => loadBooks())
    //     // .catch(err => console.log(err));
    // }

    function deleteBook(id) {
        API.deleteBook(id)
            .then(res => loadBooks())
            .catch(err => console.log(err));
    }

    // Loads all books and sets them to books
    function loadBooks() {
        API.getSavedBooks()
            .then(res =>
                setBookList(res.data)
            )
            .catch(err => console.log(err));
    };
    console.log(bookList);
    function renderSavedList() {
        if (!bookList) {
            return (
                <div>
                </div>
            );
        } else {
            return (
                <div className="container card mt-3 mb-3">
                    <p className="mt-3 mb-3 text-left">Saved : {bookList.length} Book(s)</p>
                    {bookList.map((book, index) => {
                        return (
                            <div className="container card mt-3 mb-3" key={book._id} value={index}>
                                <div className="container">
                                    <div className="row">
                                        <p className="mt-3 mb-3 text-left font-weight-bold col-6">{book.title}</p>
                                        <div className="mt-3 mb-3 col-6">
                                            <a className="btn mr-3 border" href={book.link} target="_blank" rel="noopener noreferrer">View</a>
                                            <button className="btn mr-3" value={book.id} onClick={() => deleteBook(book._id)}>Delete</button>
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
        renderSavedList()
    )
}

export default Savedbook;



