// const evenNumberfinder=(even)=>{

//     if(even%2===0){
//         return"even"
//     }
//         else {
//             return"its not"
        
//     }
// }
// console.log(evenNumberfinder(98));


// const addThevalue = (firstNumber,secondNumber)=>{
//     return firstNumber + secondNumber

// }
// console.log(addThevalue(20,30));


// // const addEvenNumber = (startNumber, endNumber) => {
// //     for (let number = startNumber; number <= endNumber; number++) {
// //         if (number % 2 === 0) {
// //             console.log(number);
// //         }
// //     }
// // }

// // addEvenNumber(1, 100);

// const getEvenNumber =(arreven) =>{

//     let evenNumbers =[]
//     let i = 0;

//     for(let even=0; even<arreven.length;even++){

//         if(arreven[even]%2===0){
//             evenNumbers[evenNumbers.length-1]=arreven[even]


//         }
//     }

// }
// let numbers=[1,2,3,4,5,6,7,8,9,0]


const arr =[1,2,3,4,5,6,7,8,9]
let myarr = []
let i =0;
for(let ai =0;ai <arr.length;ai++){
    console.log(arr[ai]);
    if(arr[ai]%2===0){
        myarr[i]=arr[ai]
        ai++
    }
    
}
console.log((myarr));














