//home page swiper for showing articles
const articlesSwiper = new Swiper(".articles-swiper", {
  spaceBetween: 5,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
  breakpoints: {
    576: {
      slidesPerView: 1.2,
    },
    640: {
      slidesPerView: 1.4,
    },
    768: {
      slidesPerView: 1.6,
    },
    900: {
      slidesPerView: 2.2,
    },
    992: {
      slidesPerView: 2.7,
    },
    1200: {
      slidesPerView: 3.2,
    },
    1400: {
      slidesPerView: 3.5,
    },
  },
});

const homeCategorySwiper = new Swiper(".home__category-swiper", {
  slidesPerView: 2,
  breakpoints: {
    290: {
      slidesPerView: 2.3,
    },
    350: {
      slidesPerView: 3.3,
    },
    450: {
      slidesPerView: 4.3,
    },
    550: {
      slidesPerView: 5.3,
    },
    650: {
      slidesPerView: 6.3,
    },
  },
});
