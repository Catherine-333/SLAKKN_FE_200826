
import { useEffect, useState } from "react"

const Todo = () => {

  const [usertask, setUserTask] = useState("")
  const [usercontact, setUserContact] = useState("")
  const [userDate, setUserDate] = useState("")

  const [datasshow, setDatasShow] = useState([])

  // Input handlers
  const handleTask = (e) => {
    setUserTask(e.target.value)
  }

  const handleContact = (e) => {
    setUserContact(e.target.value)
  }

  const handleDate = (e) => {
    setUserDate(e.target.value)
  }

  // Add Task
  const handleClick = (e) => {

    e.preventDefault()

    if (!usertask || !usercontact || !userDate) {
      alert("Please fill all fields")
      return
    }

    const obj = {
      id: Date.now(),
      usertask,
      usercontact,
      userDate
    }

    const updated = [...datasshow, obj]

    setDatasShow(updated)

    localStorage.setItem("taskdatas", JSON.stringify(updated))

    alert("Successfully Task Added")

    setUserTask("")
    setUserContact("")
    setUserDate("")
  }

  // Get Data from localStorage
  useEffect(() => {

    const show = localStorage.getItem("taskdatas")

    if (show) {
      try {
        const change = JSON.parse(show)

        if (Array.isArray(change)) {
          setDatasShow(change)
        }

      } catch (error) {
        console.log("Invalid localStorage data")
        localStorage.removeItem("taskdatas")
      }
    }

  }, [])

  return (
    <>

      <form onSubmit={handleClick}>

        <input
          type="text"
          value={usertask}
          placeholder="Enter the Task"
          onChange={handleTask}
        />

        <input
          type="text"
          value={usercontact}
          placeholder="Enter the contact"
          onChange={handleContact}
        />

        <input
          type="date"
          value={userDate}
          onChange={handleDate}
        />

        <button type="submit">Add Task</button>

      </form>

      <div>

        {datasshow.map((e) => (

          <div key={e.id}>

            <h1>{e.usertask}</h1>

            <p>{e.usercontact}</p>

            <p>{e.userDate}</p>

          </div>

        ))}

      </div>

    </>
  )
}

export default Todo
