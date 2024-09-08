import { useState } from 'react'
import {TodoProvider} from './Context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <TodoProvider value={{todo, editTodo, addTodo, toggleDone, deleteTodo}}>
      <h1 className="text-3xl font-bold underline bg-slate-500">
        Hello world!
      </h1>
    </TodoProvider>
  )
}

export default App
