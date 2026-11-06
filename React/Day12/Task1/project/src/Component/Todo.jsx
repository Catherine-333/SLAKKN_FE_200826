
import { useEffect, useState } from "react"

const Todo = () => {

    console.log("Component Running")

    const [datas, setDatas] = useState(0)

    const HandleClick = () => {
        setDatas(datas + 1)
    }

    useEffect(() => {
        console.log("useEffect running")
        setDatas(datas + 1)
    }, [])

    return (
        <>
            <h1>{datas}</h1>

            <button onClick={HandleClick}>Click </button>
           
            
        </>
    )
}

export default Todo
