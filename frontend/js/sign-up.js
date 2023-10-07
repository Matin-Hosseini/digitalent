import { showSwal } from "./funcs/utils.js";
import { register } from "./funcs/auth.js";

const signUpForm = document.querySelector(".sign-up-form");

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newUser = {
    name: signUpForm.name.value.trim(),
    userName: signUpForm.userName.value.trim(),
    email: signUpForm.email.value.trim(),
    phone: signUpForm.phoneNumber.value.trim(),
    password: signUpForm.password.value.trim(),
    confirmPassword: signUpForm.confirmPassword.value.trim(),
  };

  if (!signUpForm.checkbox.checked) {
    showSwal(
      "لطفا دکمه پذیرش شرایط و قوانین را بزنید",
      "error",
      "باشه",
      () => {}
    );
    return;
  }

  register(newUser);
});
