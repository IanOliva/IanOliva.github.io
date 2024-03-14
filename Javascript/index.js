// barra de navegacion desplegable

const navtoggle = document.querySelector(".navtoggle");
const navmenu = document.querySelector(".nav-menu");

navtoggle.addEventListener("click", () => {
  navmenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});

// tema claro/oscuro

function toggleTheme() {
  const body = document.querySelector('body');
  body.classList.toggle('dark-theme');
}
if (localStorage.getItem('theme') === 'dark') {
  toggleTheme();
}

const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', function () {
    toggleTheme();
    // Guardar la elección del usuario en el almacenamiento local
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// animaciones de scroll (seccion sobre mi)

window.addEventListener("scroll", () => {
  const element = document.querySelector(".scroll-anim-sm");

  const elementPosition = element.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (elementPosition < screenHeight) {
    element.style.animation = "fadeIn 3s";
  }
});

// animaciones de scroll (seccion proyectos)

window.addEventListener("scroll", () => {
  const element = document.querySelector(".scroll-anim-pr");

  const elementPosition = element.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (elementPosition < screenHeight) {
    element.style.animation = "fadeInUp 2s";
  }
});

// animaciones de scroll (seccion exp y edu)

window.addEventListener("scroll", () => {
  const element = document.querySelector(".scroll-anim-exp");

  const elementPosition = element.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (elementPosition < screenHeight) {
    element.style.animation = "fadeInLeft 2s";
  }
});

window.addEventListener("scroll", () => {
  const element = document.querySelector(".scroll-anim-cur");

  const elementPosition = element.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (elementPosition < screenHeight) {
    element.style.animation = "fadeInRight 2s";
  }
});

// animaciones de scroll (seccion cursos)

window.addEventListener("scroll", () => {
  const element = document.querySelector(".scroll-anim-cur-l");

  const elementPosition = element.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (elementPosition < screenHeight) {
    element.style.animation = "fadeInLeft 2s";
  }
});


window.addEventListener("scroll", () => {
  const element = document.querySelector(".scroll-anim-cur-m");

  const elementPosition = element.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (elementPosition < screenHeight) {
    element.style.animation = "fadeInUp 2s";
  }
});

window.addEventListener("scroll", () => {
  const element = document.querySelector(".scroll-anim-cur-r");

  const elementPosition = element.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (elementPosition < screenHeight) {
    element.style.animation = "fadeInRight 2s";
  }
});


function enviarCorreo() {
  var asunto = document.getElementById("asunto").value;
  var mensaje = document.getElementById("mensaje").value;
  var correoLink = document.getElementById("correoLink");
  correoLink.href = "mailto:ianoliva2000@gmail.com?subject=" + encodeURIComponent(asunto) + "&body=" + encodeURIComponent(mensaje);
}
