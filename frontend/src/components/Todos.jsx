import { useState } from "react";
import useTodos from "./Custom";

function Todos() {
    const {todos, loading} = useTodos()
    const {inputTime, setInputTime}  = useTodos()
    return (
        <>
            <input type="text" onChange={(e)=>{setInputTime(e.target.value)}}/>
            <div>
                {inputTime}
            </div>
            {loading ? <div> ...loading </div> : todos.map(todo => <Track todo={todo} /> )}
        </>
    );
}

function Track({todo}){
    return (
        <div>
            <div> {todo.title} </div>
            <div> {todo.description} </div>
        </div>
    )
}

export default Todos;