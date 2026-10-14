const firstNumber = document.getElementById("firstNumber")
const secondNumber = document.getElementById("secondNumber")
const result = document.getElementById("result")

 
document.getElementById("Btn1").addEventListener("click", () => calculate("add"))
document.getElementById("Btn2").addEventListener("click", () => calculate("subtract"))
document.getElementById("Btn3").addEventListener("click", () => calculate("multiply"))
document.getElementById("Btn4").addEventListener("click", () => calculate("divide"))
