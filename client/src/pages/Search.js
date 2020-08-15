import React, { useState, useEffect } from "react";
import Nav from "../components/nav";
import Main from "../components/main";
import Input from "../components/input";
import Result from "../components/results";
import Footer from "../components/footer";
import API from "../utils/API";
import { UserProvider } from "../utils/BookContext";

function Search() {


    const [searchedBooks, setSearchedBooks] = useState([{}]);

    function handleFormSubmit(e) {
        e.preventDefault();
        const { value } = e.target.bookName;
        const searchTerm = value.replace(/ /g, "");
        API.getBooks(searchTerm).then(res => {
            let dataInit = [];
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
                // dataInit.push(book);
            };
            setSearchedBooks(dataInit);
            console.log(searchedBooks);
        });
    }



    return (

        <div className="Search container-sm">
            <Nav></Nav>
            <Main></Main>
            <Input handleFormSubmit={handleFormSubmit}></Input>
            <UserProvider value={searchedBooks}>
                <Result></Result>
            </UserProvider>
            <Footer></Footer>
        </div>

    );
}


export default Search;



