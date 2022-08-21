import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useGetRequest } from "../../hooks/useGetRequest";
import "./Quote.css";

const Quote = () => {
  const [counter, { increment }] = useCounter(1);

  const state = useGetRequest(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { loading, data } = state;
  const { author, quote } = !!data && data[0];
  return (
    <>
      <h1>Quote </h1>
      <hr></hr>
      {loading ? (
        <div className="loading">Loading ...</div>
      ) : (
        <div>
          <blockquote>
            <p>{quote}</p>
            <footer>{author}</footer>
          </blockquote>
        </div>
      )}

      <button className="btn" onClick={increment}>
        Next Quote
      </button>
    </>
  );
};

export default Quote;
