import { homeCategories } from "./datas.js";

const $ = document;

const darkModeBtn = $.querySelector("#dark-mode-btn");
const hamburgerMenuBtn = $.querySelector("#hamburger-menu-btn");
const navMenu = $.querySelector("#nav-menu");
const closeSidebarBtn = $.querySelector("#close-sidebar-btn");
const newestCoursesContainer = $.querySelector("#newest-courses__container");
const articleBoxContainer = $.querySelector("#article-box__container");
const homeCategorySwiper = $.querySelector("#home__category-swiper-wrapper");

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

//courses
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
              <span>4</span>
              <i class="fa-solid fa-star"></i>
            </div>
            <div>
              <span>55</span>
              <span>14</span>
              <span>17</span>
              <span>3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
  );
});

//articles
const articles = [
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
];

articleBoxContainer.innerHTML = "";
articles.forEach((article) => {
  articleBoxContainer.insertAdjacentHTML(
    "beforeend",
    `
    <div class="swiper-slide ">
      <article class="article-box" >
        <a href="#" class="article-box__img">
          <img
            src="assets/images/6a1e69a6-6922-43ab-bc85-5d8548a32e20_cover_thumb.webp"
            alt="" />
        </a>
        <div class="article-box__content">
          <h2 class="article-box__title">
            <a href="#"
              >
              اهمیت یادگیری پایتون در برنامه نویسی مخصوصا برنامه که دارم میرم خط سوم دیگه نویسی سمت سرور
            </a>
          </h2>
          <div class="article-box__info d-sm-flex justify-content-between align-items-end">
            <div>
              <div class="article-box__views">
                <svg>
                  <use xlink:href="#eye"></use>
                </svg>
                <span>1,257</span>
              </div>
              <div class="article-box__comments">
                <svg>
                  <use xlink:href="#comment"></use>
                </svg>
                <span>1,120 دیدگاه</span>
              </div>
            </div>
            <div class="article-box__date">
              <span>7</span>
              <span>مرداد</span>
              <span>1382</span>
            </div>
          </div>
        </div>
      </article>
    </div>
  `
  );
});

//home categories swiper
//for mobile
homeCategorySwiper.innerHTML = "";
homeCategories.forEach((category) => {
  homeCategorySwiper.insertAdjacentHTML(
    "beforeend",
    `
      <div class="swiper-slide">
        <a href="${category.link}" class="home__category">
          <svg class="home__category-hexagon ${
            category.fill && `home__category-hexagon--${category.fill}`
          }">
            <use xlink:href="#hexagon"></use>
          </svg>
          <div class="home__category-content">
            <i class="${category.icon} home__category-icon"></i>
            <h2 class="home__category-title">${category.name}</h2>
          </div>
        </a>
      </div>
    `
  );
});

// home categories for desktop

// n means number of categories in each row
let n = (homeCategories.length + 1) / 3;
const firstRow = homeCategories.slice(0, n);
const secondRow = homeCategories.slice(n, 2 * n - 1);
const thirdRow = homeCategories.slice(2 * n - 1, homeCategories.length);

//html category rows elements
const firstRowElem = $.querySelector("#first-row");
const secondRowElem = $.querySelector("#second-row");
const thirdRowElem = $.querySelector("#third-row");

firstRowElem.innerHTML = "";
secondRowElem.innerHTML = "";
thirdRowElem.innerHTML = "";

// puts array values into appropiate element
function insertCategories(array, element) {
  array.forEach((item) => {
    element.insertAdjacentHTML(
      "beforeend",
      `
        <a href="${item.link}" class="home__category">
          <svg class="home__category-hexagon ${
            item.fill && `home__category-hexagon--${item.fill}`
          }">
            <use xlink:href="#hexagon"></use>
          </svg>
          <div class="home__category-content">
            <i class="${item.icon} home__category-icon"></i>
            <h2 class="home__category-title">${item.name}</h2>
          </div>
        </a>
      `
    );
  });
}
insertCategories(firstRow, firstRowElem);
insertCategories(secondRow, secondRowElem);
insertCategories(thirdRow, thirdRowElem);

window.addEventListener("load", () => {
  setTheme();
});
