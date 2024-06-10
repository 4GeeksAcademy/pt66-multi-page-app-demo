import fib from "./actions/fibonacci";

export const initialStore=()=>{
  return {
    counter: 0,
    searchResults: [],
    fib_n: 1,
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'fib':
      const { n } = action.payload;
      return {
        ...store,
        fib_n: fib(n)
      }
      
    case 'setResults':
      console.log(action.payload)
      const { results } = action.payload;
      return {
        ...store,
        searchResults: results,
      };

    case 'incr':
      return {
        ...store,
        counter: store.counter + 1
      };

    case 'decr':
      return {
        ...store,
        counter: store.counter - 1
      };

    case 'set':
      console.log(action.payload)
      const { value } = action.payload;
      return {
        ...store,
        counter: value,
      };

    case 'change_color':
      const { id,  color } = action.payload
      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:
      throw Error('Unknown action.');
  }    
}
