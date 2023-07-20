import React, { useLayoutEffect, useState, useRef } from "react";

/* 
Use useLayoutEffect whenever you are manipulating the dom in a way that the user can dirrectly see (eg: Modal) based on mesurements or other things.
*/

const useLayoutEffect = () => {
  const [show, setShow] = useState(false);
  const popup = useRef();
  const button = useRef();

  useLayoutEffect(() => {
    if (popup.current == null || button.current == null) return;
    const { bottom } = button.current.getBoundingClientRect();
    popup.current.style.top = `${bottom + 25}px`;
  }, [show]);

  return (
    <>
      <button ref={button} onClick={() => setCount((prev) => !prev)}>
        Click here
      </button>
      {show && (
        <div style={{ position: "absolute" }} ref={popup}>
          This is a popup
        </div>
      )}
    </>
  );
};

export default useLayoutEffect;
