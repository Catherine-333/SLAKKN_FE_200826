 // TASK 1 – SIMPLE CALCULATOR

let k=20;
let l=10;
let m=k*l;
console.log(m);

let n=20;
let o=10;
let p=n/o;
console.log(p);

let q=20;
let r=10;
let s=q%r;
console.log(s);


// TASK 2 – EVEN OR ODD

for (let even=1;even<=20;even++){
    if(even%2==0){
 console.log( "even number",even);
}
else{

console.log("odd number",even);
}
    }

for (let odd=1;odd<=20;odd++){
    if(odd%2==1){
 console.log( "odd number",odd);
}
else{
    console.log("even number",odd);
}
    }


 //     TASK 3 – POSITIVE, NEGATIVE OR ZERO

let num = 10;

if (num > 0) {
    console.log("Positive");
} 
else if (num < 0) {
    console.log("Negative");
} 

else {
    console.log("Zero");
}

// TASK 4 – VOTING ELIGIBILITY

 let age=20;
 if(age>=18){
    console.log("Eligible to Vote")
 }

 else{
    console.log( "Not Eligible to Vote")
 }

//  TASK 5 – LARGEST OF TWO NUMBERS

let a =40;
let b =25;
if (a>b){
    console.log(a +" is largest number")
}
else{
    console.log(b + "is largest number")
}

// TASK 6 – STUDENT GRADE

let mark = 78
if (mark >= 90){
    console.log(" Grade A")
}
else if (mark >=75){
    console.log("Grade B")
}
else if(mark >=50){
    console.log("Grade C")
}
else {
    console.log("Fail")
}


// TASK 7 – PRINT 1 TO 20


for(let count=1;count<=20;count++){
    console.log(count)
}

//TASK 8 – PRINT EVEN NUMBERS

for(let even=1;even<=50;even++){
    if(even%2===0){
        console.log("even number",even)
    }
}

// TASK 9 – MULTIPLICATION TABLE

let number = 5;
for (let count = 1; count <= 10; count++) {
	console.log(number+"x"+ count+"=" +number * count);
}

// TASK 10 – SUM OF 1 TO 10

let sum =0;
for(let count=1; count<=10;count++){
    sum=sum+count;
    
}
   
console.log(sum);

