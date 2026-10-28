
import { Link } from 'react-router-dom'
const BooleanRendaring = () => {

    let isActive=false
     

  return (
    <>
    <div>
      {isActive?"This is react":"This is not react"}
      <Link to ={"/"} className='mx-15 bg-green-400 rounded-4xl'>Back</Link>
    </div>
    </>
  )
}

export default BooleanRendaring
