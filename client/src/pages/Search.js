import React from "react";
import Nav from "../components/nav"
import Main from "../components/main"
import Input from "../components/input"
import Result from "../components/results"
import Footer from "../components/footer"


function Search() {
    return (
        <div className="Search container-sm">
            <Nav></Nav>
            <Main></Main>
            <Input></Input>
            <Result></Result>
            <Footer></Footer>
        </div>
    );
}


export default Search;



