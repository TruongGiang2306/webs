const navbarToggleBtn = document.querySelector(".navbar-toggle-btn");
const navbarNav = document.querySelector(".navbar-nav");
const navList = document.querySelectorAll(".navbar-nav a");

const navbarToggleFunc = function () {
  navbarToggleBtn.classList.toggle("active");
  navbarNav.classList.toggle("active");
};

navbarToggleBtn.addEventListener("click", navbarToggleFunc);

document.addEventListener("DOMContentLoaded", function () {
  var navList = document.querySelectorAll(".navbar-nav a");
  var navbarNav = document.querySelector(".navbar-nav");
  var navbarToggleBtn = document.querySelector(".navbar-toggle-btn");

  navList.forEach(function (link) {
    link.addEventListener("click", function () {
        navbarNav.classList.remove("active");
        navbarToggleBtn.classList.remove("active");
    });
  });
});