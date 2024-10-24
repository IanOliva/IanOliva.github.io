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
  delay: 400,
});

ScrollReveal().reveal(".home-content", { origin: "top", delay: 4000 });
ScrollReveal().reveal(".heading", { origin: "top" });
ScrollReveal().reveal(".home-content h1, .sobremi-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .sobremi-content", { origin: "right" });
ScrollReveal().reveal(".proyectos-container, .contacto", { origin: "bottom" });

// typewriter

const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Backend Developer", "IT Support"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// boton flotante
// Lista de secciones que el botón recorrerá
const sections = ['#home', '#sobremi', '#proyectos','#timeline', '#contacto'];
let currentSectionIndex = 0;

// Referencia al botón
const floatingButton = document.querySelector('.floating-btn a');

// Función que realiza el scroll suave
function scrollToNextSection() {
  currentSectionIndex = (currentSectionIndex + 1) % sections.length; // Ciclar entre secciones
  const nextSection = document.querySelector(sections[currentSectionIndex]);
  nextSection.scrollIntoView({ behavior: 'smooth' });
}

// Escuchar el clic en el botón
floatingButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
  scrollToNextSection();
});


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

// crear seccion proyectos consumiendo el json

// Cargar el archivo JSON
fetch("assets/jsons/proyectos.json")
  .then((response) => response.json())
  .then((projects) => {
    const container = document.querySelector(".proyectos-container");

    // Iterar sobre cada proyecto y crear los elementos HTML dinámicamente
    projects.forEach((project) => {
      const card = document.createElement("div");
      card.classList.add("proyectos-card");

      card.innerHTML = `
       <img src="${project.img}" alt="${project.alt}" />
       <div class="proyectos-layer">
         <h4>${project.title}</h4>
         <p>${project.description}</p>
         <p>${project.technologies}</p>
         <a href="${project.link}" target="_blank"><i class="fa-solid fa-up-right-from-square"></i></a>
       </div>
     `;

      container.appendChild(card);
    });
  })
  .catch((error) => console.error("Error al cargar los proyectos:", error));

// Cargar el archivo JSON
fetch("assets/jsons/estudios.json")
  .then((response) => response.json())
  .then((studies) => {
    const timeline = document.querySelector(".timeline");

    // Iterar sobre cada estudio y crear los elementos HTML dinámicamente
    studies.forEach((study, index) => {
      const isLeft = index % 2 === 0 ? "left" : "right"; // Alternar entre izquierda y derecha

      const item = document.createElement("details");
      item.classList.add("timeline-item", isLeft);

      item.innerHTML = `
          <summary>${study.title} <span>${study.date}</span></summary>
           <div class="details-content">
            <p>Institución: ${study.institution}</p>
            <p>${study.description}</p>
          </div>
        `;

      timeline.appendChild(item);
    });
    // Animar los elementos con ScrollReveal
    ScrollReveal().reveal('.timeline-item.left', {
      origin: 'left',
      distance: '100px',
      duration: 1000,
      easing: 'ease-in-out',
      opacity: 0
    });

    ScrollReveal().reveal('.timeline-item.right', {
      origin: 'right',
      distance: '100px',
      duration: 1000,
      easing: 'ease-in-out',
      opacity: 0
    });
  })
  .catch((error) => console.error("Error al cargar los estudios:", error));
