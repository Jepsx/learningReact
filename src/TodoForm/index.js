import React from "react";
import { TodoContext } from "../TodoContext";

function TodoForm(){
    const [newTodoValue,setNewTodoValue]=React.useState('');
    const{
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event)=>{
        setNewTodoValue( event.target.value);
    }

    const onCancel = ()=>{
        setOpenModal(false);
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }


    return (
        <form onSubmit={onSubmit}>
            <label>
                <textarea
                 value={newTodoValue}
                 onChange = {onChange}
                 placeholder="to-do text"/>
            </label>
            <div>
                <button type='button' onClick={onCancel}>Cancel</button>
                <button type='submit'>Add</button>
            </div>
        </form>
    )
}

export {TodoForm};