const tableshowing = document.getElementById("tablebody");
const showingobj = document.getElementById("showingobj");
const btn = document.getElementById("btn");
const objbtn = document.getElementById("objbtn");

let arr = ["HTML", "CSS", "Bootstrap", "Tailwind", "JavaScript", "React"];

let obj = { name: "Catherine", Age: 23 };

btn.addEventListener("click", () => {
  let datas = "";

  arr.forEach((e, i) => {
    datas += `
      <tr>
        <td>${i + 1}</td>
        <td>${e}</td>
      </tr>
    `;
  });

  tableshowing.innerHTML = datas;
});

objbtn.addEventListener("click", () => {
  showingobj.innerHTML = `
    <div>
      <h2>${obj.name}</h2>
      <p>${obj.Age}</p>
    </div>
  `;
});