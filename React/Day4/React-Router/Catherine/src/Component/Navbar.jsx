import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <>
    
    <div>

        <div>
            logo

        </div>
        <div>
            <Link to ={"/"}>Home</Link>
            <Link to ={"/About"}>About</Link>
            <Link to ={"/Contact"}>Contect</Link>
            <Link to ={"/Help"}>Help</Link>

        </div>
    </div>
    </>
  )
}

export default Navbar
