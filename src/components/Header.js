import React from 'react'
import Form from "./Form"

function Header( {addTodos, todos} ) {
  return (
    <header className="header">
		<h1>todos</h1>
        <Form addTodos={addTodos} todos={todos}/>
	</header>
  )
}

export default Header
