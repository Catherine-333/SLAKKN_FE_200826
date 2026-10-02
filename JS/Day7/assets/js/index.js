
console.log("TASK 1 – FRUIT ARRAY");

let fruits = ["apple", "banana", "mango", "grapes", "orange"];

console.log("First fruit:", fruits[0]);
console.log("Third fruit:", fruits[2]);
console.log("Last fruit:", fruits[fruits.length - 1]);

console.log("TASK 2 – UPDATE COLORS");

let colors = ["Red", "Blue", "Green", "Yellow"];

colors= "Black";
console.log(colors);

console.log("TASK 3 – LOOP STUDENT NAMES");

let students = ["Arun","Kumar","Priya","Ravi","Divya"];
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);
console.log(students[4]);

console.log("TASK 4 – TOTAL MARKS");

let marks = [80, 70, 90, 60, 85];
let totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
console.log("Total marks:", totalMarks);

console.log("TASK 5 – ARRAY MULTIPLICATION");

let numbers = [2, 4, 6, 8, 10];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] * 2);
}

console.log("TASK 6 – STUDENT OBJECT");

let studentDetails = {
    name: "Catherine",
    age: 24,
    course: "Full Stack Development",
    city: "Chennai"
};

for (let key in studentDetails) {
    console.log(key, studentDetails[key]);
}

console.log("TASK 7 – UPDATE EMPLOYEE");

let employee = {
    name: "Arun",
    salary: 25000,
    role: "Developer"
};

employee= 30000;
console.log(employee);

console.log("TASK 8 – ADD NEW PROPERTY");

let product = {
    name: "Lenovo",
    price: 50000,
    brand: "Dell"
};

for (let key in product) {
    console.log(key, product[key]);
}

console.log("TASK 9 – LOOP OBJECT");

let car = {
    brand: "Toyota",
    model: "Fortuner",
    year: 2025,
};
for(let key in car){
    console.log(key,car[key]);
    
}

console.log("TASK 10 – ARRAY OF OBJECTS");

let studentNameScore = [
    { name: "Arun", marks: 80 },
    { name: "Priya", marks: 85 },
    { name: "Kumar", marks: 90 }
];

for (let i = 0; i < studentNameScore.length; i++) {
    console.log(studentNameScore[i].name, studentNameScore[i].marks);
}









