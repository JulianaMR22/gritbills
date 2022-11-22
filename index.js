let link_in = document.getElementById("link_in");
let link_up = document.getElementById("link_up");
let link_forgot = document.getElementById("link_forgot");
let signup_box = document.getElementById("signup_box");
let signin_box = document.getElementById("signin_box");
let forgot_box = document.getElementById("forgot_box");
let title_form = document.getElementById("title_form");
link_in.addEventListener("click", function () {
  link_in.classList.add("active");
  link_up.classList.remove("active");
  link_forgot.classList.remove("active");
  signup_box.classList.add("invisible");
  signin_box.classList.remove("invisible");
  forgot_box.classList.add("invisible");
  title_form.innerHTML = "Welcome Back!";
});
link_up.addEventListener("click", function () {
  link_up.classList.add("active");
  link_in.classList.remove("active");
  link_forgot.classList.remove("active");
  signup_box.classList.remove("invisible");
  signin_box.classList.add("invisible");
  forgot_box.classList.add("invisible");
  title_form.innerHTML = "Register";
});
link_forgot.addEventListener("click", function () {
  link_forgot.classList.add("active");
  link_in.classList.remove("active");
  link_up.classList.remove("active");
  forgot_box.classList.remove("invisible");
  signup_box.classList.add("invisible");
  signin_box.classList.add("invisible");
  title_form.innerHTML = "Recover Account";
});
