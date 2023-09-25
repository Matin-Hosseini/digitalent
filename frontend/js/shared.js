const darkModeBtn = document.querySelector("#dark-mode-btn");
const hamburgerMenuBtn = document.querySelector("#hamburger-menu-btn");
const navMenu = document.querySelector("#nav-menu");
const closeSidebarBtn = document.querySelector("#close-sidebar-btn");

//dark mode feature starts
const changeTheme = () => {
  const html = document.documentElement;
  if (html.classList.contains("dark")) {
    html.className = "light";
    localStorage.setItem("theme", "light");
    darkModeBtn.innerHTML = `
      <i class="bx bx-moon nav__icon"></i>
    `;
    // darkModeBtn.classList.replace("bx-sun", "bx-moon");
  } else {
    html.className = "dark";
    localStorage.setItem("theme", "dark");
    darkModeBtn.innerHTML = `
      <i class='bx bx-sun nav__icon'></i>
    `;
    // darkModeBtn.classList.replace("bx-moon", "bx-sun");
  }
};
const setTheme = () => {
  const html = document.documentElement;
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    html.className = "dark";
    darkModeBtn.innerHTML = `
      <i class='bx bx-sun nav__icon'></i>
    `;
  } else {
    html.className = "light";
    darkModeBtn.innerHTML = `
      <i class="bx bx-moon nav__icon"></i>
    `;
  }
};

darkModeBtn.addEventListener("click", changeTheme);
//dark mode feature starts

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
