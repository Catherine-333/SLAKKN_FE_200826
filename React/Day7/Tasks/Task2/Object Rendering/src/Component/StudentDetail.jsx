

const StudentDetail = () => {


const student = {
  name: "Arun",
  age: 21,
  department: "Computer Science",
  city: "Chennai"
};

  return (
   <>
   <div>


<h2>{student.name}</h2>

<h2>{student.age}</h2>

<h2>{student.department}</h2>

<h2>{student.city}</h2>

  
   </div>
   
   </>
  )
}

export default StudentDetail
