import React, { useState, useRef, useEffect } from "react";

const useRef = () => {
  const [name, setName] = useState("");
  const prevNameRef = useRef("");
  const inputRef = useRef();

  const focus = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    prevNameRef.current = name;
  }, [name]);

  return (
    <>
      <input
        type="text"
        ref={inputRef}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={focus}>FOCUS</button>
      <p>
        My name is {name} and it used to be {prevNameRef.current}
      </p>
    </>
  );
};

export default useRef;
