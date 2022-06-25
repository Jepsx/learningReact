import React from "react";
import './TodoIcon.css'

function TodoIcon(props){
    return(
        <span className={`Icon ${props.styleIcon}`} onClick={props.onFunction} ></span>
    )
}

export {TodoIcon};