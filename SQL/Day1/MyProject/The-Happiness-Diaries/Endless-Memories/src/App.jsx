import { useState } from "react"
import About from "./Component/About"
import Celebration from "./Component/Celebration"
import Contact from "./Component/Contact"
import DayCards from "./Component/DayCards"
import Footer from "./Component/Footer"
import Header from "./Component/Header"
import Navbar from "./Component/Navbar"

const App = () => {
  const [completed, setCompleted] = useState([])

  const handleComplete = (task) => {
    setCompleted((currentCompleted) =>
      currentCompleted.includes(task)
        ? currentCompleted.filter((item) => item !== task)
        : [...currentCompleted, task]
    )
  }

  return (
    <>
      <Navbar />
      <Header />
      <About />
      <DayCards completed={completed} handleComplete={handleComplete} />
      <Celebration />
      <Contact />
      <Footer />
    </>
  )
}

export default App
