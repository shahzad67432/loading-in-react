
import { useEffect, useState } from "react";
import MyComponent from "./components/Classs";
import Functional from "./components/Functional";
import Todos from "./components/Todos";
import useSWR from 'swr'

function Countters() {
  // const [ render, setRender] = useState(true)
  // useEffect(()=>{
  //   setTimeout(() => {
  //     setRender(r => !r)
  //   }, 10000);
  // })
  // const {isLoading} = useSWR('/api/user', fetcher)
  return (  
    <>
      <div> <Todos/> </div>

    </>
  );
}

export default Countters;