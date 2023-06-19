import React from "react";
import { useEffect, useState } from "react";

import { connect } from "react-redux";

import UsersContainer from "./usersContainer";
import { getFollowingThunkCreator } from "../../store/reducers/followReducer";

function MiddleFollowingContainer(props) {
  useEffect(() => {
    props.getFollowingThunkCreator(props.userId);
  }, []);
  return <UsersContainer {...props} />;
}

function mapStateToProps(state) {
  return {
    users: state.follow.subscribers,
  };
}

const FollowingContainer = connect(mapStateToProps, {
    getFollowingThunkCreator,
})(MiddleFollowingContainer);

export default FollowingContainer;