import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect, useState } from "react"



function App() {

  const [activeCategory, setActiveCategory] = useState("All");

  const [todos, setTodos] = useState([
    {
      id:1,
      title: "Learn JavaScript",
      completed: true
    },
    {
      id:2,
      title: "Learn React",
      completed: false
    },
    {
      id:3,
      title: "Walking",
      completed: true
    }
  ])

  useEffect(() => {
    console.log(todos)
  }, [todos])


  const filteredList =
  activeCategory === "All"
    ? todos
    : activeCategory === "Active"
    ? todos.filter((todo) => todo.completed !== true)
    : todos.filter((todo) => todo.completed !== false);


  const handleToggleCompleted = (id) => {
    const updateTodos = todos.find((todo) => todo.id === id)
    updateTodos.completed = !updateTodos.completed

    const newTodos = todos.map((todo) => (todo.id === id ? updateTodos : todo))
    setTodos(newTodos)
  }


  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }


  const handleClear = () => {
    setTodos(todos.filter((todo)=> todo.completed === false))
  }


  return (
    <>
      <section className="todoapp">
        <Header  addTodos={setTodos} todos={todos}/>
        <Content 
         addTodos={setTodos} todos={todos}
         handleToggleCompleted={handleToggleCompleted}
         filteredList={filteredList}
         handleDelete={handleDelete}
         setActiveCategory={setActiveCategory}
         activeCategory={activeCategory}
         handleClear={handleClear}
         />
      </ section>

      <Footer />
    </>
  );
}

export default App;
