const navtoggle = document.querySelector(".navtoggle")
const navmenu = document.querySelector(".nav-menu")

navtoggle.addEventListener("click", () => {
  navmenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});
