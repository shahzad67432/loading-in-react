import useTodos from "./Custom";

function Todos() {
    const {todos, loading} = useTodos()
    return (
        <>
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