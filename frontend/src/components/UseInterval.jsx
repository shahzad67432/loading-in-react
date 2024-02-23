import { useEffect, useState } from "react";

function useIntervavl(fn, timeout) {
    useEffect(()=>{
        setInterval(()=>{
            fn()
        }, timeout)
    }, [])
}

export default useIntervavl;