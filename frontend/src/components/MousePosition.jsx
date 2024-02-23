import { useEffect, useState } from "react";

function useMousePosition() {
    const [position, setPosition] = useState({x:0, y:0})
    const mousePosition = (e)=>{
        setPosition({x: e.clientX, y:e.clientY})
    }
    useEffect(()=>{
        window.addEventListener('mousemove', mousePosition)
        return ()=>{
            window.removeEventListener("mousemove", mousePosition)
        }
    },[])
    return position;
}

export default useMousePosition;