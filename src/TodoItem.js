import React from "react";
import './TodoItem.css'

function TodoItem(props){
    return(
        <li className={`${props.Completed && 'task-completed'}`}>
            <span className={`span--a ${props.Completed && 'checkIcon'}`}></span>
            <p className={`${props.Completed && 'task-completed' }`}>{props.text}</p>
            <span className="span--b"></span>
        </li>
    );
}

export{TodoItem}