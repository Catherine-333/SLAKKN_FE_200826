const btnData = document.getElementById("btnData");
const title = document.getElementById("title");

btnData.addEventListener("click", () => {
  if (title.style.display === "block") {
    title.style.display = "none";
  
  } else { 
    title.style.display = "block";

  }
});

