const btnData = document.getElementById("btnData");
const title = document.getElementById("title");

btnData.addEventListener("click", () => {
  if (title.style.display === "none") {
    title.style.display = "block";
  } else {
    title.style.display = "none";
  }
});
