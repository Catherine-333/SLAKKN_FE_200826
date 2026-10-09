// console.log(document.h1);

// Impartant Selectors:
console.log(" getElementById - type 1");

// getElementById ("idname") 

 const title = document.getElementById("title")
 console.log(title);
 

 console.log (" getElementByTagName - type 2" );
 
// getElementByTagName 

const datas = document.getElementsByTagName("p")
console.log(datas);  



 console.log(" getElementByClassName - type 3");
 
//  getElementByClassName ("className")

 let  datasclass = document.getElementsByClassName("titledata")
 console.log(datasclass);


 
console.log("querySelector - Type 4");

const query = document.querySelector("#title");
console.log(query);

const info = document.querySelector(".info");
console.log(info);



console.log("querySelectorALL type - 5");

const items = document.querySelectorAll(".item");
console.log(items);

items.forEach((item) => {
    console.log(item.textContent);
});













