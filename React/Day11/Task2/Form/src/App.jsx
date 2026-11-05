
import { useState } from "react"

const App = () => {

  const [showName, setShowName] = useState("")
  const [showAge, setShowAge] = useState("")
  const [showNumber, setShowNumber] = useState("")
  const [showDatas, setShowDatas] = useState([])

  const handleChangeName = (e) => {
    setShowName(e.target.value)
  }

  const handleChangeAge = (e) => {
    setShowAge(e.target.value)
  }

  const handleChangeNumber = (e) => {
    setShowNumber(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault()

    const datas = {
      id: Date.now(),
      name: showName,
      age: showAge,
      number: showNumber
    }

    let copy = [...showDatas]
    copy.push(datas)

    setShowDatas(copy)

    setShowName("")
    setShowAge("")
    setShowNumber("")
  }

  return (
    <>
      <form onSubmit={handleClick}>

       <input type="text" value={showName} placeholder="Enter the Name" onChange={handleChangeName} />
       <input type="text" value={showAge} placeholder="Enter the Age" onChange={handleChangeAge} />
       <input type="text" value={showNumber} placeholder="Enter the Number" onChange={handleChangeNumber} />


       

        <button type="submit">Submit</button>

      </form>

      <div>
        <table border="1">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Age</th>
              <th>Number</th>
            </tr>
          </thead>

          <tbody>
            {showDatas.map((e, i) => (
              <tr key={e.id}>
                <td>{i + 1}</td>
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>{e.number}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </>
  )
}

export default App
