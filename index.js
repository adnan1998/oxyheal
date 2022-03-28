// TOGGLE MOBILE NAVBAR

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

// FIXED NAVBAR

// window.addEventListener("scroll", function(){
//     const header = document.querySelector("header");
//     header.classList.toggle("sticky", window.scrollY > 0);
// })
