import { RecipeCard } from "../components/RecipeCard";
import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer"; 

const RecipePage = () => {
  const [input, setInput] = useState("");
  const { store, dispatch } = useGlobalReducer();

  const handleSubmit = async () => {
    const API_KEY = "150b3d1fc44d4503a4808decd9346790";
    const URL = `https://api.spoonacular.com/recipes/complexSearch?query=${input}&apiKey=${API_KEY}`

    const response = await fetch(URL);
    if (response.ok) {
      const data = await response.json();
      dispatch({
        type: 'setResults',
        payload: {
          results: data.results
        }
      });
      setInput("");
    }

  };

  return (
    <>
      <div className="container">
        <h1>Search For Recipes</h1>
        <form onSubmit={ev => {
          ev.preventDefault();
          handleSubmit();
        }}>
          <input
            type="text"
            value={input}
            onChange={ev => setInput(ev.target.value)}
          />
          <button className="btn btn-primary">
            Search
          </button>
          {store.searchResults.map(res => <RecipeCard recipe={res} />)}
        </form>
      </div>
    </>
  );
};

export default RecipePage;
