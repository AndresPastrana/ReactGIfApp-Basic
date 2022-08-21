import React from 'react'
import { useCounter } from '../../hooks/useCounter'

const CounterHookApp = () => {
    const [counter, { increment, decrement, reset }] = useCounter(10);


    return (
        <>
            <h1>Counter with hook </h1>
            <hr></hr>

            <p>Counter {counter} </p>


            <button className='btn' onClick={increment}>+1</button>
            <button className='btn' onClick={decrement}>-1</button>
            <button className='btn' onClick={reset}>Reset</button>
        </>
    )
}

export default CounterHookApp