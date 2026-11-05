
// import { useEffect, useState } from "react"

// const Todo = () => {
//     console.log("Component Running");

//     const [datas, setDatas] = useState(0)

//     const HandleClick = () => {
//         setDatas(datas + 1)
//     }
//     useEffect(()=>{
//         console.log('useEffect running');
//         setDatas(datas+1)
        
//     },[])

//     return (
//         <>
//             <h1>{datas}</h1>
            
//         </>
//     )
// }

// export default Todo






import React, { useState } from 'react'

const Todo = () => {
    const[userTask,setUSerTask]=useState("")
    const[userContact,setUSerContact]=useState("")
    const[userDate,setUSerDate]=useState("")

    const handleTask =(e)=>{
        setUSerTask(e.target.value)

    }
    const handleContact =(e)=>{
    setUSerContact(e.target.value)
        
    }
    const handleDate =(e)=>{
    setUSerDate(e.target.value)
        
    }
    const handleClick=(e)=>{
    e.preventDefault()
    }
    const obj={id:Date.now(),userTask,userContact,userDate}

    const copy =JSON.parse(localStorage.getItem("taskDatas")) || []
    copy.push(obj)
    localStorage.setItem("taskDatas",JSON.stringify((copy)))
    alert("Sucessfully Done")
    
    setUSerTask(" ")
    setUSerContact(" ")
    setUSerDate(" ")

  return (
    <>
    
    
    <form>
        <input type="text" value={userTask} placeholder='Enter the task' onChange={handleTask}/>
        <input type="text" value={userContact} placeholder='Enter the Contact'onChange={handleContact} />
        <input type="text" value={userDate} placeholder='Enter the end date' onChange={handleDate} />
        <button onClick={handleClick}>Add Task</button>
    </form>
    </>
  )
}

export default Todo
