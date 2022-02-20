//저번주에 썼던거

//getCookie('쿠키 설정한 이름'); 으로 쿠키의 내용이 있는지 값을 가져 올 수 있다
const getCookie = (name) => {
  let value = "; " + document.cookie;
  let parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
};

//setCookie('쿠키 설정할 이름','설정할 값',1); 으로 쿠키를 설정 할 수 있다
// 3번째 매개변수는 설정할 기간을 설정한다.
const setCookie = (name, value, exp = 1) => {
  let date = new Date();
  date.setTime(dat e.getTime() + exp * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
};

const deleteCookie = (name) => {
  let date = new Date("2020-01-01").toUTCString();
  document.cookie = name + "=; expires=" + date;
};

export { getCookie, setCookie, deleteCookie };
