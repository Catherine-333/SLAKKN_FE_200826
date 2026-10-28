
import { Link } from "react-router-dom"
const Banner = () => {
  return (
  <>
    <div className="bg-blue-300 font-bold p-12 h-10 ">
      <div className ="flex gap-25 mx-15">
        <Link to="/String" className="bg-white p-2 rounded-2xl w-50 text-center">String Rendering </Link>
        <Link to="/Number" className="bg-white p-2 rounded-2xl w-50 text-center">Number Rendering</Link>
         <Link to="/Boolean" className="bg-white p-2 rounded-2xl w-50 text-center">Boolean Rendering</Link>
        <Link to="/Falsey"className="bg-white p-2 rounded-2xl w-50 text-center">Falsey Rendering</Link>
       
      </div>
    </div>

    </>
  )
}

export default Banner
