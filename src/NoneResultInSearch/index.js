import React from "react";
import './NoneResultInSearch.css'

function NoneResultInSearch(props){
    return(
        <p>Ningun resultado con {props.searchText}</p>
    )
}

export{NoneResultInSearch}