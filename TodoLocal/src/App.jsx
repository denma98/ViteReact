import { useState } from 'react'
import {TodoProvider} from './Context'

function App() {
  const [todos,setTodos] = useState([])
  const addTodo = (todo) =>{
    setTodos((prev) => [{id: Date.now() ,...todo}, ...prev])
  }
  const editTodo = (id, todo) =>{
    setTodos( (prev) => prev.map((prevTodo) => prevTodo.id === id ? todo: prevTodo ) ) // if id matches then return todo else return prevTodo
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id) ) // only keeping the todos whose id is not equal to the id passed
  }

  const toggleDone = (id) => {
    setTodos((prev) => prev.map((todo) => todo.id === id ? {...prev, isDone: !prev.isDone } : todo  ))
  }

  return (
    <TodoProvider value={{todo, editTodo, addTodo, toggleDone, deleteTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
