import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css'

function TodoSearch(){

    const {searchValue,setSearchValue} = React.useContext(TodoContext);

    const onSearchValueChange = (event)=>{
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return (
        <React.Fragment>
            <input placeholder=" to-do Name"
            onChange={onSearchValueChange}
            value={searchValue}/>
            {/* <button className="search-button">Search</button> */}
        </React.Fragment>
    );
}

export {TodoSearch};