import React from "react";
import { useEffect, useState } from "react";

import { connect } from "react-redux";

import Notifications from "./notifications";
import { getNotificationsThunkCreator } from "../../store/reducers/notificationReducer";

function MiddleNotificationsContainer(props) {
//   useEffect(()=> {
//     props.getNotificationsThunkCreator()
//   }, [])
  return <Notifications {...props} />;
}

function mapStateToProps(state) {
  return {
    notifications: state.notifications.notifications
  };
}

const NotificationsContainer = connect(mapStateToProps, {
    getNotificationsThunkCreator,
})(MiddleNotificationsContainer);

export default NotificationsContainer;
