import React, { useState, useEffect } from "react";
import Savedbook from "../components/saved";
import { UserProvider } from "../utils/BookContext";

function Saved() {
    return (
        <div className="Search container-sm">
            <Savedbook></Savedbook>
        </div>

    );
}

export default Saved;



