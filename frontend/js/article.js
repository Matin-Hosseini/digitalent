const relatedArticlesWrapper = document.querySelector(
  "#related-articles-swiper-wrapper"
);

const articlesArray = [0, 1, 2, 3, 4, 656, 7, 8];

relatedArticlesWrapper.innerHTML = "";
articlesArray.forEach((article) => {
  relatedArticlesWrapper.insertAdjacentHTML(
    "beforeend",
    `
        <div class="swiper-slide ">
            <article class="article-box" >
            <a href="article.html" class="article-box__img">
                <img
                src="assets/images/6a1e69a6-6922-43ab-bc85-5d8548a32e20_cover_thumb.webp"
                alt="" />
            </a>
            <div class="article-box__content">
                <h2 class="article-box__title">
                <a href="article.html"
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

const relatedArticlesSwiper = new Swiper(".related-articles-swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 2.2,
    },
    768: {
      slidesPerView: 3.3,
    },
    992: {
      slidesPerView: 4.4,
    },
    1200: {
      slidesPerView: 5.5,
    },
  },
});
