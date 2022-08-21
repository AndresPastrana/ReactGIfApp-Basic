import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useGetRequest } from "../../hooks/useGetRequest";
import "./LayoutEffect.css";

const LayoutEffect = () => {
  const [counter, { increment }] = useCounter(1);
  const [boxSize, setboxSize] = useState({});
  const pTag = useRef();

  const state = useGetRequest(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { data } = state;
  const { author, quote } = !!data && data[0];

  useLayoutEffect(() => {
    setboxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <>
      <h1>LayoutEffect </h1>
      <hr></hr>

      <div>
        <blockquote>
          <p ref={pTag}>{quote}</p>
          <footer>{author}</footer>
        </blockquote>
      </div>

      <button className="btn" onClick={increment}>
        Next Quote
      </button>
      <pre>{JSON.stringify(boxSize, null, 3)}</pre>
    </>
  );
};

export default LayoutEffect;
