console.log("TASK 1 – GLOBAL AND FUNCTION SCOPE");

console.log("1-Inside Function");

let company = "ABC Technologies";
let employee = "Arun";

console.log(employee);
console.log(company);
function displayName(){


displayName()

}

console.log("2-Outside function");
console.log(employee);
console.log(company);


console.log("TASK 2 – BLOCK SCOPE");


if(true){
let age =25;
console.log(age);

}
if(true){
    const city = "Chennai";
    console.log(city);
    
}

console.log("TASK 3 – HOISTING");

console.log("let-example");

let dress = "top";
console.log(dress);

console.log("var -example");

console.log(color);
var color = "Block";


console.log("const -example");

function declaration (){

}

function greet(){
  
}
  console.log("Welcome to JavaScript");

  console.log("TASK 4 – CLOSURE COUNTER");

  function add(){
    let a = 0;
    function outer(){
        a++
        console.log(a);
        
    }
    return outer ;

  }
  let result = add()

result()
result()
result()


console.log("TASK 5 – CALLBACK CALCULATOR");

function greet(name, callback) {

    console.log(20 + 10);

    callback();
}

function message() {

    console.log(10);
}

greet("catherine", message);



















































