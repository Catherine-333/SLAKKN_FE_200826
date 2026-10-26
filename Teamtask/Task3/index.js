const fetechDatas=async()=>{

const data=await fetch("https://dummyjson.com/products")

console.log(data);

const change=await data.json()
console.log(change);
const productdatas=change.products

const showdata=document.getElementById("tabledata")

let variable=""

productdatas.forEach((e) => {


variable+=`<tr>

<td>${e.price}</td>

</tr>`
});

showdata.innerHTML=variable;
};

fetechDatas();