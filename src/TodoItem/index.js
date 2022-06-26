import React from "react";
import { TodoIcon } from "../TodoIcon";
import './TodoItem.css'

function TodoItem(props){
     return(
        <li className={`${props.Completed && 'task-completed'}`}>
            <TodoIcon styleIcon={props.Completed?'check':'circle'} onFunction={props.onComplete}></TodoIcon>
            <p className={`${props.Completed && 'task-completed' }`}>{props.text}</p>
            <TodoIcon styleIcon='delete' onFunction={props.onDelete}></TodoIcon>
        </li>
    );
}

export{TodoItem}