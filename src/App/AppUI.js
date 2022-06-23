import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import './App.css';
import { TodoForm } from "../TodoForm";

function AppUI(){

    const {
        error,
        loading,
        todos,
        searchValue,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,            
    } = React.useContext(TodoContext);

    return(
    <React.Fragment>
      <div className="header-Container">
      <TodoCounter/>

      <TodoSearch/>
      </div>
     
      <TodoList>
          {error && <p>Desespérate, hubo un error...</p>}
          {loading && <p>Estamos cargando, no desesperes...</p>}
          {(!loading && !todos.length) && <p>!Crea tu primer to-do!</p>}
      
          {
            todos.filter((todo)=>{
              return todo.text.toLowerCase().match(searchValue.toLowerCase());
            }).map(todo => <TodoItem key={todo.text} text={todo.text} Completed={todo.Completed} onComplete={()=>completeTodo(todo.text)} onDelete={()=>deleteTodo(todo.text)}/>)
          } 
      </TodoList>
                
      {!!openModal && (
      <Modal>
        <TodoForm/>
      </Modal>)}

      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
      <footer>With &#129505; by Jepsx</footer>
    </React.Fragment>
    );
}

export{AppUI}