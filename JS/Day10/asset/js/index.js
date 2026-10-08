
console.log("Normal Function");

function add(a, b) {
    return a + b;
}
console.log(10+20);

console.log("Arrow Function");

const variables= (c, d) => {
    return c+ d;
};

console.log(20+20);

console.log("Destructuring");

console.log("Array - examples");
let colors =["red","orange","block","white"];

let [first,second,third,fourth] =colors;

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);

console.log("Object -examples");
let student = {
    name: "catherine",
    age: 24,
    course: "Full Stack Development"
};

let { name, age, course } = student;
console.log(name);
console.log(age);
console.log(course);

console.log("Spread Operator");
let number1 = [10, 20, 30, 40];
let number2 = [50, 60, 70];
let number = [...number1, ...number2];

console.log(number);

function add(...numbers) {
    console.log(numbers);
}

add(10, 20, 30, 40);

console.log("Classes");

class study {
    constructor (name,age) {
        this.name = name;
        this.age = age
    }
}
    let study1 = new study ("Catherine",23);
    console.log(study1.name);
    console.log(study1.age);  

console.log("Task 1 - LET ");

let salary = 20000;
salary = 25000;
console.log(salary);

console.log("Task 2 - CONST");

const country = "My Country is India";
console.log(country);

console.log("TASK 3 – TEMPLATE LITERAL");

let Name= "Arun";
let Age = "25";
console.log(`My Name is ${Name} and I am ${Age} years old`);

console.log("TASK 4 – TEMPLATE LITERAL CALCULATION");

let price = 500;

let quantity = 4;

console.log(`${price * quantity}`);

console.log("TASK 5 – DEFAULT PARAMETER");

function greet (name =" Guest "){
    console.log(" Welcome " + name);
    
}
greet (" Catherine")
greet()


console.log("TASK 6 – ARRAY DESTRUCTURING");

const Colors = ["Red", "Green", "Blue"];

console.log(Colors[0]);
console.log(Colors[1]);
console.log(Colors[2]);

console.log("TASK 7 – OBJECT DESTRUCTURING");

const Student = {

name: "Arun",

age: 20,

city: "Chennai"

};

console.log(Student.name);
console.log(Student.age);
console.log(Student.city);

console.log("TASK 8 – SPREAD");

const Numbers1 = [10, 20, 30];
const Numbers2 = [40,50];

const AllNumbers = [...Numbers1,...Numbers2];
console.log(AllNumbers);

console.log("TASK 9 – REST");

 function showNumbers(...numbers){
console.log(numbers);

  }

showNumbers(10,20,30,40)

console.log("TASK 10 – ARROW FUNCTION");

const adds = (a,b) => {
    return a+b;
};
console.log(adds(10,20));


 


































































