import { getMe, login } from "./funcs/auth.js";
import { showSwal } from "./funcs/utils.js";

const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const rememberMe = loginForm.rememberMe.checked;
  const userInfo = {
    identifier: loginForm.identifier.value.trim(),
    password: loginForm.password.value.trim(),
  };

  if (!loginForm.identifier.value || !loginForm.password.value) {
    showSwal("لطفا همه فیلد ها را به صورت کامل پر کنید", "error", "باشه");
    return;
  }

  login(userInfo);
});

// getMe().then((user) => {
//   if (user) {
//     location.href = "index.html";
//   }
// });
