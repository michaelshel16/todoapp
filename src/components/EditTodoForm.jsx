import React from 'react';
import { useState } from 'react';
import "./EditTodoForm.css";


function EditTodoForm({editTodo,task}) 
{
    const [value , setvalue] = useState(task.task); 
     
  const handleSubmit= (e) =>
   {
     
    e.preventDefault();
    
    editTodo(value,task.id);
   
   }
    
  return (
    <div className='todo-form-container'>
        <form className='todo-form' onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={(e)=>setvalue(e.target.value)} placeholder="Edit todo"/>
            <button type='submit'>Add Task</button>
        </form>
     
    </div>
  )
}

export default EditTodoForm