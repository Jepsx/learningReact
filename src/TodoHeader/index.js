import React from "react";
import './TodoHeader.css'

function TodoHeader(props){
    return (
    <header className="header-Container">
        {React.Children.toArray(props.children).map( child=> React.cloneElement(child,{loading:props.loading}))}
    </header>
    )
    }

export {TodoHeader};