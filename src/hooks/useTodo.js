import { useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { useEffect } from "react"

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleNewTodo = (todo) => {
        dispatch({
            type: "Add Todo",
            payload: todo
        })
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: "Delete Todo",
            payload: id
        })
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: "Toggle Todo",
            payload: id
        })
    }

    return {
        todos,
        todosCount: todos.length,
        todosPendingCount: todos.filter(todo => !todo.done).length,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo
    }
}