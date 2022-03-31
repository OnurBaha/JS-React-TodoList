import React from 'react'
import ContentFooter from './ContentFooter'
import TodoList from './TodoList'


function Content(
    { todos,
        handleToggleCompleted,
        handleDelete,
        filteredList,
        setActiveCategory,
        activeCategory,
        handleClear }) {

    return (
        <>
            <section className="main">
                <input className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all">
                    Mark all as complete
                </label>

                <TodoList
                    todos={todos}
                    handleToggleCompleted={handleToggleCompleted}
                    filteredList={filteredList}
                    handleDelete={handleDelete}
                />
            </section>

            <ContentFooter
                filteredList={filteredList}
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory}
                handleClear={handleClear}
            />
        </>
    )
}

export default Content
