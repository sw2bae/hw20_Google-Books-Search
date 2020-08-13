import React, { useState, useEffect } from "react";
import Nav from "../components/nav";
import Main from "../components/main";
import Input from "../components/input";
import Result from "../components/results";
import Footer from "../components/footer";
import API from "../utils/API";

function Search() {


    const [searchedBooks, setSearchedBooks] = useState([{}]);

    function handleFormSubmit(e) {
        e.preventDefault();
        // const { value } = e.target;
        API.getBooks().then(res => {
            console.log(res);
            //     let dataInit = [];
            // for (let i = 0; i < res.data.results.length; i++) {
            //     let book = {
            //         authors: res.data.results[i],
            //         description: res.data.results[i],
            //         image: res.data.results[i],
            //         link: res.data.results[i],
            //         title: res.data.results[i]

            //     }
            //     dataInit.push(book);
            // };
            // setSearchedBooks(dataInit);
        });
    }



    return (
        <div className="Search container-sm">
            <Nav></Nav>
            <Main></Main>
            <Input handleFormSubmit={handleFormSubmit}></Input>
            <Result></Result>
            <Footer></Footer>
        </div>
    );
}


export default Search;



