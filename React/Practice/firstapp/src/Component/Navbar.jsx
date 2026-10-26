
import Image from '../assets/Image/images.jpg'

const Navbar =()=>{
return(<>
<div>
  <img src="https://static.vecteezy.com/system/resources/thumbnails/070/015/576/small/it-services-interface-with-hand-selection-free-photo.jpg"/>

<h1>This is React App</h1>
<a href="">Home</a>
<a href="">About</a>
<a href="">Contact</a>
<a href="">Login</a>

<button>Click me</button>
<img src={Image} alt="" />

</div>


</>)
}
export default Navbar