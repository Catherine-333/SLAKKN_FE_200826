import { useState } from "react"


const Login = () => {

    const[userName,setUserName]=useState("")

    const handleName =()=>{

    }
  return (
   <>
   <form>

<input type="text" onChange={handleName} placeholder="Enter the Name" />
<input type="text" onChange={handleEmail} placeholder="Enter the Email" />
<input type="text" onChange={handlePassword}placeholder="Enter the Password" />

   </form>
   </>
  )
}

export default Login
