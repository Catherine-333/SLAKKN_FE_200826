const btnData = document.getElementById("btnData")
const title = document.getElementById("title")


btnData.addEventListener("click",()=>{
      title.innerHTML = "This is Updated"
      title.style.color ="red"
      title.style.fontSize ="30px"
})