
let datas = JSON.parse(localStorage.getItem("users")) || [];

const formData = document.getElementById("formDatas");

formData.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username");
    const useremail = document.getElementById("useremail");
    const userpassword = document.getElementById("userpassword");

    const name = username.value.trim();
    const email = useremail.value.trim();
    const password = userpassword.value;

    if (!name || !email || !password) {
        alert("Enter all the fields");
        return;
    }

    const existingUser = datas.find((item) => item.email === email);

    if (existingUser) {
        alert("Email already registered");
        return;
    }

    const obj = {
        userid: Date.now(),
        name: name,
        email: email,
        password: password
    };

    datas.push(obj);

    localStorage.setItem("users", JSON.stringify(datas));

    alert("Successfully Registered!");

    window.location.href = "index.html";
});
