import React from 'react'

function TodoList({todos , handleToggleCompleted , handleDelete, filteredList}) {
    return (
        <ul className="todo-list">
            
            {filteredList.map((todo) => (
                <li key={todo.id} className={todo.completed ? "completed" : ""}> 
                <div className="view">
                    <input 
                     className="toggle" 
                     type="checkbox"
                     checked={todo.completed} 
                     onChange={() => handleToggleCompleted(todo.id)}
                     />
                    <label>{todo.title}</label>
                    <button
                     className="destroy" 
                     onClick={() => handleDelete(todo.id)}
                     >
                     </button>
                </div>
            </li>
                ))}
        </ul>
    )
}

export default TodoList
