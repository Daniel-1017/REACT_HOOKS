import React, { useState, useMemo, useDeferredValue } from "react";

/* 
useDeferredValue waits for changes, if there are many changes happening really fast it will wait until they finish.
*/

const List = ({ input }) => {
  const LIST_SIZE = 20000;
  const deferredInput = useDeferredValue(input);
  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{deferredInput}</div>);
    }
    return l;
  }, [deferredInput]);

  return list;
};

const useDeferredValue = () => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      <List input={input} />
    </>
  );
};

export default useDeferredValue;
