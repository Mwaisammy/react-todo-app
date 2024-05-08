import React, { useState } from 'react'
import TodoForm from './TodoForm'
import './TodoWrapper.css'
import { v4 as uuidv4 } from 'uuid'
import Todo from './Todo';
import EditTodo from './EditTodo';

uuidv4();

function TodoWrapper() {

    const [todos, setTodos] = useState([])
    const addTodo = (todo) => {
        const trimmedTodo = todo.trim();

        if (trimmedTodo !== '') {
            if (trimmedTodo.length > 2) { // corrected 'length' misspelling
                setTodos([...todos, { id: uuidv4(), task: trimmedTodo, completed: false, isEditing: false }]);
            } else {
                window.alert("Todo must contain more than two characters!");
            }
        } else {
            window.alert("Add a todo first");
        }
        
    }
      

    const toggleCompleted = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))

    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
        console.log("todo deleted")

    }

    const editTodo = (id) => {
         setTodos(todos.map( todo => todo.id === id ? {
                        ...todo, isEditing : !todo.isEditing} : todo))    
                
        
       
        

    }

    const editTask = (task, id) => {
        setTodos(todos.map( todo => todo.id === id ? {
            ...todo, task , isEditing : !todo.isEditing
        } : todo))

    }
    return (
        <div className='todo-wrapper'>
            <h2>Todo list</h2>

            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (

                todo.isEditing ? (<EditTodo editTodo={editTask} task={todo}/>) : (

                    <Todo task={todo} key={index}
                        toggleCompleted={toggleCompleted}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                    />
                )

            )

            )}
        </div>
    )
}

export default TodoWrapper


