import { useState } from "react"

const App =()=>{

const [catherine,setCatherine] = useState(0) 

  return(
    
    <>
   <h1>Count:{catherine}</h1>
   <br /><br />
   <button onClick={()=>setCatherine(i =>i+1)}>Increment</button>
   <br /><br />
   <button onClick={()=>setCatherine(i =>i-1)}>Decrement</button>
   <br /><br />

   <button onClick={()=>setCatherine(i =>i=0)}>Reset</button>
   
    
    
    </>
  )

}
export default App