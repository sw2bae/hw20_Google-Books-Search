import axios from "axios";
export default {
    // Gets all users
    getBooks: function (bookName) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + bookName);
    },
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    },
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
    getSavedBooks: function () {
        return axios.get("/api/books/");
    }
};