
// Array Rendaring

// const App = () => {
// const Array = [1,2,3,4,5,6,7,8,9]

//   return (
//    <>
//    {Array.map((e,i)=>(
//   <div key={i}>
//     <p className="bg-blue-300">{e}</p>
    

//   </div>
//    ))}
//    </>)}
// export default App


// Object Rendaring


// const App = () => {

// const obj ={Name:"Catherine",Subject:"React",Course:"Full Stack"}
//   return (
//    <>
  
// <div className="bg-fuchsia-600">
// <h1>{obj.Name}</h1>
// <h1>{obj.Subject}</h1>
// <h1>{obj.Course}</h1>
//    </div>
//    </>
//   )
// }

// export default App


// Array of Object Rendaring 

import Student from'./Component/Student'

const App = () => {

  const arrobj=[
    
{Name:"Catherine",Subject:"HTML",Course:"Frontend Development"},
{Name:"Gracy",Subject:"CSS",Course:"Web Designing"},
{Name:"Priya",Subject:"JavaScript",Course:"Web Development"},
{Name:"Angel Mary",Subject:"React",Course:"Full Stack Development"}
  ]
  return (
    <>

    <Student data={arrobj}/>

    
    </>
  )
}

export default App






