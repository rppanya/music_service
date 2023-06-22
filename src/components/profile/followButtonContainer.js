import React from "react";
import { useEffect, useState } from "react";

import { connect } from "react-redux";

import FollowButton from "./followButton";
import {
  followThunkCreator,
  unfollowThunkCreator,
} from "../../store/reducers/followReducer";
import { getProfileInfoIdThunkCreator } from "../../store/reducers/userReducer";

function MiddleFollowButtonContainer(props) {
  // useEffect(() => {
  //   props.getProfileInfoIdThunkCreator(props.userId);
  // }, []);
  const userId = window.location.pathname.split("/").pop();

  useEffect(() => {
    props.getProfileInfoIdThunkCreator(userId);
  }, [props.follow]);
  return <FollowButton {...props} />;
}

function mapStateToProps(state) {
  return {
    follow: state.follow.subscribers,
  };
}

const FollowButtonContainer = connect(mapStateToProps, {
  followThunkCreator,
  unfollowThunkCreator,
  getProfileInfoIdThunkCreator,
})(MiddleFollowButtonContainer);

export default FollowButtonContainer;
