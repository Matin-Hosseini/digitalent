import { getMe, isLogin } from "./funcs/auth.js";
import {
  showUserNameInNavbar,
  setTheme,
  changeTheme,
  submitNewsletterEmail,
  followMouse
} from "./funcs/shared.js";

const darkModeBtn = document.querySelector("#dark-mode-btn");
const hamburgerMenuBtn = document.querySelector("#hamburger-menu-btn");
const navMenu = document.querySelector("#nav-menu");
const closeSidebarBtn = document.querySelector("#close-sidebar-btn");
const newsletterForm = document.querySelector(".footer-newsletter__form");

darkModeBtn.addEventListener("click", changeTheme);

// opening and closing nav menu in mobile starts
const openNavMenu = () => navMenu.classList.add("nav-menu--open");
const closeNavMenu = () => navMenu.classList.remove("nav-menu--open");

hamburgerMenuBtn.addEventListener("click", openNavMenu);
closeSidebarBtn.addEventListener("click", closeNavMenu);
// opening and closing nav menu in mobile ends

newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  submitNewsletterEmail();
});

window.addEventListener("load", () => {
  setTheme();
  followMouse();
  showUserNameInNavbar();
});

document.addEventListener("click", (e) => {
  if (
    !e.target.closest(".nav-menu") &&
    e.target.id !== "hamburger-menu-btn" &&
    e.target.className !== "hamburger-menu__line"
  ) {
    closeNavMenu();
  }
});
