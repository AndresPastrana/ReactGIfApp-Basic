import React from "react";

const Button = React.memo(({ increment }) => {
  console.log("Rendering Button");
  return (
    <button className="btn" onClick={increment}>
      Increment
    </button>
  );
});

export default Button;
