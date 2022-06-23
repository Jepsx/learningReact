import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css'

function TodoCounter({total,completed}){

    const { totalTodos, completedTodos} = React.useContext(TodoContext);

    return (
        <React.Fragment>

            <h1 className="TodoCounter--h1">My to-do</h1>
            <h2 className='TodoCounter--h2'>{completedTodos} of {totalTodos} completed taks.</h2>
            
        </React.Fragment>
        );
}

export {TodoCounter};