import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useState } from "react";

const TodoDisplay = ({ todo, onClick }) => {
  return (
    <>
      <input
        type="checkbox"
        checked={todo.is_done}
        onChange={onClick}
        id={`todo-${todo.id}`}
      />
      <label onClick={onClick} htmlFor={`todo-${todo.id}`}>
        {todo.label}
      </label>
    </>
  );
};

const TodoEditor = ({ todo, onComplete }) => {
  const { dispatch } = useGlobalReducer();
  const [input, setInput] = useState(todo.label);

  const editTodo = async (ev) => {
    ev.preventDefault();
    const updatedTodo = {
      ...todo,
      label: input,
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
    onComplete();
  };

  return (
    <form onSubmit={(ev) => editTodo(ev)}>
      <input
        type="text"
        value={input}
        onChange={(ev) => setInput(ev.target.value)}
      />
    </form>
  );
};

const TodoItem = ({ todo }) => {
  const { dispatch } = useGlobalReducer();
  const [isEditing, setIsEditing] = useState(false);

  const toggleDone = async () => {
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

  const deleteTodo = async () => {
    const resp = await fetch(
      `https://playground.4geeks.com/todo/todos/${todo.id}`,
      {
        method: "DELETE",
      }
    );

    if (resp.ok) {
      dispatch({
        type: "delete_todo",
        todo_id: todo.id,
      });
    }
  };

  return (
    <li>
      {isEditing ? (
        <TodoEditor todo={todo} onComplete={() => setIsEditing(!isEditing)} />
      ) : (
        <TodoDisplay todo={todo} onClick={toggleDone} />
      )}
      {isEditing ? (
        ""
      ) : (
        <i
          className="fa-solid fa-pen-to-square hover-green"
          onClick={() => setIsEditing(!isEditing)}
        ></i>
      )}
      <i
        className="fa-solid fa-dumpster-fire hover-red"
        onClick={deleteTodo}
      ></i>
      <Link to={`/todos/${todo.id}`}>
        <i className="fa-solid fa-link"></i>
      </Link>
    </li>
  );
};

export default TodoItem;
