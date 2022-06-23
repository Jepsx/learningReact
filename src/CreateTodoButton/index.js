import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(props){

    const onClickButton = ()=>{
        props.setOpenModal(prevState => !prevState);
    }

    return(
    <button className="create-button" onClick={onClickButton}>Create new to-do</button>
    );
}

export{CreateTodoButton};