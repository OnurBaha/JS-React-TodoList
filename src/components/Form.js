import React, { useState } from 'react'
import { v4 as uuid } from "uuid";


function Form({ addTodos, todos }) {

  const [title, setTitle] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()

    if(title.trim() ===''){
      return false;
  }

    const todo = ({
      id: uuid(),
      title,
      completed: false,
    })
    addTodos([todo, ...todos])

    setTitle("")
  }

  return (
    <form onSubmit={onSubmit}>
			<input 
      className="new-todo" 
      placeholder="What needs to be done?"
      value={title} 
      onChange={(e)=> setTitle(e.target.value)}
      autoFocus />
	</form>
  )
}

export default Form
