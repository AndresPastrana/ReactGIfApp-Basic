import React, { useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import Small from "./Small";
const Memorize = () => {
  // console.log("Rendering Memorize Component");

  const [counter, { increment }] = useCounter(0);
  const [show, setshow] = useState(true);

  const handleClick = () => setshow(!show);

  return (
    <>
      <h1>
        Counter: <Small text={counter}> </Small>{" "}
      </h1>
      <button className="btn" onClick={increment}>
        +1
      </button>

      <button className="btn" onClick={handleClick}>
        Show/Hide/ {JSON.stringify(show)}
      </button>
    </>
  );
};
export default Memorize;
