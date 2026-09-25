// // TASK 1 - POSITIVE NUMBER

let number = 10;

if (number > 0) {
	console.log("Positive Number");
}

// TASK 2 – VOTING ELIGIBILITY
 let age=20;
 if(age>=18){
    console.log("Eligible to Vote");
 }
 else{
    console.log("Not Eligible to Vote");
 }

// TASK 3 – STUDENT GRADE

let mark=75;
if(mark>=90){
    console.log( "Grade A");
}

else if(mark>75){
    console.log("Grade B");

}
else if(mark>65){
    console.log("Grade C");
    
}
else{
    console.log("Grade D")
}

   
// TASK 4 – PRINT 1 TO 10
for (let number = 1; number <= 10; number++) {
	console.log(number);
}

// TASK 5 – PRINT EVEN NUMBERS

for (let even = 1; even <= 20; even++) {
    if (even % 2 == 0) {
        console.log("Even Number",even);
    }
    
}
