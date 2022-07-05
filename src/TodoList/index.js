import React from "react";
import './TodoList.css'
function TodoList(props){
    return(<section className="TodoList-container">

 

        <ul>
        {props.error && props.onError()}
        {props.loading && props.onLoading()}
        {(!props.loading && !props.totalTodos) && props.onEmpty()}
        {(!!props.totalTodos && !props.todos.filter((todo)=>{
            return todo.text.toLowerCase().match(props.searchValue.toLowerCase());
          }).length) && props.onSearch(props.searchValue)}
        {!props.loading && props.todos.filter((todo)=>{
            return todo.text.toLowerCase().match(props.searchValue.toLowerCase());
          }).map(props.children||props.render)
          }

        </ul>
    </section>)
}

export {TodoList};