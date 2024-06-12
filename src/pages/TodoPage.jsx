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
    <>
      <h1>{activeTodo().label}</h1>
    </>
  );
};

export default TodoPage;
