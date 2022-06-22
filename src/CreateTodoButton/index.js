import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(){

    const onClickButton = ()=>{
        alert('Aquí se debería abrir el modal')
    }

    return(
    <button onClick={()=>onClickButton()}>Create new to-do</button>
    );
}

export{CreateTodoButton};