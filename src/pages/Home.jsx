import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

import "./Home.css";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="container">
      <h1>Shane's Recipes With Strange Pronunciations</h1>
      <div className="container d-flex flex-col">
        <Link to="/recipes">Check out these recipes!</Link>
      </div>
    </div>
  );
};
