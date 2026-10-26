
let correctUsername = "welcome";
let correctPassword = "123";

let form = document.getElementById("loginForm");
let username = document.getElementById("username");
let password = document.getElementById("password");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (
        username.value === correctUsername &&
        password.value === correctPassword
    ) {
        alert("Login Successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Username or Password incorrect");
    }
});
