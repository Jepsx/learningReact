import React from "react";
import { useLocalStorage } from "./useLocalStorage";


function useTodos(){

    const [openModal,setOpenModal] = React.useState(false);
    const {item:todos, saveItem:saveTodos,loading,error} = useLocalStorage('TODOS_V1',[]);
    const [searchValue, setSearchValue] = React.useState('');
  
    const completedTodos = todos.filter(todo => !!todo.Completed).length;
  
    const totalTodos = todos.length;
  
  
    const addTodo =(text)=>{
     
      const newTodos=[...todos];
      newTodos.push({
        Completed:false,
        text:text,
      })
      saveTodos(newTodos);
    } 
    const completeTodo =(text)=>{
      const todoIndex = todos.findIndex(todo=>todo.text === text);
      const newTodos=[...todos];
      newTodos[todoIndex].Completed=true;
      saveTodos(newTodos);
    } 
    const deleteTodo =(text)=>{
      const todoIndex = todos.findIndex(todo=>todo.text === text);
      const newTodos=[...todos];
      newTodos.splice(todoIndex,1);
      saveTodos(newTodos);
    } 

    return(
        {
            error,
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            todos,
            openModal,
            setOpenModal,
            setSearchValue,
            completeTodo,
            deleteTodo,
            addTodo,
        }
    )
}

export {useTodos}