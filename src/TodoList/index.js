import React from "react";
import './TodoList.css'
function TodoList(props){
    return(<section className="TodoList-container">

 

        <ul>
        {props.error && props.onError()}
        {props.loading && props.onLoading()}
        {(!props.loading && !props.todos.length) && props.onEmpty()}

        {props.todos.filter((todo)=>{
            return todo.text.toLowerCase().match(props.searchValue.toLowerCase());
          }).map(props.render)
          }

        </ul>
    </section>)
}

export {TodoList};