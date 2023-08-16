//home page swiper for showing articles
const articlesSwiper = new Swiper(".articles-swiper", {
  spaceBetween: 5,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 1.8,
    },
    992: {
      slidesPerView: 2.7,
    },
    1024: {
      slidesPerView: 3.8,
    },
  },
});
