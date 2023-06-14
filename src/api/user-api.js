import instance from "./baseUrl";
const url = "api/users";

function registration(data) {
  return instance.post(`${url}/register`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function login(data) {
  return instance.post(`${url}/login`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function getProfileInfo() {
  return instance.get(`${url}/profile`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function changeProfileInfo(data) {
  return instance.put(`${url}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function logout() {
  return instance.post(`${url}/logout`);
}

function uploadHeaderImage(image) {
  return instance.put(`${url}/upload-header-image`, image);
}

function usersSearch(searchString) {
  return instance.post(`${url}/search`, searchString, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function getProfileInfoID(id) {
  return instance.get(`${url}/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export const userApi = {
  registration: registration,
  login: login,
  getProfileInfo: getProfileInfo,
  changeProfileInfo: changeProfileInfo,
  logout: logout,
  uploadHeaderImage: uploadHeaderImage,
  usersSearch: usersSearch,
  getProfileInfoID: getProfileInfoID
};
