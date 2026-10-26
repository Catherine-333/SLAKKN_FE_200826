import { Route,Routes} from "react-router-dom"
import Navbar from "./Component/Navbar"
import About from "./Pages/About"
import Contect from "./Pages/Contect"
import Help from "./Pages/Help"
import Home from "./Pages/Home"



const App = ()=>{
return(<>





<Navbar/>
<Routes>
  <Route path ="/" element = {<Home/>} />
  <Route path ="/About" element = {<About/>} />
  <Route path ="/Contect" element = {<Contect/>} />
  <Route path ="/Help" element = {<Help/>} />
  </Routes>

</>
)
}
export default App