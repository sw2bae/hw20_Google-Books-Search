import React, { useState } from "react";
import Input from "../components/input";
import Result from "../components/results";
import API from "../utils/API";
import { UserProvider } from "../utils/BookContext";

function Search() {

    const [searchedBooks, setSearchedBooks] = useState([{}]);

    function handleFormSubmit(e) {
        e.preventDefault();
        const { value } = e.target.bookName;
        const searchTerm = value.replace(/ /g, "");
        API.getBooks(searchTerm).then(res => {
            // console.log(res.data.items)
            let dataInit = [];
            if (!res.data.items) {
                let book = {
                    id: "NoResult",
                    authors: "NoResult",
                    description: "NoResult",
                    image: "NoResult",
                    link: "NoResult",
                    title: "NoResult"
                }
                dataInit.push(book);
            } else {
                for (let i = 0; i < res.data.items.length; i++) {
                    if (!res.data.items[i].volumeInfo.imageLinks) {
                        let book = {
                            id: res.data.items[i].id,
                            authors: res.data.items[i].volumeInfo.authors,
                            description: res.data.items[i].volumeInfo.description,
                            image: "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg",
                            link: res.data.items[i].volumeInfo.previewLink,
                            title: res.data.items[i].volumeInfo.title
                        }
                        dataInit.push(book);
                    } else {
                        let book = {
                            id: res.data.items[i].id,
                            authors: res.data.items[i].volumeInfo.authors,
                            description: res.data.items[i].volumeInfo.description,
                            image: res.data.items[i].volumeInfo.imageLinks.smallThumbnail,
                            link: res.data.items[i].volumeInfo.previewLink,
                            title: res.data.items[i].volumeInfo.title
                        }
                        dataInit.push(book);
                    }
                };
            }
            setSearchedBooks(dataInit);
            // console.log(searchedBooks);
        });
    }

    return (
        <div className="Search container-sm">
            <Input handleFormSubmit={handleFormSubmit}></Input>
            <UserProvider value={searchedBooks}>
                <Result></Result>
            </UserProvider>
        </div>

    );
}
export default Search;



