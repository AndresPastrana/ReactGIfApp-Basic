import { useState } from 'react'

const useCoords = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    return [coords, setCoords]
}

export default useCoords