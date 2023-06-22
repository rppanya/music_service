import React from "react";
import { useEffect, useState } from "react";

import { connect } from "react-redux";

import Notifications from "./notifications";
import {
  getNotificationsThunkCreator,
  getNotificationsCountThunkCreator,
  readNotificationThunkCreator,
} from "../../store/reducers/notificationReducer";

function MiddleNotificationsContainer(props) {
  useEffect(() => {
    props.getNotificationsCountThunkCreator();
  }, []);
  return <Notifications {...props} />;
}

function mapStateToProps(state) {
  return {
    notifications: state.notifications.notifications,
    count: state.notifications.count,
  };
}

const NotificationsContainer = connect(mapStateToProps, {
  getNotificationsThunkCreator,
  getNotificationsCountThunkCreator,
  readNotificationThunkCreator,
})(MiddleNotificationsContainer);

export default NotificationsContainer;
