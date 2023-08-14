const $ = document;

const darkModeBtn = $.querySelector("#dark-mode-btn");
const hamburgerMenuBtn = $.querySelector("#hamburger-menu-btn");
const navMenu = $.querySelector("#nav-menu");
const closeSidebarBtn = $.querySelector("#close-sidebar-btn");
const newestCoursesContainer = $.querySelector("#newest-courses__container");

//dark mode feature starts
darkModeBtn.addEventListener("click", () => {
  const html = document.documentElement;
  if (html.classList.contains("dark")) {
    html.className = "light";
    localStorage.setItem("theme", "light");
    darkModeBtn.innerHTML = `
    <svg class="nav__icon">
      <use xlink:href="#moon"></use>
    </svg>
    `;
  } else {
    html.className = "dark";
    localStorage.setItem("theme", "dark");

    darkModeBtn.innerHTML = `
    <svg class="nav__icon">
      <use xlink:href="#sun"></use>
    </svg>
    `;
  }
});

const setTheme = () => {
  const html = document.documentElement;
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    html.className = "dark";
    darkModeBtn.innerHTML = `
    <svg class="nav__icon">
      <use xlink:href="#sun"></use>
    </svg>
    `;
  } else {
    html.className = "light";
    darkModeBtn.innerHTML = `
    <svg class="nav__icon">
      <use xlink:href="#moon"></use>
    </svg>
    `;
  }
};
//dark mode feature ends

// opening and closing nav menu in mobile starts
hamburgerMenuBtn.addEventListener("click", () => {
  navMenu.classList.add("nav-menu--open");
});
closeSidebarBtn.addEventListener("click", () => {
  navMenu.classList.remove("nav-menu--open");
});
// opening and closing nav menu in mobile ends
const newestCourses = [
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
];

newestCoursesContainer.innerHTML = ``;
newestCourses.forEach((course) => {
  newestCoursesContainer.insertAdjacentHTML(
    "beforeend",
    `
    <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
      <div class="course">
        <a href="#" class="course__image">
          <img
            src="assets/images/f4aa8891-d9a5-48f6-9166-8f40fa5e5f0f_cover.webp"
            alt="" />
        </a>
        <div class="course__info">
          <h2 class="course__name">
            <a href="#"> آموزش html و css برای مبتدی ها که در واقع منجر به این هست خط سوم</a>
          </h2>
          <div
            class="course__price">
            <button class="course__shopping-cart-icon">
              <svg>
                <use xlink:href="#shopping-cart"></use>
              </svg>
            </button>
          
            <div class="d-flex align-items-center">
              <span class="course__old-price">220,000 تومان</span>
              <span class="course__current-price">175,000 تومان</span>
            </div>
          </div>
          <div
            class="d-flex justify-content-between align-items-center my-3">
            <div class="course__teacher d-flex align-items-center">
              <i class="fa-solid fa-chalkboard-user"></i>
              <h3 class="course__teacher-name">متین حسینی</h3>
            </div>
            
            <div class="course__students">
              <i class="fa-solid fa-people-group"></i>
              <span>11,578</span>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <svg>
                <use xlink:href="#clock"></use>
                <span class="course__time">20:50:34</span>
              </svg>
            </div>
            <div class="course__ratings">
              <i class="fa-regular fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
  );
});

window.addEventListener("load", () => {
  setTheme();
});
