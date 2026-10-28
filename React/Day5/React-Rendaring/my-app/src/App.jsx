import Home from "./Pages/Home"
import Navbar from "./Component/Navbar"
import Banner from "./Component/Banner"
import { Route, Routes } from "react-router-dom"
import StringRendaring from "./Pages/StringRendaring"
import NumberRendaring from "./Pages/NumberRendaring"
import Falsey from "./Pages/Falsey"
import BooleanRendaring from "./Pages/BooleanRendaring"


const App = () => {
  return (
   <>
 
   
   <Navbar/>
   <Banner/>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/String" element={<StringRendaring />} />
    <Route path="/Number" element={<NumberRendaring />} />
    <Route path="/Boolean" element={<BooleanRendaring/>}/>
    <Route path="/Falsey" element={<Falsey />} />

    
   </Routes>
   
   </>
  )
}

export default App
