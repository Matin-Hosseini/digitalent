import { homeCategories } from "./datas.js";
import { funFactsCountUp } from "./funcs/utils.js";

const D = document;

const heroImgWrapper = D.querySelector(".hero__image-wrapper");
const newestCoursesContainer = D.querySelector("#newest-courses__container");
const articleBoxContainer = D.querySelector("#article-box__container");
const homeCategorySwiper = D.querySelector("#home__category-swiper-wrapper");

// hero image starts

heroImgWrapper.style.cssText = `margin-left: -${heroImgWrapper.offsetLeft}px; max-width: 80rem;
`;
console.log(heroImgWrapper.parentElement);

// hero image ends

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

const getAllCourses = async () => {
  const res = await fetch("http://localhost:8000/v1/courses");
  const courses = await res.json();

  newestCoursesContainer.innerHTML = ``;

  courses.forEach((course) => {
    newestCoursesContainer.insertAdjacentHTML(
      "beforeend",
      `
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="course-box">
          <a href="course.html" class="course-box__image">
            <img
              src="assets/images/f4aa8891-d9a5-48f6-9166-8f40fa5e5f0f_cover.webp"
              alt="" />
          </a>
          <div class="course-box__info">
            <h2 class="course-box__name">
              <a href="course.html" class="underline-animated-text">${course.title}</a>
            </h2>
            <div
              class="course-box__price">
              <button class="course-box__shopping-cart-icon">
                <svg>
                  <use xlink:href="#shopping-cart"></use>
                </svg>
              </button>
            
              <div class="d-flex align-items-center">
                <span class="course-box__old-price">220,000 تومان</span>
                <span class="course-box__current-price">${course.price.toLocaleString()} تومان</span>
              </div>
            </div>
            <div
              class="d-flex justify-content-between align-items-center my-3">
              <div class="course-box__teacher d-flex align-items-center">
                <i class="fa-solid fa-chalkboard-user"></i>
                <h3 class="course-box__teacher-name">${course.teacher}</h3>
              </div>
              
              <div class="course-box__students">
                <i class="fa-solid fa-people-group"></i>
                <span>${course.students.toLocaleString()}</span>
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <svg>
                  <use xlink:href="#clock"></use>
                  <span class="course-box__time">20:50:34</span>
                </svg>
              </div>
              <div class="course-box__ratings">
                <span>${course.rate}</span>
                <i class="fa-solid fa-star"></i>
              </div>
              <div class="course-box__discount-time">
                <span class="course-box__discount-seconds">55</span>
                <span>:</span>
                <span class="course-box__discount-minutes">14</span>
                <span>:</span>
                <span class="course-box__discount-hours">17</span>
                <span>:</span>
                <span class="course-box__discount-days">3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
    );
  });
};

getAllCourses();

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
    <div class="swiper-slide">
      <article class="article-box" >
        <a href="article.html" class="article-box__img">
          <img
            src="assets/images/6a1e69a6-6922-43ab-bc85-5d8548a32e20_cover_thumb.webp"
            alt="" />
        </a>
        <div class="article-box__content">
          <h2 class="article-box__title">
            <a href="article.html" class="underline-animated-text"
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
const firstRowElem = D.querySelector("#first-row");
const secondRowElem = D.querySelector("#second-row");
const thirdRowElem = D.querySelector("#third-row");

firstRowElem.innerHTML = "";
secondRowElem.innerHTML = "";
thirdRowElem.innerHTML = "";

// puts array values into appropiate element
function insertCategories(array, element) {
  array.forEach((item) => {
    element.insertAdjacentHTML(
      "beforeend",
      `
        <a href="${item.link}" class="home__category" data-aos="zoom-in">
          <svg class="home__category-hexagon ${
            item.fill && `home__category-hexagon--${item.fill}`
          }">
            <use href="#hexagon"></use>
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

const countDownTimer = (date) => {
  const countDownDate = new Date(date).getTime();

  const countDownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance < 0) {
      clearInterval(countDownInterval);
      return;
    }

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (days < 10) {
      days = "0" + days;
    }
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    console.log(`${days}:${hours}:${minutes}:${seconds}`);
  }, 1000);
};

window.addEventListener("load", () => {
  funFactsCountUp();
});
