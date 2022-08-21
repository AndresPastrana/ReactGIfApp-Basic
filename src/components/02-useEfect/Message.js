import React from "react"
import { useEffect } from "react";
import useCoords from "../../hooks/useCoords";

const Message = () => {


    // Hooks
    const [coords, setCoords] = useCoords();
    const { x, y } = coords

    useEffect(() => {

        // Effect
        const doSomething = (e) => {
            const { x, y } = e;
            setCoords({ x, y })
        }
        console.log('Component Did Nount');
        window.addEventListener('mousemove', doSomething);

        // Clean Up Process
        return () => {
            console.log('Component Unmount');
            window.removeEventListener('mousemove', doSomething)
        }
    }, [])

    return (
        <>
            <p> Eres genial !!!</p>
            <p>x: {x} y: {y}</p>
        </>
    )

}


export default Message