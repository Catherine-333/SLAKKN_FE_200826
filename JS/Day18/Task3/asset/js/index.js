
function checkResult(mark) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (mark >= 35) {
                resolve("Student Passed");
            } else {
                reject("Student Failed");
            }
        }, 2000);
    });
}

checkResult(75)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

checkResult(20)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
