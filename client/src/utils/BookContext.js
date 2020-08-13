import React, { createContext, useContext } from "react";

const BookContext = createContext(
    {
        id: "",
        authors: [],
        description: "",
        image: "",
        link: "",
        title: ""
    }
);

export function UserProvider({ children, value }) {
    return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};
export function useUserContext() {
    return useContext(BookContext);
};

