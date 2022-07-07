import React from "react";
import {useTodos} from './useTodos'
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { CreateTodoMessage } from "../CreateTodoMessage";
import {NoneResultInSearch} from '../NoneResultInSearch';
import { Modal } from "../Modal";
import './App.css';
import { ChangeAlert } from "../ChangeAlert";
import { TodoForm } from "../TodoForm";
import {Loading} from '../Loading';
import {Error} from '../Error'

function App() {

  const {states,setters} = useTodos();
  const{error,
    loading,
    totalTodos,
    completedTodos,
    searchValue,
    todos,
    openModal,
    isANewTodo}=states;
const{
    setOpenModal,
    setSearchValue,
    completeTodo,
    deleteTodo,
    addTodo,
    sincronizeTodos,
    setIsANewTodo}=setters;
return(
  <React.Fragment>
    <TodoHeader loading={loading} >
      <TodoCounter 
          totalTodos={totalTodos} 
          completedTodos={completedTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </TodoHeader>
    <TodoList
      error={error}
      loading={loading}
      todos={todos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      onError={()=><Error/>}
      onLoading={()=><Loading/>}
      onEmpty={()=><CreateTodoMessage/>}
      onSearch={(searchText)=><NoneResultInSearch searchText={searchText}/>}
      // render={todo =>(
      //   <TodoItem key={todo.text} text={todo.text} Completed={todo.Completed} onComplete={()=>completeTodo(todo.text)} onDelete={()=>deleteTodo(todo.text)}/>
      // )}/
    >
    
        {
          todo => <TodoItem key={todo.text} text={todo.text} Completed={todo.Completed} onComplete={()=>completeTodo(todo.text)} onDelete={()=>deleteTodo(todo.text)}/>
        } 
    </TodoList>
              
    {!!openModal && !!isANewTodo &&(
    <Modal>
      <TodoForm
        addTodo={addTodo}
        setOpenModal={setOpenModal}
        setIsANewTodo={setIsANewTodo}
      >

      </TodoForm>
    </Modal>)}

    {!!openModal && !isANewTodo &&(
      <Modal>

      </Modal>
    )}
    <ChangeAlert sincronize={sincronizeTodos}
    setOpenModal={setOpenModal}/>
    <CreateTodoButton 
      setOpenModal={setOpenModal}
      setIsANewTodo={setIsANewTodo}
    />
    <footer>With &#129505; by Jepsx</footer>


  </React.Fragment>
  );

}

export default App;
