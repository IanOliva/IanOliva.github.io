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


document.getElementById('theme-toggle').addEventListener('click', (e) => {
  const checked = e.target.checked;
  document.body.setAttribute('theme', checked ? 'dark' : 'light');
});

// (function() {
//   const toggler = document.querySelector('.switch input[type="checkbox"]');
//   const root = document.documentElement;
//   const currentTheme = localStorage.getItem('theme') || "dark";

//   toggler.checked = currentTheme === "dark";
//   root.setAttribute('data-theme', currentTheme);

//   toggler.addEventListener('change', toggleTheme, false);

//   function toggleTheme(e) {
//     const newTheme = this.checked ? 'dark' : 'light';
//     root.setAttribute('data-theme', newTheme);
//     localStorage.setItem('theme', newTheme);
//   }
// })();
