import React from 'react';
import { useState } from 'react';
import "./TodoForm.css";


function TodoForm({addTodo}) 
{
    const [value , setvalue] = useState(''); 
     
  const handleSubmit= (e) =>
   {
     
    e.preventDefault();
    
    addTodo(value);
    setvalue("");
   }
    
  return (
    <div className='todo-form-container'>
        <form className='todo-form' onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={(e)=>setvalue(e.target.value)} placeholder="Enter todo"/>
            <button type='submit'>Add Task</button>
        </form>
     
    </div>
  )
}

export default TodoForm