import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import './App.css';

const todos=[
  {text:'cortar cebolla',Completed: false},
  {text:'Tomar el curso de intro a React',Completed: false},
  {text:'Llorar con la llorona',Completed: false},
]

function App() {
  return (
    <React.Fragment>
      <div className="header-Container">
      <TodoCounter />

      <TodoSearch />
      </div>

  
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text}/>
        ))}
      </TodoList>
      <CreateTodoButton/>
      <footer>With &#129505; by Jepsx</footer>
    </React.Fragment>
  ); 
}

export default App;
