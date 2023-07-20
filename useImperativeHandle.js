import React, { useState, useRef, useImperativeHandle } from "react";

const CustomInput = React.forwardRef(({ styles, ...props }, ref) => {
  useImperativeHandle(
    ref,
    () => {
      return { alertHi: () => alert("HI") };
    },
    []
  );

  return <input {...props} style={{ backgroundColor: "red", ...styles }} />;
});

const useImperativeHandle = () => {
  const [value, setValue] = useState("red");
  const inputRef = useRef();

  return (
    <>
      <CustomInput
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <br />
      <button onClick={() => inputRef.current.alertHi()}>Focus</button>
    </>
  );
};

export default useImperativeHandle;
