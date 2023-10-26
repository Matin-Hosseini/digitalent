const showSwal = (message, icon, button, callback = () => {}) => {
  Swal.fire({
    icon: icon,
    title: message,
    confirmButtonText: button,
  }).then((result) => callback(result));
};

const setCookie = (name, value, path, expireDays) => {
  let now = new Date();
  let expireDate = new Date(
    now.setTime(now.getTime() + expireDays * 24 * 60 * 60 * 1000)
  );

  document.cookie = `${name}=${value};path:${path};expires=${expireDate}`;
};

const getCookie = (name) => {
  const allCookies = document.cookie.split(";");

  const cookie = allCookies.find((cookie) => cookie.includes(name));
  if (!cookie) {
    return undefined;
  }
  const cookieValue = cookie.substring(cookie.indexOf("=") + 1);

  return cookieValue;
};

const funFactsCountUp = () => {
  const funFactCounts = document.querySelectorAll(".funfact__count");
  const speed = 400;

  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => entry.isIntersecting && animate(entry.target)),
    {
      threshold: 0, //fires only once
    }
  );

  const animate = (counter) => {
    const value = +counter.dataset.count;
    const data = +counter.innerText;
    const time = value / speed;

    if (data < value) {
      counter.innerText = Math.ceil(data + time);
      setTimeout(() => animate(counter), 1);
    } else {
      counter.innerText = value.toLocaleString();
    }
  };

  funFactCounts.forEach((c) => observer.observe(c));
};

const isEmailValid = (email) => {
  if (
    String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    return true;
  } else {
    return false;
  }
};

export { showSwal, setCookie, getCookie, funFactsCountUp, isEmailValid };
