import React from "react";
import './TodoItem.css'

function TodoItem(props){
    return(
        <li>
            <span className="span--a">C</span>
            <p>{props.text}</p>
            <span className="span--b">X</span>
        </li>
    );
}

export{TodoItem}