const createCounter = () => {
    let count =0;
    return()=>{
        count=count +10;
        console.log(count);
        
    }
}
const result = createCounter();


result()
result()
result()
result()
result()