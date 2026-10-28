
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='bg-orange-400 font-bold p-2 flex justify-start gap-10 item-center'>
       <div className='mx-15 bg-amber-200 rounded-2xl p-2'>Logo</div>
      <div>React Rendaring</div>
      <div>Contact</div>
     
   
    <div>
        <Link to={'/'}>Home</Link>
    </div>
     </div>
    </>
  )
}

export default Navbar
