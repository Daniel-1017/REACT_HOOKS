import React, { useState, useEffect } from "react";

/* 
Difference between useMemo and useCallback

useMemo returns the value of the function
useCallback return the function

Use useCallback if you need to worryf about referential equality
*/

const List = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems(5));
    console.log("Updating Items");
  }, getItems);

  return items.map((item) => <div key={item}>{item}</div>);
};

const useCallback = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(
    (incrementor) => {
      return [number + incrementor, number + incrementor, number + incrementor];
    },
    [number]
  );

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };
  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onChange={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <List getItems={getItems} />
    </div>
  );
};

export default useCallback;
