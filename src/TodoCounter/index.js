import React from "react";
import './TodoCounter.css'

function TodoCounter({totalTodos,completedTodos,loading}){
    console.log(loading);
    return (
        <React.Fragment>

            <h1 className={`TodoCounter--h1 ${!!loading && 'TodoCounter--h1__loading'}`}>My to-do</h1>
            <h2 className={`TodoCounter--h2 ${!!loading && 'TodoCounter--h2__loading'}`}>{completedTodos} of {totalTodos} completed taks.</h2>
            
        </React.Fragment>
        );
}

export {TodoCounter};