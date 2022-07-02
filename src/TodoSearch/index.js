import React from "react";
import './TodoSearch.css'

function TodoSearch({searchValue,setSearchValue,loading}){

    const onSearchValueChange = (event)=>{
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return (
        <React.Fragment>
            <input placeholder=" to-do Name"
            onChange={onSearchValueChange}
            value={searchValue}
            disabled={loading}/>
            {/* <button className="search-button">Search</button> */}
        </React.Fragment>
    );
}

export {TodoSearch};