
let datas = JSON.parse(localStorage.getItem("users")) || [];

const formData = document.getElementById("formDatas");

if (formData) {
    formData.addEventListener("submit", (event) => {
        event.preventDefault();

        const useremail = document.getElementById("useremail");
        const userpassword = document.getElementById("userpassword");

        const email = useremail.value.trim();
        const password = userpassword.value;

        const user = datas.find((item) =>
            item.email === email && item.password === password
        );

        if (user) {
            localStorage.setItem("currentUser", JSON.stringify({
                userid: user.userid,
                name: user.name,
                email: user.email
            }));
            alert("Login Successfully!");
            window.location.href = "Dashboard.html";
        } else {
            alert("Invalid Email or Password. Please Register First.");
        }
    });
}
