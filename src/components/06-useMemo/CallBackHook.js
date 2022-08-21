import { cleanup } from "@testing-library/react";
import React, { useCallback, useEffect, useState } from "react";
import Button from "./Button";

// We should use the callback hook when we need to pass a fucntion as a prop of a
// childreen componenet

const CallBackHook = () => {
  // Hooks
  const [counter, setCounter] = useState(0);

  {
    /* useCallback use case  #2*/
  }
  // useEffect(() => {
  //   //  ????

  //   return () => {
  //     cleanup();
  //   };
  // }, [increment]);

  const increment = useCallback(() => {
    setCounter((c) => c + 1);
  }, [setCounter]);

  // // Handlres
  // const increment = () => setCounter(counter + 1);
  return (
    <div>
      <h1>Counter: {counter}</h1>

      {/* useCallback use case  #1*/}
      <Button increment={increment} />
    </div>
  );
};

export default CallBackHook;
