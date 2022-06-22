import React from "react";
import './TodoCounter.css'

function TodoCounter(){
    return (
        <React.Fragment>

            <h1 className="TodoCounter--h1">My to-do</h1>
            <h2 className='TodoCounter--h2'>2 of 3 completed taks.</h2>
        </React.Fragment>
        );
}

export {TodoCounter};