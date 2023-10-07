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

export {
  showSwal,
  setCookie,
  getCookie,
};
