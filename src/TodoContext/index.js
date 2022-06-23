import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props){

    const {item:todos, saveItem:saveTodos,loading,error} = useLocalStorage('TODOS_V1',[]);
    const [searchValue, setSearchValue] = React.useState('');
  
    const completedTodos = todos.filter(todo => !!todo.Completed).length;
  
    const totalTodos = todos.length;
  
  
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
        <TodoContext.Provider value={{
            error,
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            todos,
            setSearchValue,
            completeTodo,
            deleteTodo,
        }}>
           {props.children} 
        </TodoContext.Provider>
    )
}

export {TodoContext,TodoProvider}