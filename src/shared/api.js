import axios from "axios";

const accessToken = localStorage.getItem("is_login");

// console.log('accessToken !! ',accessToken);

export const api_token = axios.create({
  baseURL: "http://velog.milagros.shop/api",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
    authorization: `Bearer ${accessToken}`,
  },
});

export const test_api = axios.create({
  baseURL: "http://14.45.204.153:7979/api",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
    authorization: `Bearer ${accessToken}`,
  },
})

export const test_api2 = axios.create({
  baseURL: "http://13.125.93.242:80/api",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
    authorization: `Bearer ${accessToken}`,
  },
})

export const test = axios.create({
  baseURL: "http://velog.milagros.shop/api"
})