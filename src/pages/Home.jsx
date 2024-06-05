import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

import "./Home.css";
import DisplayCard from "../components/DisplayCard.jsx";
import InputCard from "../components/InputCard.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="container">
      <h1>Shane's Recipes With Strange Pronunciations</h1>
      <div className="container d-flex flex-col">
        <Link to="/recipes">This link doesn't lose application state.</Link>
        &nbsp;
        <a href="/recipes">But anchor tags do.</a>
      </div>
      <DisplayCard />
      <InputCard />
    </div>
  );
};
