const coursesContainer = document.querySelector("#courses-container");

const allCourses = [
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
];

coursesContainer.innerHTML = "";

allCourses.forEach((course) => {
  coursesContainer.insertAdjacentHTML(
    "beforeend",
    `
    <div class="col-sm-6 col-md-6 col-lg-4">
    <div class="course-box">
      <a href="course.html" class="course-box__image">
        <img
          src="./../../assets/images/6a1e69a6-6922-43ab-bc85-5d8548a32e20_cover_thumb.webp"
          alt="" />
      </a>
      <div class="course-box__info mb-0">
        <h2 class="course-box__name">
          <a href="course.html" class="underline-animated-text">یه یسبشسیدب لسیتلشهخس لسمشلتتس یتسهخب لسهت لهثدقس هتسلیخهل هسدل سمی</a>
        </h2>
        </div>
      </div>
    </div>
  </div>
    `
  );
});
