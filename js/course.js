const tabsItems = document.querySelectorAll(".tabs__item");
const tabsLine = document.querySelector(".tabs__line");



//tabs
//sets tabsLine in its position
const positionTabsLine = () => {
  tabsLine.style.left = tabsItems[0].offsetLeft + "px";
};

tabsItems.forEach((tabItem) => {
  tabItem.addEventListener("click", () => {
    tabsItems.forEach((tabItem) => {
      tabItem.classList.remove("tabs__item--active");
    });
    tabItem.classList.add("tabs__item--active");
    tabsLine.style.width = tabItem.scrollWidth + "px";
    tabsLine.style.left = tabItem.offsetLeft + "px";
  });
});

window.addEventListener("load", () => {
  positionTabsLine();
});
window.addEventListener("scroll", () => {
  positionTabsLine();
});
