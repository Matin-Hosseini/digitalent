import { setTheme } from "./funcs/utils.js";

setTheme()

const aboutUsTeachers = [
  { id: 1, name: "سید متین حسینی", carrier: "فرانت اند" },
  { id: 2, name: "محمد رمضانی", carrier: "عکاسی" },
  { id: 3, name: "سارا بخشیان", carrier: "بک اند" },
  { id: 4, name: "امین فهیمه امیری", carrier: "آشپزی" },
  { id: 5, name: "شایان مرتضوی نیک", carrier: "برنامه نویسی" },
  { id: 6, name: "آنیتا رجبی", carrier: "هوش مصنوعی" },
  { id: 7, name: "مهسا مقیمی", carrier: "اندروید" },
  { id: 8, name: "امید باباخانی", carrier: "آی او اس" },
];

const teachersSwiperContainer = document.querySelector(
  "#teachers-swiper-container"
);

teachersSwiperContainer.innerHTML = "";
aboutUsTeachers.forEach((teacher) => {
  teachersSwiperContainer.insertAdjacentHTML(
    "beforeend",
    `
        <div class="swiper-slide">
            <div class="teacher">
                <a href="#" class="teacher__img">
                    <img src="assets/images/about-us/profile.jpg" alt="">
                </a>
                <div class="teacher__info">
                    <h2 class="teacher__name">
                        <a href="#">${teacher.name}</a>
                    </h2>
                    <h3 class="teacher__carrier">${teacher.carrier}</h3>
                    <div class="teacher__socials">
                        <a href="#" class="teachers__social">
                            <i class="fa-brands fa-facebook"></i>
                        </a>
                        <a href="#" class="teachers__social">
                            <i class="fa-brands fa-twitter"></i>
                        </a>
                        <a href="#" class="teachers__social">
                            <i class="fa-brands fa-telegram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `
  );
});
const swiper = new Swiper(".teachers__swiper", {
  spaceBetween: 5,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    350: {
      slidesPerView: 1.2,
    },
    450: {
      slidesPerView: 2.2,
    },
    768: {
      slidesPerView: 3.2,
    },
    992: {
      slidesPerView: 4.2,
    },
    450: {
      slidesPerView: 2.2,
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
