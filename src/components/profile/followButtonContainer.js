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
  console.log(props);
  useEffect(() => {
    props.getProfileInfoIdThunkCreator(props.userId);
  }, []);
  useEffect(() => {
    props.getProfileInfoIdThunkCreator(props.userId);
  }, [props.follow]);
  return <FollowButton {...props} />;
}

function mapStateToProps(state) {
  return {
    songs: state.songs.uploadedSongs,
    currentPlaying: state.songs.currentPlaying,
    following: state.user.anotherUser.following,
    follow: state.follow.subscribers,
  };
}

const FollowButtonContainer = connect(mapStateToProps, {
  followThunkCreator,
  unfollowThunkCreator,
  getProfileInfoIdThunkCreator,
})(MiddleFollowButtonContainer);

export default FollowButtonContainer;
