import React from 'react'
import './Todo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

function Todo({task, toggleCompleted, deleteTodo, editTodo}) {
  return (
    <div className='todo'>
        <p onClick={() => toggleCompleted(task.id)} className={`${task.completed ? 'completed' : ""}`}>{task.task}</p>
        <div className='todos-btn'>
        <FontAwesomeIcon icon={faPenToSquare} className="icon" onClick={() => editTodo(task.id)}/>
        <FontAwesomeIcon icon={faTrash} className="icon" onClick={() => deleteTodo(task.id)}/>
            {/* <button>Edit</button>
            <button>Delete</button> */}

        </div>
    </div>
  )
}

export default Todo