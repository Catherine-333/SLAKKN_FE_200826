
const btnData = document.getElementById("btn")
const title = document.getElementById("title")
const datas = document.querySelector("#datas")
const link = document.getElementById("link")

const image = document.getElementById("img")

btnData.addEventListener("click",()=>{
    // image.style.display = "none"

    if(  image.style.display==="block"){
        image.style.display = "none"

    }else{
        image.style.display="block"
    }
        btnData.innerText = "Show"
})
