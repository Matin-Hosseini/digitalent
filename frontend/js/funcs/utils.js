const setTheme = () => {
  const html = document.documentElement;
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    html.className = "dark";
    // darkModeBtn.innerHTML = `
    //   <svg class="nav__icon">
    //     <use xlink:href="#sun"></use>
    //   </svg>
    //   `;
  } else {
    html.className = "light";
    // darkModeBtn.innerHTML = `
    //   <svg class="nav__icon">
    //     <use xlink:href="#moon"></use>
    //   </svg>
    //   `;
  }
};


export {setTheme}
