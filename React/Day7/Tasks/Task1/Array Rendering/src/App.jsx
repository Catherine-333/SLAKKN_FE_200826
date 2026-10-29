const App = () => {

const languages = ["HTML", "CSS", "JavaScript", "React", "Python"];
  return (
   <>
   <div>
    {languages.map((e,i)=>(
      <li key={i}>{e}</li>
    ))}
    
   </div>
   
   
   
   </>
  )
}

export default App
