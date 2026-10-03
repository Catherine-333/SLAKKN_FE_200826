console.log("TASK 1 – EVEN OR ODD");

function checkEvenOdd(number) {
  if (number % 2 === 0) {
    return "Even Number";
  }
  return "Odd Number";
}

console.log(checkEvenOdd(10));

console.log("TASK 2 – LARGEST OF TWO NUMBERS");

function largestNumber(a,b){
    if (a>b){
        return(a);
    }
    return(b);
}
console.log(largestNumber(50,100));

console.log("TASK 3 – VOTING ELIGIBILITY");

function checkVote(age) {
  if (age >= 18) {
    return "Eligible to Vote";
  }
  return "Not Eligible to Vote";
}

console.log(checkVote(20));

console.log("TASK 4 – SUM OF ARRAY");

function getTotal(numbers){
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}
console.log(getTotal([10,20,30,40,50]));

console.log("TASK 5 – COUNT EVEN NUMBERS");


function countEven(numbers) {
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}
console.log(countEven([10, 15, 20, 25, 30, 35, 40]));
