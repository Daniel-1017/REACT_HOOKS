import React, { useId } from "react";

const EmailForm = () => {
  const id = useId();
  return (
    <>
      <label htmlFor={`${id}-email`}>Email</label>
      <input type="text" id={`${id}-email`} />
      <label htmlFor={`${id}-password`}>Password</label>
      <input type="password" id={`${id}-password`} />
    </>
  );
};

const useId = () => {
  return (
    <>
      <EmailForm />
      <article style={{ marginBlock: "1rem" }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque iusto
        facilis sint! Repellat asperiores deleniti eaque aspernatur, repudiandae
        soluta nostrum perferendis labore dolorum iste commodi quod illo. Sint,
        laborum quisquam.
      </article>
      <EmailForm />
    </>
  );
};

export default useId;
