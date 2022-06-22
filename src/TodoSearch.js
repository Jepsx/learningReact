import React from "react";
import './TodoSearch.css'

function TodoSearch(){
    return (
        <React.Fragment>
            <input placeholder=" to-do Name"/>
            <button className="search-button">Search</button>
        </React.Fragment>
    );
}

export {TodoSearch};