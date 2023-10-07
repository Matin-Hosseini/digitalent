import { setCookie, getCookie, showSwal } from "./utils.js";

const register = (newUserInfo) => {
  fetch(`http://localhost:8000/v1/auth/register`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newUserInfo),
  })
    .then((res) => {
      if (res.status === 201) {
        showSwal("ثبت نام با موفقیت انجام شد.", "success", "بزن بریم", () => {
          location.href = "index.html";
        });
        return res.json();
      } else if (res.status === 422) {
        showSwal("لطفا فیلد ها را به درستی پر کنید", "error", "حله", () => {});
      } else if (res.status === 409) {
        showSwal(
          "نام کاربری یا ایمیل قبلا استفاده شده است",
          "error",
          "وارد شوید",
          () => {
            location.href = "login.html";
          }
        );
      }

      return res.json();
    })
    .then((data) => {
      if (data?.accessToken) {
        setCookie("token", data.accessToken, "/", 3);
      }
    });
};

const login = (userInfo) => {
  console.log("showing loader");
  fetch("http://localhost:8000/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(userInfo),
  })
    .then((res) => {
      console.log("removing loader");
      const status = res.status;

      if (status === 201) {
        showSwal("خوش آمدید", "success", "ورود", () => {
          location.href = "index.html";
        });
      } else if (status === 401) {
        showSwal("کاربری با این اطلاعات یافت نشد", "error", "بازگشت", () => {});
      } else if (res.status === 405) {
        showSwal("رمز عبور اشتباه می باشد", "error", "اوکی", () => {});
      }

      return res.json();
    })
    .then((data) => {
      if (data.accessToken) {
        console.log(data.accessToken);
        setCookie("token", data.accessToken, "/", 3);
      }
    });
};

const getMe = async () => {
  const token = getToken();

  if (!token) {
    return;
  }

  const getUser = await fetch("http://localhost:8000/v1/auth/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const user = await getUser.json();

  return user;
};

const getToken = () => {
  const token = getCookie("token");
  return token ? token : null;
};

const isLogin = () => (getToken() ? true : false);

export { register, login, getMe, getToken, isLogin };
