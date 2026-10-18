

let employees = JSON.parse(localStorage.getItem("employees")) || [];

const formData = document.getElementById("formDatas");

function displayEmployees() {
  const showing = document.getElementById("Showing");

  showing.innerHTML = " ";

  employees.forEach((employee) => {
    showing.innerHTML += `
      <tr>
        <td>${employee.userid}</td>
        <td>${employee.name}</td>
        <td>${employee.age}</td>
        <td>${employee.Course}</td>
        <td>${employee.Amount}</td>
        <td>
          <button onclick="deleteEmployee(${employee.userid})">
            Delete
          </button>
        </td>
      </tr>
    `;
  });
}

formData.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("USername").value.trim();
  const userage = Number(document.getElementById("Userage").value);
  const department = document.getElementById("Department").value.trim();
  const salary = Number(document.getElementById("Salary").value);

  if (!username || !document.getElementById("Userage").value || !department || !document.getElementById("Salary").value) {
    alert("Enter all form fields");
    return;
  }

  if (Number.isNaN(userage) || Number.isNaN(salary)) {
    alert("Age and salary must be valid numbers");
    return;
  }

  if (userage < 24) {
    alert("Above age 24 allowed");
    return;
  }

  if (salary < 50000) {
    alert("Enter the Salary 50000 allowed");
    return;
  }

  const obj = {
    userid: Date.now(),
    name: username,
    age: userage,
    Course: department,
    Amount: salary,
  };

employees.push(obj);

localStorage.setItem(
  "employees",
  JSON.stringify(employees)
);
formData.reset();


  console.log(obj);
  document.getElementById("Showing").textContent = JSON.stringify(obj);
});

