import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(props){

    const onClickButton = ()=>{
        props.setOpenModal(!props.openModal);
        const btn = document.querySelector('.create-button');
        btn.classList.toggle('over')
    }

    return(
    <button className="create-button" onClick={onClickButton}>Create new to-do</button>
    );
}

export{CreateTodoButton};