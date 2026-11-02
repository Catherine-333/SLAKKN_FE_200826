import { useState } from "react";

const Boolean=()=>{
const [isActive,setisActtive]=useState(true)

const handleClick =()=>{
 setisActtive(!isActive) 
}
  return (
    <>
  <h1>{isActive ? "This is React" : "This is not React"}</h1>
    <button onClick={handleClick}>Click</button>
    </>
  );
};

export default Boolean;