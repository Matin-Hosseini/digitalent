export const register = () => {
  const nameInput = document.querySelector("#name");
  const userNameInput = document.querySelector("#userName");
  const emailInput = document.querySelector("#email");
  const phoneInput = document.querySelector("#phoneNumber");
  const passwordInput = document.querySelector("#password");
  const confirmPasswordInput = document.querySelector("#confirmPassword");

  const newUser = {
    name: nameInput.value.trim(),
    userName: userNameInput.value.trim(),
    email: emailInput.value.trim(),
    phone: phoneInput.value.trim(),
    password: passwordInput.value.trim(),
  };

  fetch(`http://localhost:8000/v1/auth/register`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newUser),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};
