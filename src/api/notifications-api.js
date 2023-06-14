import instance from "./baseUrl";
const url = "api/notifications";

function getNotifications() {
  return instance.get(`${url}/get`, {
    headers: {
      "Content-Type": "applicatin/json",
    },
  });
}

export const notificationsApi = {
  getNotifications: getNotifications,
};
