const categoryCoureses = document.querySelector(".category-courses");

const couressArray = [1, 2, 3, 5, 6, 8, 7, 4, 8, 1, 1, 1];

categoryCoureses.innerHTML = "";

couressArray.forEach((course) => {
  categoryCoureses.insertAdjacentHTML(
    "beforeend",
    `
        <div class="col-sm-6 col-lg-4">
            <div class="course-box">
                <div class="course-box__discount-percentage">25%</div>
                <a href="course.html" class="course-box__image">
                <img
                    src="assets/images/f4aa8891-d9a5-48f6-9166-8f40fa5e5f0f_cover.webp"
                    alt="" />
                </a>
                <div class="course-box__info">
                <h2 class="course-box__name">
                    <a href="course.html">
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
