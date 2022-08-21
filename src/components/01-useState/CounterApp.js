import React, { useState } from "react";

const CounterApp = () => {
    const [{ counter1, counter2 }, setCounter] = useState({
        counter1: 10,
        counter2: 20,
    });

    return (
        <>
            <h1>Counter {counter1} </h1>
            <h1>Counter {counter2} </h1>

            <button
                onClick={() =>
                    setCounter((count) => {
                        return {
                            ...count,
                            counter1: counter1 + 1,
                        };
                    })
                }
            >
                +1
            </button>
        </>
    );
};

export default CounterApp;
