import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todo: [
        {
            id: 1,
            todo: 'Learn React',
            isDone: false
        }
    ],
    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    editTodo: (id, todo)=> {},
    toggleDone: (id) => {}
})

export const useTodo = () =>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
