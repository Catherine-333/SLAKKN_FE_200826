console.log("Scope Types");
console.log(" 1 - GlobalScope");

console.log("1. Outside function");
let name ="Catherine";
function displayname(){    
}
displayname();
console.log(name);


console.log("2. Inside function");

let course ="Java Script"
function displayName(){
    console.log(course);
    
}
displayName();



console.log("2 - Function Scope");

console.log("let - example");

function test (){
    let course ="Bootstrap"
    console.log(course);
    
}
test();


console.log("var -example");
function exam (){
    var Department ="Full Stack Development"
    console.log(Department);
    
}
exam();

console.log("const - example");
function mark (){
const student ="Priya";
console.log(student);
}
mark();

console.log("var,let,const - Function scope");

function studentDetails (){
    let name = "Catherine"
    var Age = 24
    const course ="Full Stack Develpment"

    console.log(name);
    console.log(Age);
    console.log(course);
}
studentDetails()

console.log("3 - Block Scope");

console.log("let-example");

if (true) {
    let name = "Java script";

    console.log(name);
}

if (true){
    const color ="block";
    console.log(color);
}

console.log("4 - Lexical Scope");

let Details = "catherine";
function outer(){
    let age =24 ;
    function inner (){
        console.log(Details);
        console.log(age);
        }
        inner();
}
outer()

console.log("VARIABLE SHADOWING");

let Name = "Node";

const data = () => {
    let nameStudent = "React";
    console.log(Name);        
    console.log(nameStudent); 
};

data();

console.log("Hoisting ");

console.log("var - Hoisting");

var detail;

console.log(detail);

detail = "Catherine";

console.log("let - Hoisting");
let color;
console.log(color);
color = "White"


console.log("const - Hoisting");

const laptop = 92;
console.log(laptop);


console.log("Function - Hoisting");

greet();

function greet() {
    console.log("Java script");
    console.log("node");
    
}
greet();


console.log("CLOSURE");

console.log("Simple example");

function  outer(){
    let dress ="top";

    function inner (){
        console.log(dress);
        
    }
    inner()
}
outer()


console.log("Examples - 2");

function outer() {
    let count = 100;

    return function inner() {
        count++;
        console.log(count);
    };
}

let result = outer();

result();
result();
result();


console.log("CallBack Functions");

const add=()=>{
    console.log(333);
    
}
const datanumber =(cfn)=>{
    cfn()
}
datanumber(add);


console.log("5 - Global and Function Scope");

let company = "ABC Technologies";

function showEmployee() {
    let employee = "Arun";
    console.log(company);
    console.log(employee);
}

showEmployee();

try {
    console.log(employee);
} catch (error) {
    console.log("employee is not accessible outside showEmployee:", error.message);
}














