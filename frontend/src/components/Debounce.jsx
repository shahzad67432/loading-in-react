import { useEffect, useState } from "react";

function useDebounce(value, timeout) {
    const [debounceValue, setDebounceValue] = useState(value)
    useEffect(()=>{
        let timeoutNumber = setTimeout(()=>{
            setDebounceValue(value)
        }, timeout)
        return ()=>{ clearTimeout(timeoutNumber)}
    }, [value])

    return value, delay
}

debounceValue(value, 500)

export default useDebounce;