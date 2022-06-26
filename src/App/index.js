import React from "react";
import {useTodos} from './useTodos'
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { CreateTodoMessage } from "../CreateTodoMessage";
import { Modal } from "../Modal";
import './App.css';
import { TodoForm } from "../TodoForm";
import {Loading} from '../Loading';
import {Error} from '../Error'

function App() {

  const {
    error,
    loading,
    todos,
    searchValue,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos, 
    completedTodos,
    setSearchValue,
    addTodo           
} = useTodos();

return(
  <React.Fragment>
    <TodoHeader >
      <TodoCounter 
          totalTodos={totalTodos} 
          completedTodos={completedTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </TodoHeader>
   
    <TodoList>
        {error && <Error /> }
        {loading && <Loading />}
        {(!loading && !todos.length) && <CreateTodoMessage/>}
  
        {
          todos.filter((todo)=>{
            return todo.text.toLowerCase().match(searchValue.toLowerCase());
          }).map(todo => <TodoItem key={todo.text} text={todo.text} Completed={todo.Completed} onComplete={()=>completeTodo(todo.text)} onDelete={()=>deleteTodo(todo.text)}/>)
        } 
    </TodoList>
              
    {!!openModal && (
    <Modal>
      <TodoForm
        addTodo={addTodo}
        setOpenModal={setOpenModal}
      >

      </TodoForm>
    </Modal>)}

    <CreateTodoButton 
      setOpenModal={setOpenModal}
    />
    <footer>With &#129505; by Jepsx</footer>
  </React.Fragment>
  );

}

export default App;
