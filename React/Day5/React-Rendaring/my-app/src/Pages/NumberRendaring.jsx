import { Link } from "react-router-dom"

const NumberRendaring = () => {

let Number ="8056493871"

  return (
    <>
    <div>
    <h1>This is my Number {Number}</h1>
    <Link to={"/"}  className='bg-amber-500 w-16  h-10 rounded-1xl'>Back</Link>
    
    
      </div>
      </>
  )
}

export default NumberRendaring
