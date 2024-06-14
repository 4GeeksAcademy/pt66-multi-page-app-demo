import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

import "./Home.css";
import TodoItem from "../components/TodoItem.jsx";
import { useEffect, useState } from "react";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const [input, setInput] = useState("");

  const addTodo = async (ev) => {
    ev.preventDefault();
    const todo = {
      label: input,
      is_done: false,
    };

    const resp = await fetch(
      "https://playground.4geeks.com/todo/todos/sombra",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      }
    );

    if (resp.ok) {
      const data = await resp.json();
      dispatch({
        type: "create_todo",
        todo: data,
      });
      setInput("");
    }
  };

  useEffect(() => {
    const setup = async () => {
      const user = await fetch(
        "https://playground.4geeks.com/todo/users/sombra"
      );
      if (user.ok) {
        const data = await user.json();
        dispatch({
          type: "read_from_api",
          todos: data.todos,
        });
      } else {
        await fetch("https://playground.4geeks.com/todo/users/sombra", {
          method: "POST",
        });
        dispatch({
          type: "read_from_api",
          todos: [],
        });
      }
    };
    setup();
  }, []);

  return (
    <div className="container">
      <ul className="todo-list">
        <li>
          <form onSubmit={addTodo}>
            <input
              className="todo-input"
              value={input}
              onChange={(ev) => setInput(ev.target.value)}
            />
          </form>
        </li>
        {store.todos?.map((todo, idx) => (
          <TodoItem key={idx} todo={todo} />
        ))}
      </ul>
    </div>
  );
};
