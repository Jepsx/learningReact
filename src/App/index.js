import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import './App.css';

const defaultTodos=[
  {text:'cortar cebolla',Completed: true},
  {text:'Tomar el curso de intro a React',Completed: false},
  {text:'Llorar con la llorona',Completed: false},
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.Completed).length;

  const totalTodos = todos.length;

  const completeTodo =(text)=>{
    const todoIndex = todos.findIndex(todo=>todo.text === text);
    const newTodos=[...todos];
    newTodos[todoIndex].Completed=true;
    setTodos(newTodos);
  } 
  const deleteTodo =(text)=>{
    const todoIndex = todos.findIndex(todo=>todo.text === text);
    const newTodos=[...todos];
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
  } 

  return (
    <React.Fragment>
      <div className="header-Container">
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

  
      <TodoList>
        {
          todos.filter((todo)=>{
            return todo.text.toLowerCase().match(searchValue.toLowerCase());
          }).map(todo => <TodoItem key={todo.text} text={todo.text} Completed={todo.Completed} onComplete={()=>completeTodo(todo.text)} onDelete={()=>deleteTodo(todo.text)}/>)
        }
      </TodoList>
      <CreateTodoButton/>
      <footer>With &#129505; by Jepsx</footer>
    </React.Fragment>
  ); 
}

export default App;
