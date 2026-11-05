  import { useState } from "react"

const App =()=>{
    const [name , setName] =useState(" ")

    const handleclick = (e) => {
   setName(e.target.value)
}

  return(
  <>
<form>
  <input type="text" onChange={handleclick} placeholder='Student Name' />
  <br />
  <button type="submit">Submit</button>
</form>
<h1>{name}</h1>
  </>
  )

}
export default App