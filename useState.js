import React, { useState } from "react";

const useState = () => {
  const [count, setCount] = useState();

  const decrementCount = () => {
    setCount(prevCount => prevCount - 1);
  };

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
};

export default useState;
