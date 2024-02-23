
import { useEffect, useState } from "react";
import MyComponent from "./components/Classs";
import Functional from "./components/Functional";
import Todos from "./components/Todos";
import useSWR from 'swr'
import useMousePosition from "./components/MousePosition";

function useIsOnline(){
  const [isOnline, setIsOnline] = useState(  window.navigator.onLine)
  useEffect(()=>{
    window.addEventListener("online", ()=>{
      setIsOnline('true')
    }
    )

    window.addEventListener("offline", ()=>{
      setIsOnline('false')
    }
    )
  }, [])
  return isOnline
}

function Countters() {
  // const [ render, setRender] = useState(true)
  // useEffect(()=>{
  //   setTimeout(() => {
  //     setRender(r => !r)
  //   }, 10000);
  // })
  // const {isLoading} = useSWR('/api/user', fetcher)
  const IsOnline = useIsOnline()
  const mousePointer = useMousePosition();
  return (  
    <>
      {/* <div> <Todos/> </div> */}
      {IsOnline ? <div> Button1 </div> : <div> Button2 </div>}
      <div>
        Your mouse position is {mousePointer.x} {mousePointer.y}
      </div>

    </>
  );
}

export default Countters;