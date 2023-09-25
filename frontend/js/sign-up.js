import { register } from "./funcs/auth.js";

const signUpForm = document.querySelector(".sign-up-form")

signUpForm.addEventListener("submit", (e)=> {
    e.preventDefault()
    register()
})