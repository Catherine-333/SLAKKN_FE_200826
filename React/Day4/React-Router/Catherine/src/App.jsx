
import { Routes,Route} from "react-router-dom"
import Navbar from "./Component/Navbar"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Help from "./Pages/Help"
import Home from "./Pages/Home"
const App =()=>{
return(
<>

<Navbar/>



<Routes>

  <Route path = "/" element ={<Home/>}/>
  <Route path = "/About" element ={<About/>}/>
  <Route path = "/Contact" element ={<Contact/>}/>
  <Route path = "/Help" element ={<Help/>}/>
 


</Routes>
</>
)
}
export default App