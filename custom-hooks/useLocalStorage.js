import React, { useState, useEffect } from "react";

const getSavedValue = (key, initialValue) => {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
};

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

const App = () => {
  const [name, setName] = useLocalStorage("name", "");

  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  );
};

export default App;
