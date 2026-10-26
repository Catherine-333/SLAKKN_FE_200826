
let numbers = [10, 15, 20, 25, 30, 35, 40];

const arrFunction = (arr) =>{
    let evenNumbers = [];

    for(let num=0; num<=numbers.length; num++ ) {
        if (num % 2 === 0) {
            evenNumbers.push(num);
        }
    }

    return evenNumbers;
}

let result = EvenNumbers(arr);

console.log("Original Array:", numbers);
console.log("Even Numbers:", result);
