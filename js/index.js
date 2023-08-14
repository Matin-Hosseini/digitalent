const $ = document;

const darkModeBtn = $.querySelector("#dark-mode-btn");
const hamburgerMenuBtn = $.querySelector("#hamburger-menu-btn");
const navMenu = $.querySelector("#nav-menu");
const closeSidebarBtn = $.querySelector("#close-sidebar-btn");

//dark mode feature starts
darkModeBtn.addEventListener("click", () => {
  const html = document.documentElement;
  if (html.classList.contains("dark")) {
    html.className = "light";
    localStorage.setItem("theme", "light");
    darkModeBtn.innerHTML = `
    <svg class="nav__icon">
      <use xlink:href="#moon"></use>
    </svg>
    `;
  } else {
    html.className = "dark";
    localStorage.setItem("theme", "dark");

    darkModeBtn.innerHTML = `
    <svg class="nav__icon">
      <use xlink:href="#sun"></use>
    </svg>
    `;
  }
});

const setTheme = () => {
  const html = document.documentElement;
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    html.className = "dark";
    darkModeBtn.innerHTML = `
    <svg class="nav__icon">
      <use xlink:href="#sun"></use>
    </svg>
    `;
  } else {
    html.className = "light";
    darkModeBtn.innerHTML = `
    <svg class="nav__icon">
      <use xlink:href="#moon"></use>
    </svg>
    `;
  }
};
//dark mode feature ends

// opening and closing nav menu in mobile starts
hamburgerMenuBtn.addEventListener("click", () => {
  navMenu.classList.add("nav-menu--open");
});
closeSidebarBtn.addEventListener("click", () => {
  navMenu.classList.remove("nav-menu--open");
});
// opening and closing nav menu in mobile ends

window.addEventListener("load", () => {
  setTheme();
});
