const myData =[]

const formData=document.getElementById("formData")
formData.addEventListener('submit',(Event)=>{

 Event.preventDefault() 
 const EmployeeName=document.getElementById("EmployeeName").value
 const EmployeeAge=document.getElementById("EmployeeAge").value
 const Department=document.getElementById("Department").value
 const Salary=document.getElementById("Salary").value

 const obj ={userid:Date.now(),name:EmployeeName,age:EmployeeAge,department:Department,Salary:Salary}
myData.push(obj)
alert("Successfully Registered")
formData.reset()
console.log(myData);



})

const showingData = ()=>{
const Showing =document.getElementById("Showing")
let datas = " "

myData.forEach((e,i)=>{

    datas += `<tr>
    
    <td>${i+1}</td>
    <td>${e.userid}</td>
    <td>${e.name}</td>
    <td>${e.age}</td>
    <td>${e.department}</td>
    <td>${e.Salary}</td>
    
    </tr>`

})

showingData.innerHTML = datas


}
