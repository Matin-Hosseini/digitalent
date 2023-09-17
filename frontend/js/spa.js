// import router from "./router.js";

// document.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (!e.target.classList.contains("spa-link")) {
//     return;
//   }

//   urlRoutes(e);
// });

// function urlRoutes(e) {
//   window.history.pushState({}, "", e.target.href);
//   locationHandler();
// }

// const locationHandler = async () => {
//   const pathName = window.location.pathname;

//   const route = router[pathName];

//   const html = await fetch(route.template).then((res) => res.text());
//   document.querySelector("#content").innerHTML = html;
// };

// window.onpopstate = locationHandler;
// console.log("spa");
