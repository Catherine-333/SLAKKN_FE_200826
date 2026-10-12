const btnData = document.getElementById("btnData")
const btnData2 = document.getElementById("btnData2")
const title = document.getElementById("title")

btnData.addEventListener("click", () => {
  title.style.backgroundColor = "blue"
  title.style.color = "white"
}),

btnData2.addEventListener("click", () => {
  title.style.backgroundColor = "yellow"
  title.style.color = "black"
})