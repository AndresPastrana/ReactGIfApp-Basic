
import { useState } from "react";


export const useCounter = (currentState = 0) => {
    const [counter, setCounter] = useState(currentState);


    const increment = () => setCounter(counter + 1);
    const decrement = () => setCounter(counter - 1);
    const reset = () => setCounter(0);


    return [counter, { increment, decrement, reset }]
}

