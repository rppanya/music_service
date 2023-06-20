import { musicServiceApi } from "../../api/musicServiceApi";
const GET_NOTIFICATIONS = "GET_NOTIFICATIONS";

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
};

const notificationsReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case GET_NOTIFICATIONS:
      newState.notifications = action.notifications;
      return newState;
    default:
      return newState;
  }
};

function getNotificationsActionCreator(notification) {
  return { type: GET_NOTIFICATIONS, notifications: notification };
}

export function getNotificationsThunkCreator() {
  return (dispatch) => {
    musicServiceApi.notification.getNotifications().then((data) => {
      console.log(data);
      dispatch(getNotificationsActionCreator(data));
    });
  };
}

export default notificationsReducer;
