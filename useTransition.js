import React, { useState, useTransition } from "react";

/* 
Use useTransition to set priorities. Code inside useTransition is low priority.

In this case:
Without useTransition the page is rerendered once, when state changes. With useTransition the page will rerender when input change and when list is updated.

Use useTransition when you have code that can slow down your application.
*/

const useTransition = () => {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const LIST_SIZE = 20000;

  const handleChange = (e) => {
    setInput(e.target.value);
    startTransition(() => {
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  };

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      {isPending
        ? "Loading..."
        : list.map((item, index) => <div key={index}>{item}</div>)}
    </>
  );
};

export default useTransition;
