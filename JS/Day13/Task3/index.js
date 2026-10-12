const btnData = document.getElementById("btnData")
const btnData2 = document.getElementById("btnData2")
const title = document.getElementById("title")

btnData.addEventListener("click", () => {
  title.style.display = "none"
})

btnData2.addEventListener("click", () => {
  title.style.display = "block"
})
