import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect } from "react";

const TodoPage = () => {
  const { store } = useGlobalReducer();
  const { todoId } = useParams();

  const activeTodo = () => {
    return store.todos.find((todo) => todo.id === parseInt(todoId));
  };

  return (
    <div className="container">
      <h1>{activeTodo().label}</h1>
    </div>
  );
};

export default TodoPage;
