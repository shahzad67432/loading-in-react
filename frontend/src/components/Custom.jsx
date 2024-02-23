import { useState, useEffect } from "react";
import axios from 'axios'

// we can use the react useQuery hook instead of creating our own hook.
// try to google it.
function useTodos() {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)
    const [inputTime, setInputTime] = useState(1)

    useEffect(async ()=>{

        const value = setInterval(async ()=>{

            await axios.get("https://sum-server.100xdevs.com/todos")
                .then(res => {
                    setTodos(res.data.todos)
                    setLoading(false)
                })},inputTime*1000
        )
        await axios.get("https://sum-server.100xdevs.com/todos")
                .then(res => {
                    setTodos(res.data.todos)
                    setLoading(false)
                })
        return (
            ()=>{
                clearInterval(value)
            }
        )
    },[inputTime])
    return {todos, loading};
}

export default useTodos;