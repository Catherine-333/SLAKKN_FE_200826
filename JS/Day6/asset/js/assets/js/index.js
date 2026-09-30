console.log("Task 1 - Print multiples of 5 in one line")

let line = " ";
let n = 50;

for (let i = 5; i <= n; i += 5) {
    line += i + " ";
}
console.log(line);


//        or

// for(let n=0;n<=10;n++){
//     console.log(n * 5);
    
// }

// console.log(line.slice());

console.log("Task 2 - Print Numbers by 2")

let number = " ";
let m = 20;

for (let i = 2; i <= m; i += 2) {
    number += i + " ";
}

console.log(number);


console.log("TASK 3 – Find Sum from 1 to 20")
 let q = 20;

let order = " ";
let o = 20;                 

for (let i = 1; i <= o; i++) {
    if(i<o){
        order += i +" + ";
}
    else {
        order += i;
    }
}
    
console.log(order);


console.log("TASK 4 – Print Squares")
 for(let s = 0;s<= 10;s++){
    console.log(s * s);
    
 }

 console.log("TASK 5 – Countdown");


for (let j = 10;j>= 0;j--){
   console.log(j * 5);
}
