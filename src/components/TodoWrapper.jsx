import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import "./TodoWrapper.css";
import { useState } from 'react';
import EditTodoForm from './EditTodoForm';
function TodoWrapper() {

  const [todos,settodos] = useState([{}]);
  
  const addTodo = (todo) => 
  {
        settodos([...todos , { id:Math.random() , task:todo , completed:false , isEditing:false}])
        console.log(todos);
  }

  const toggleComplete = (id) =>
  {
    settodos(todos.map((todo)=> todo.id === id ? {...todo ,completed:!todo.completed}:todo))
  }

  const deleteTodo = (id) => 
  {
    settodos(todos.filter((todo) => (todo.id !== id)))
  }

  const editTodo = (id) => 
  {
    settodos(todos.map((todo) => (todo.id === id? {...todo, isEditing : !todo.isEditing}:todo)))
  }

  const editTask = (task, id) => 
  {
    settodos(todos.map((todo)=>(todo.id === id? {...todo, task , isEditing :!todo.isEditing}:todo)))
  }

  return (
    <div className='todo-wrapper-container'>
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo}/>
      { 
      todos.map((todo,index) => (
        
        todo.isEditing?(<EditTodoForm editTodo={editTask} task={todo}/>)
        :<Todo task={todo} key={index} toggleComplete={toggleComplete} 
        deleteTodo={deleteTodo} editTodo={editTodo} />))
        
      }

     
    </div>
  )
}

export default TodoWrapper