import React from "react";
import './TodoSearch.css'

function TodoSearch({searchValue,setSearchValue}){

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