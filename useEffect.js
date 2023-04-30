import React, { useState, useEffect } from "react";

const useEffect = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json));
  }, [resourceType]);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div>{windowWidth}</div>
      <div>
        <button onCLick={() => setResourceType("posts")}>Posts</button>
        <button onCLick={() => setResourceType("users")}>Users</button>
        <button onCLick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map(item => (
        <pre>{JSON.stringify(item)}</pre>
      ))}
    </>
  );
};

export default useEffect;
