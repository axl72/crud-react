import { TodoAdd } from "./components/todoAdd";
import { TodoList } from "./components/todoList";
import { useTodo } from "./hooks/useTodo";

export const App = () => {
  const { todos, todosCount, todosPendingCount, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodo()

  return(
    <>
    <h1>Todo App: {todosCount} <small>Pendientes: {todosPendingCount}</small></h1>
    <hr />
    <div className="row">
      <div className="col-7">
        <TodoList
          todos = { todos }
          onDeleteTodo = { handleDeleteTodo }
          onToggleTodo = { handleToggleTodo }
        />
      </div>
      
      <div className="col-5">
        <h4>Agregar Todo</h4>
        <hr />
        <TodoAdd
          onNewTodo = { handleNewTodo }
        />
      </div>
    </div>
    </>
  );
}