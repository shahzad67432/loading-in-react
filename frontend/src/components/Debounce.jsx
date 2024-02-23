import { useEffect, useState } from "react";

function useDebounce(value, timeout) {
    const [debounceValue, setDebounceValue] = useState(value)
    useEffect(()=>{
        let timeoutNumber = setTimeout(()=>{
            setDebounceValue(value)
        }, timeout)
        return ()=>{ clearTimeout(timeoutNumber)}
    }, [value, timeout])

    return debounceValue;
}

export default useDebounce;