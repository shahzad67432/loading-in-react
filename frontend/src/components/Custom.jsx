import { useState, useEffect } from "react";
import axios from 'axios'

function useTodos() {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        axios.get("https://sum-server.100xdevs.com/todos")
            .then(res => {
                setTodos(res.data.todos)
                setLoading(false)
            })
    },[])
    return {todos, loading};
}

export default useTodos;