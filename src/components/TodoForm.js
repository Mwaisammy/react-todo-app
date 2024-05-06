import React, { useState } from 'react'
import './TodoForm.css'


function TodoForm({addTodo}) {
    const[ value, setValue ] = useState('')
    const handleSubmit = (e) =>{
        e.preventDefault()
       addTodo(value)
       setValue("")

    }
    
  return (
    <form className='todoForm' onSubmit={handleSubmit}>

        <input type="text" className='todo-input' 
        placeholder='What is your task today?'
        onChange={(e) =>setValue(e.target.value)}
        value={value}
        />

        <button type='submit' className='todo-btn'>Add Task</button>
    </form>

  )
}

export default TodoForm