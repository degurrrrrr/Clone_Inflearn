import axios from "axios";

const accessToken = document.cookie.split("=")[1];

export const api_token = axios.create({
  baseURL: "http://velog.milagros.shop/api",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
    authorization: `Bearer ${accessToken}`,
  },
});

export const test_api = axios.create({
  baseURL: "http://14.45.204.153:8023"
})

export const test = axios.create({
  baseURL: "http://velog.milagros.shop/api"
})