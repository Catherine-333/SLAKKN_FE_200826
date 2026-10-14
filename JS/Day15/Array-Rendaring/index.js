const tableshowing = document.getElementById("tablebody")

let arr = ["HTML","CSS","Bootstrap","Trailwind","JavaScript","React"]
const btn = document.getElementById("btn")
btn.addEventListener("click",()=>{
  let datas =" "
  arr.forEach((e,i)=>{

    datas += ` <tr>
    
    <td> ${i+1}</td>
    <td> ${e}</td>
    
    </tr>`

  })
tableshowing.innerHTML = datas

})
