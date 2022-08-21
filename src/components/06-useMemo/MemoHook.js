import React, { useMemo, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { procesoPesado } from "../../helper/procesoPesado";

const MemoHook = () => {
  // console.log("Rendering Memorize Component");

  const [counter, { increment }] = useCounter(10000);
  const [show, setshow] = useState(true);

  const handleClick = () => setshow(!show);

  //   useMemo guarda el resultado memorizado de una funcion, solamente rememoriza el reusltado si cambia su dependecia
  const pp = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <>
      <h1>
        Counter: <small> {counter}</small>{" "}
      </h1>

      <p>{pp}</p>

      <button className="btn" onClick={increment}>
        +1
      </button>

      <button className="btn" onClick={handleClick}>
        Show/Hide/ {JSON.stringify(show)}
      </button>
    </>
  );
};
export default MemoHook;
