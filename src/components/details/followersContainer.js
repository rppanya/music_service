import React from "react";
import { useEffect, useState } from "react";

import { connect } from "react-redux";

import UsersContainer from "./usersContainer";
import { getSubscribersThunkCreator } from "../../store/reducers/followReducer";

function MiddleFollowersContainer(props) {

  useEffect(() => {
    props.getSubscribersThunkCreator(props.userId);
  }, []);
  return <UsersContainer {...props} />;
}

function mapStateToProps(state) {
  return {
    users: state.follow.subscribers,
  };
}

const FollowersContainer = connect(mapStateToProps, {
  getSubscribersThunkCreator,
})(MiddleFollowersContainer);

export default FollowersContainer;
