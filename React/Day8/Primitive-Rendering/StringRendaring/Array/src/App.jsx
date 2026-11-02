import Student from "./Component/Student"

const App =()=>{

const Student1={
  Name:"Catherine",
  Age:23,
  Course:"Full Stack Developer"
}

const Student2={
  Name:"Angel Mary",
  Age:20,
  Course:"Goverment Officer"
}

const Student3={
  Name:"Gracy Mary",
  Age:26,
  Course:"Nursing"
}


return(
  <>
  
  <Student data1={Student1} data2={Student2} data3={Student3} />
  
 
  </>
)
}
export default App