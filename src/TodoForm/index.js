import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

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
        <form className="form-container"  onSubmit={onSubmit}>
            <label className="form-container--label" htmlFor='area'>
                <h2>Create your to-do.</h2>
                <textarea id="area"
                 value={newTodoValue}
                 onChange = {onChange}
                 placeholder="to-do text"/>
            </label>
            <div className="form-container--buttons">
                <button className="form-container--buttons-button cancel" type='button' onClick={onCancel}>Cancel</button>
                <button className="form-container--buttons-button add" type='submit'>Add</button>
            </div>
        </form>
    )
}

export {TodoForm};