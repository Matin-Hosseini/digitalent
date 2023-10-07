import { getMe, isLogin } from "./auth.js";
import { showSwal } from "./utils.js";
const setTheme = () => {
  const html = document.documentElement;
  const theme = localStorage.getItem("theme");
  const darkModeBtn = document.querySelector("#dark-mode-btn");

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

const changeTheme = () => {
  const html = document.documentElement;
  const darkModeBtn = document.querySelector("#dark-mode-btn");

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

const followMouse = () => {
  const mouseFollower = document.querySelector(".mouse-follower");
  const mouseFollower2 = document.querySelector(".mouse-follower-2");
  window.addEventListener("mousemove", (e) => {
    mouseFollower.style.cssText =
      mouseFollower2.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px`;
  });
};

const submitNewsletterEmail = () => {
  const newsletterForm = document.querySelector(".footer-newsletter__form");
  const emailInput = newsletterForm.email;
  if (!emailInput.value) {
    showSwal("لطفا ایمیل خود را وارد کنید", "error", "باشه");
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
      showSwal("ایمیل نامعتبر می باشد", "error", "تصحیح");
    } else if (res.status === 200) {
      showSwal("ایمیل با موفقیت ثبت شد.", "success", "رواله");
    }
  });
};

const showUserNameInNavbar = () => {
  const loginBtn = document.querySelector(".login-signup-btn");

  if (isLogin()) {
    getMe().then((user) => {
      loginBtn.innerHTML = `
        <span class="d-none d-md-block">${user.name}</span>`;

      loginBtn.setAttribute("href", "login.html");
    });
  } else {
    loginBtn.innerHTML = `
        <i class="bx bx-log-in nav__icon"></i>
        <span class="d-none d-md-block">ورود | ثبت نام</span>`;

    loginBtn.setAttribute("href", "login.html");
  }
};

export { showUserNameInNavbar, setTheme, changeTheme, submitNewsletterEmail, followMouse };
