import React, { Children } from "react";
import './TodoHeader.css'

function TodoHeader(props){
    return (
    <header className="header-Container">
        {props.children}
    </header>
    )
    }

export {TodoHeader};