import axios from "axios";

const accessToken = document.cookie.split("=")[1];

export const api = axios.create({
  baseURL: "http://velog.milagros.shop/api",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

export const api_token = axios.create({
  baseURL: "http://velog.milagros.shop/api",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
    authorization: `${accessToken}`,
  },
});

export const test_api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/users",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  }
})