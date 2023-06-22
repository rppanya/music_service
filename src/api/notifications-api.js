import instance from "./baseUrl";
const url = "api/notifications";

function getNotifications() {
  return instance.get(`${url}`, {
    headers: {
      "Content-Type": "applicatin/json",
    },
  });
}

function getNotificationsCount() {
  return instance.get(`${url}/unread-count`, {
    headers: {
      "Content-Type": "applicatin/json",
    },
  });
}

function readNotification() {
  return instance.put(
    `${url}/mark-as-read`,
    {},
    {
      headers: {
        "Content-Type": "applicatin/json",
      },
    }
  );
}

export const notificationsApi = {
  getNotifications: getNotifications,
  getNotificationsCount: getNotificationsCount,
  readNotification: readNotification
};
