import fib from "./actions/fibonacci";

export const initialStore = () => {
  return {
    todos: [],
  };
};

export default function storeReducer(store, action = {}) {
  if (action.type === "create_todo") {
    const { todo } = action;

    return {
      ...store,
      todos: [todo, ...store.todos],
    };
  } else if (action.type === "read_from_api") {
    const { todos } = action;

    return {
      ...store,
      todos: todos,
    };
  } else if (action.type === "edit_todo") {
    const { todo } = action;

    const updateIdx = store.todos.findIndex(
      // item is an item in the store
      (item) => item.id === todo.id
    );
    return {
      ...store,
      todos: store.todos.toSpliced(updateIdx, 1, todo),
    };
  } else if (action.type === "delete_todo") {
    const { todo_id } = action;
    
    const deleteIdx = store.todos.findIndex((todo) => todo.id === todo_id);
    return {
      ...store,
      todos: store.todos.toSpliced(deleteIdx, 1),
    };
  } else {
    throw Error("Unknown action.");
  }
}
