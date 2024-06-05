import React, { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer"; 
import Card from "./Card";

const InputCard = () => {
  const [value, setValue] = useState(0);
  const { store, dispatch } = useGlobalReducer();

  return (
    <Card>
      <button className="btn btn-primary" onClick={() => dispatch({
        type: 'incr'
      })}>
        ++
      </button>
      <button className="btn btn-danger" onClick={() => dispatch({
        type: 'decr'
      })}>
        --
      </button>
      <input
        type="number"
        value={value}
        onChange={(ev) => setValue(parseInt(ev.target.value))}
      />
      <button className="btn btn-secondary" onClick={() => dispatch({
        type: 'set',
        payload: {
          value: value
        },
      })}>set</button>
    </Card>
  );
};

export default InputCard;
