import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const TodoItem = ({ todo }) => {
  const { dispatch } = useGlobalReducer();

  const handleClick = async () => {
    const updatedTodo = {
      ...todo,
      is_done: !todo.is_done,
    };
    const resp = await fetch(
      `https://playground.4geeks.com/todo/todos/${todo.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTodo),
      }
    );

    if (resp.ok) {
      const data = await resp.json();

      dispatch({
        type: "edit_todo",
        todo: data,
      });
    }
  };

  return (
    <li>
      <input type="checkbox" checked={todo.is_done} id={`todo-${todo.id}`} />
      <label onClick={handleClick} htmlFor={`todo-${todo.id}`}>
        {todo.label}
      </label>
      <i className="fa-solid fa-dumpster-fire"></i>
      <Link to={`/todos/${todo.id}`}>
        <i className="fa-solid fa-link"></i>
      </Link>
    </li>
  );
};

export default TodoItem;
