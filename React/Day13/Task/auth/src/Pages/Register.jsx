
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Register = () => {

  const navigate = useNavigate()

  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [error, setError] = useState("")

  const handleName = (e) => {
    setUserName(e.target.value)
  }

  const handleEmail = (e) => {
    setUserEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setUserPassword(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault()

    if (!userName || !userEmail || !userPassword) {
      setError("Please Fill the Form")
      return
    }

    const datas = JSON.parse(localStorage.getItem("authdatas") || "[]")

    const checkEmail = datas.find(
      (e) => e.userEmail === userEmail
    )

    if (checkEmail) {
      setError("Email Already Used")
      return
    }

    let obj = { id: Date.now(), userName, userEmail, userPassword }

    datas.push(obj)

    localStorage.setItem("authdatas", JSON.stringify(datas))

    setUserName("")
    setUserEmail("")
    setUserPassword("")
    setError("")

    navigate("/Login")
  }

  return (
    <>
      <div className="bg-lime-200 p-10 flex justify-center items-center h-110">
     
      <form className="bg-orange-100 p-5 border-radius flex flex-col gap-4 w-110 h-73">
         <div>
        <h2 className="text-3xl mb-1">Register</h2>
        <p>Register Here if user new User!!</p>
        <p className="text-red-600">{error}</p>
      </div>
        <div>
          <input type="Name" value={userName} onChange={handleName} placeholder="Enter the Name"className="border border-green-400 w-100 p-1 rounded shadow" />
        </div>
         <div>
          <input type="Email" value={userEmail} onChange={handleEmail} placeholder="Enter the Email" className="border border-green-400 w-100 p-1 rounded shadow"  />
        </div>
         <div>
          <input type="Password" value={userPassword} onChange={handlePassword} placeholder="Enter the Password "  className="border border-green-400 w-100 p-1 rounded shadow" />
        </div>
        <button onClick={handleClick} className="bg-blue-600 text-white rounded p-1 w-30 shadow-2xs text-center">Submit</button>
        
      </form>
      
    </div>
    </>
  )
}


export default Register
