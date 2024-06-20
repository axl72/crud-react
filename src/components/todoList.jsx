import { TodoItem } from "./todoItem"

export const TodoList = ({todos = [], onDeleteTodo, onToggleTodo }) => {
    return (<ul className="list-group">
        {
            todos.map((todo) => {
                return (
                    <TodoItem
                        key={todos.id}
                        todo={todo}
                        onDeleteTodo={onDeleteTodo}
                        onToggleTodo={onToggleTodo}
                    />
                )
            })
        }
    </ul>)
}