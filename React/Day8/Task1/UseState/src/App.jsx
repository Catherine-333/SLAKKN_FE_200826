import { useState } from "react"

const App =()=>{
const [Catherine,setCatherine] = useState ("Arun")

const Clickme = ()=>{

  setCatherine("Kumar")

}

  return(
    <>
    
    <h1>{Catherine}</h1>
    <button onClick={Clickme}>click</button>

    </>
  )

}
export default App