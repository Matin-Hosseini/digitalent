import { register } from "./funcs/auth.js";

import { swalError, swalSuccess } from "./funcs/swal.js";
import { showSwal } from "./funcs/utils.js";

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
    showSwal("لطفا دکمه پذیرش شرایط و قوانین را بزنید", "error", "باشه");
    return;
  }

  fetch(`http://localhost:8000/v1/auth/register`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newUser),
  })
    .then((res) => {
      if (res.status === 201) {
        swalSuccess("ثبت نام با موفقیت انجام شد.");
      } else if (res.status === 422) {
        swalError("لطفا فیلد ها را به درستی پر کنید");
      }
      return res.json();
    })
    .then((data) => {});
});
