import { swalError, swalSuccess } from "./funcs/swal.js";
import { followMouse } from "./funcs/utils.js";

const darkModeBtn = document.querySelector("#dark-mode-btn");
const hamburgerMenuBtn = document.querySelector("#hamburger-menu-btn");
const navMenu = document.querySelector("#nav-menu");
const closeSidebarBtn = document.querySelector("#close-sidebar-btn");

const newsletterForm = document.querySelector(".footer-newsletter__form");

//dark mode feature starts
const changeTheme = () => {
  const html = document.documentElement;
  if (html.classList.contains("dark")) {
    html.className = "light";
    localStorage.setItem("theme", "light");
    darkModeBtn.innerHTML = `
      <i class="bx bx-moon nav__icon"></i>
    `;
  } else {
    html.className = "dark";
    localStorage.setItem("theme", "dark");
    darkModeBtn.innerHTML = `
      <i class='bx bx-sun nav__icon'></i>
    `;
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

/* mouse follower effect*/
followMouse();

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

//submitting newsletter form starts
newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailInput = newsletterForm.email;
  if (!emailInput.value) {
    swalError("لطفا ایمیل خود را وارد کنید", "باشه");
    return;
  }

  fetch("http://localhost:8000/v1/newsletter", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email: emailInput.value.trim() }),
  }).then((res) => {
    if (res.status === 422) {
      swalError("ایمیل نامعتبر می باشد");
    } else if (res.status === 200) {
      swalSuccess("ایمیل با موفقیت ثبت شد.");
    }
  });

  //http://localhost:8000/v1/newsletter
});
//submitting newsletter form ends
window.addEventListener("load", () => {
  setTheme();
});
