console.log("TASK 1 – DOUBLE ALL NUMBERS");

let numbers = [10, 20, 30, 40, 50];

let results = numbers.map(function(numbers){
    
return numbers * 2;
})
console.log(results);

console.log("TASK 2 – GET EVEN NUMBERS");

let Numbers = [10, 15, 20, 25, 30, 35, 40];

let Results = Numbers.filter(function(Numbers){

return Numbers %2 ===0
});
console.log(Results);

console.log("TASK 3 – FIND FIRST NUMBER");

let Values = [10, 25, 35, 50, 60];
let Total = Values.find(function(Values){
    return Values > 30

});
console.log(Total);

console.log("TASK 4 – FIND STUDENT");


let students = [

{ id: 1, name: "Arun", mark: 75 },

{ id: 2, name: "Priya", mark: 90 },

{ id: 3, name: "Kumar", mark: 65 }

];

let Stdent = students.find(function(students){
    return students.id===2
});
console.log(Stdent);

console.log("TASK 5 – FILTER EMPLOYEES");

let employees = [
    { name: "Arun", salary: 25000 },
    { name: "Priya", salary: 45000 },
    { name: "Kumar", salary: 30000 },
    { name: "Ravi", salary: 50000 }
];

let result = employees.filter(function(employee) {
    return employee.salary >= 30000;
});

console.log(result);


console.log("TASK 6 – GET ONLY NAMES");

let STUDENTS = ["Arun", "Priya", "Kumar", "Ravi"];

let RESULT = STUDENTS.map(function(STUDENT){

return STUDENTS.map
});
console.log(STUDENTS);

console.log("TASK 7 – CALCULATE TOTAL");

let prices = [100, 200, 300, 400];
let Totals = prices.reduce(function(sum,prices){
    return sum + prices
}, 0);
console.log(Totals);

console.log("TASK 8 – CHECK PASS STATUS");

console.log("SOME");

let marks = [75, 80, 35, 90, 65];

let resolt = marks.some(function(mark){
    return mark < 40
});
console.log(resolt);

console.log("EVERY");

let Marks = [75, 80, 35, 90, 65];

let resolts = Marks.some(function(mark){
    return mark >= 35
});
console.log(resolts);

console.log("TASK 9 – FOR...OF");

let skills = [

"HTML",

"CSS",

"JavaScript",

"React"

];
for (let Skill of skills){
    console.log(Skill);
    
}

console.log("TASK 10 – FOR...IN OBJECT");

let Study = {

name: "Arun",

age: 21,

course: "JavaScript",

city: "Chennai"

};

for(let key in Study){
    console.log(key);
    
}

























































