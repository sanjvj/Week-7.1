import { useContext, useState } from 'react'
import { CountContext } from './context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CountContext.Provider value={count}>
      <Count setCount={setCount}></Count>

    </CountContext.Provider>
    </>
  )
}


function Count({setCount}){
  return <>
    
    <CountRenderer ></CountRenderer>
    <Buttons setCount={setCount}></Buttons>

  </>
}


function Buttons({setCount}){
  const count = useContext(CountContext)
  return <>
    <button onClick={()=>{setCount(count+1)}}>Increase</button>  
    <button onClick={()=>{setCount(count-1)}}>Decrease</button>
  </>
  
  
}

function CountRenderer(){
  const count = useContext(CountContext);
  return <>
    {count}
  </>
}

export default App
