import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer"; 
import Card from "./Card";

const DisplayCard = () => {
  const { store, dispatch } = useGlobalReducer();

  return <Card>{store.counter}</Card>;
};

export default DisplayCard;
