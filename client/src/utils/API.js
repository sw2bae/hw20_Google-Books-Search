import axios from "axios";
export default {
    // Gets all users
    getBooks: function () {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=harry+potter&callback=handleResponse");
    }
};