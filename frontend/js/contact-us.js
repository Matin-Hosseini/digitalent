import { isEmailValid } from "./funcs/utils.js";

const d = document;

const setErrorMessage = (message, element) => {
  element.innerHTML = message;
};

const contactUsForm = document.querySelector("#contact-us-form");

contactUsForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const newMessage = {
    name: contactUsForm.name.value.trim(),
    email: contactUsForm.email.value.trim(),
    message: contactUsForm.message.value.trim(),
  };

  if (!newMessage.name) {
    setErrorMessage(
      "لطفا نام خود را وارد کنید.",
      d.querySelector(".name-error")
    );
  }
  if (!newMessage.email) {
    setErrorMessage(
      "لطفا ایمیل خود را وارد کنید.",
      d.querySelector(".email-error")
    );
  }
  if (newMessage.email && !isEmailValid(newMessage.email)) {
    setErrorMessage("ایمیل نامعتبر می باشد.", d.querySelector(".email-error"));
  }
  if (!newMessage.message) {
    setErrorMessage(
      "لطفا پیام خود را وارد کنید.",
      d.querySelector(".textarea-error")
    );
  }

  if (
    newMessage.name &&
    newMessage.email &&
    isEmailValid(newMessage.email) &&
    newMessage.message
  ) {
    await fetch("http://localhost:8000/v1/contacts/send", {
      method: "POST",
      body: JSON.stringify(newMessage),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((message) => console.log(message));
  }
});
