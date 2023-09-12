const tabsItems = document.querySelectorAll(".tabs__item");
const tabsLine = document.querySelector(".tabs__line");

const tabsContent = document.querySelectorAll(".tab-content")



//tabs
//sets tabsLine in its position
const positionTabsLine = () => {
  tabsLine.style.left = tabsItems[0].offsetLeft + "px";
};

tabsItems.forEach((tabItem, index) => {
  tabItem.addEventListener("click", () => {
    tabsItems.forEach((tabItem) => {
      tabItem.classList.remove("tabs__item--active");
    });
    tabItem.classList.add("tabs__item--active");
    tabsLine.style.width = tabItem.scrollWidth + "px";
    tabsLine.style.left = tabItem.offsetLeft + "px";

    tabsContent.forEach(tabContent => tabContent.classList.remove("tab-content--active"))
    tabsContent[index].classList.add("tab-content--active")
    
  });
});

window.addEventListener("load", () => {
  positionTabsLine();
});
// window.addEventListener("scroll", () => {
//   positionTabsLine();
// });
