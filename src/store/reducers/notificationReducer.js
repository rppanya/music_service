import { musicServiceApi } from "../../api/musicServiceApi";
const GET_NOTIFICATIONS = "GET_NOTIFICATIONS";
const GET_NOTIFICATIONS_COUNT = "GET_NOTIFICATIONS_COUNT";

const initialState = {
  notifications: [
    {
      id: "",
      type: "",
      text: "",
      userId: "",
      sendDate: "",
    },
  ],
  count: 0,
};

const notificationsReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case GET_NOTIFICATIONS:
      newState.notifications = action.notifications;
      return newState;
    case GET_NOTIFICATIONS_COUNT:
      newState.count = action.count;
      return newState;
    default:
      return newState;
  }
};

function getNotificationsActionCreator(notification) {
  return { type: GET_NOTIFICATIONS, notifications: notification };
}

function getNotificationsCountActionCreator(count) {
  return { type: GET_NOTIFICATIONS_COUNT, count: count };
}

export function getNotificationsThunkCreator() {
  return (dispatch) => {
    musicServiceApi.notification.getNotifications().then((data) => {
      dispatch(getNotificationsActionCreator(data));
    });
  };
}

export function getNotificationsCountThunkCreator() {
  return (dispatch) => {
    musicServiceApi.notification.getNotificationsCount().then((data) => {
      dispatch(getNotificationsCountActionCreator(data));
    });
  };
}

export function readNotificationThunkCreator() {
  return (dispatch) => {
    musicServiceApi.notification.readNotification().then((data) => {
      dispatch(getNotificationsCountActionCreator(data));
    });
  };
}

export default notificationsReducer;
