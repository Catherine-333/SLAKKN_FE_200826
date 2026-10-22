// const fetchDatas = async ()=>{
//     const getData = await fetch("https://dummyjson.com/users ")
// // console.log(getData);

// const change =await getData.json()

// // console.log(change.users);
// const datas = change.users
// const showData_tbody = document.getElementById("showdata")
// let getshow = ""
// datas.forEach((e)=> {
//     getshow += `<tr>
    
    
//     <td>${e.id}</td>
//     <td>${e.name}</td>
//     <td>${e.age}</td>
    
//     </tr>`
// });
// showData_tbody.innerHTML = getshow
// }

// fetchDatas()
















const fetchDatas = async ()=>{
    const getData = await fetch("https://dummyjson.com/products")
// console.log(getData);

const change =await getData.json()

const datas = change.products
const showData_tbody = document.getElementById("showdata")
let getshow = ""
datas.forEach((e)=> {
    getshow += `<tr>
    
    
    <td>${e.id}</td>
    <td>${e.title}</td>
    <td>${e.price}</td>
    
    </tr>`
});
showData_tbody.innerHTML = getshow
}

fetchDatas()