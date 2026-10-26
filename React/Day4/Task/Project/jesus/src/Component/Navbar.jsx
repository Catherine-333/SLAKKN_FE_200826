import {Link} from "react-router-dom"
const Navbar =()=>{
return(<>


<div className="bg-green-500  flex justify-between font-bold p-3 item-center ">
   <div className="bg-blue-500  mx-15 p-1 rounded-2xl w-50 text-center">
    logo
   </div>
   <div className="mx-15 flex gap-10">
    <Link to="/">Home</Link>
    <Link to="/About">About</Link>
    <Link to="/Contect">Contect</Link>
    <Link to="/Help">Help</Link>
   </div>
</div>

</>)
}
export default Navbar