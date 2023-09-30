const courseDetailsContent = document.querySelector(".course-details__content");
const tabsItems = document.querySelectorAll(".tabs__item");
const tabsLine = document.querySelector(".tabs__line");

const tabsContent = document.querySelectorAll(".tab-content");

const relatedCoursesSwiperWrapper = document.querySelector(
  "#related-courses__swiper-container"
);

//tabs
//sets tabsLine in its position
const positionTabsLine = () => {
  tabsLine.style.left =
    document.querySelector(".tabs__item--active").offsetLeft + "px";
};

tabsItems.forEach((tabItem, index) => {
  tabItem.addEventListener("click", () => {
    if (window.scrollY > courseDetailsContent.offsetTop + 150) {
      window.scrollTo(0, courseDetailsContent.offsetTop);
    }
    tabsItems.forEach((tabItem) => {
      tabItem.classList.remove("tabs__item--active");
    });
    tabItem.classList.add("tabs__item--active");
    tabsLine.style.width = tabItem.scrollWidth + "px";
    tabsLine.style.left = tabItem.offsetLeft + "px";

    tabsContent.forEach((tabContent) =>
      tabContent.classList.remove("tab-content--active")
    );
    tabsContent[index].classList.add("tab-content--active");
  });
});

const relatedCourses = [1, 2, 3, 4, 5, 6, 7, 8, 9];

relatedCoursesSwiperWrapper.innerHTML = "";
relatedCourses.forEach((course) => {
  relatedCoursesSwiperWrapper.insertAdjacentHTML(
    "beforeend",
    `
    <div class="swiper-slide">
      <div class="course-box">
        <div class="course-box__discount-percentage">25%</div>
        <a href="#" class="course-box__image">
          <img
            src="assets/images/f4aa8891-d9a5-48f6-9166-8f40fa5e5f0f_cover.webp"
            alt="" />
        </a>
        <div class="course-box__info">
          <h2 class="course-box__name">
            <a href="#">
              آموزش html و css برای مبتدی ها که در واقع منجر به این
              هست خط سوم</a
            >
          </h2>
          <div class="course-box__price">
            <button class="course-box__shopping-cart-icon">
              <svg>
                <use xlink:href="#shopping-cart"></use>
              </svg>
            </button>

            <div class="d-flex align-items-center">
              <span class="course-box__old-price">220,000 تومان</span>
              <span class="course-box__current-price"
                >175,000 تومان</span
              >
            </div>
          </div>
          <div
            class="d-flex justify-content-between align-items-center my-3">
            <div
              class="course-box__teacher d-flex align-items-center">
              <i class="fa-solid fa-chalkboard-user"></i>
              <h3 class="course-box__teacher-name">متین حسینی</h3>
            </div>

            <div class="course-box__students">
              <i class="fa-solid fa-people-group"></i>
              <span>11,578</span>
            </div>
          </div>
          <div
            class="d-flex justify-content-between align-items-center">
            <div>
              <svg>
                <use xlink:href="#clock"></use>
                <span class="course-box__time">20:50:34</span>
              </svg>
            </div>
            <div class="course-box__ratings">
              <span>4</span>
              <i class="fa-solid fa-star"></i>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  `
  );
});
const relatedCoursesSwiper = new Swiper(".swiper", {
  loop: true,
  spaceBetween: 8,

  breakpoints: {
    290: {
      slidesPerView: 1.2,
    },
    400: {
      slidesPerView: 1.5,
    },
    500: {
      slidesPerView: 1.8,
    },
    576: {
      slidesPerView: 2.2,
    },
    768: {
      slidesPerView: 2.8,
    },
    992: {
      slidesPerView: 3.8,
    },
    1200: {
      slidesPerView: 4.3,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

window.addEventListener("load", () => {
  positionTabsLine();
});

window.addEventListener("resize", () => {
  positionTabsLine();
});
