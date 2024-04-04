// active links
let secciones = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  secciones.forEach((seccion) => {
    let top = window.scrollY;
    let offset = seccion.offsetTop - 150;
    let height = seccion.offsetHeight;
    let id = seccion.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // sticky navbar

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle icon and navbar when click navbar link (scroll)
  menuIcon.classList.remove("fa-x");
  navbar.classList.remove("active");
};

// navbar toggle

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-x");
  navbar.classList.toggle("active");
};

// scroll reveal

ScrollReveal({
//   reset: true,
  distance: "60px",
  duration: 2500,
  delay: 400
})

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' })
ScrollReveal().reveal('.home-img, .proyectos-container, .contacto', { origin: 'bottom' })
ScrollReveal().reveal('.home-content h1, .sobremi-img', { origin: 'left' })
ScrollReveal().reveal('.home-content p, .sobremi-content', { origin: 'right' })

// typewriter

const typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "Backend Developer", "IT Support"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

// theme toggle

// const body = document.querySelector("body");
// const toggleButton = document.querySelector("#toggle-button");
// const moonIcon = document.querySelector("#moon-icon");
// const sunIcon = document.querySelector("#sun-icon");

// toggleButton.addEventListener("click", () => {
//   body.classList.toggle("dark-theme");
//   toggleButton.classList.toggle("active");
//   moonIcon.classList.toggle("hidden");
//   sunIcon.classList.toggle("hidden");
// })


