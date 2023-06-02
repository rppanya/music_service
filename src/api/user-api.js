import instance from "./baseUrl";
const url = "api/users/";

function registration(data) {
  return instance.post(`${url}register`, data);
}

function login(data) {
  return instance.post(`${url}login`, data);
}

function getProfileInfo() {
  return instance.get(`${url}profile`);
}

export const userApi = {
  registration: registration,
  login: login,
  getProfileInfo: getProfileInfo,
};
