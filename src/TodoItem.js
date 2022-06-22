import React from "react";
import './TodoItem.css'

function TodoItem(props){
    return(
        <li>
            <span className="span--a"></span>
            <p>{props.text}</p>
            <span className="span--b"></span>
        </li>
    );
}

export{TodoItem}