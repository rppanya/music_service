import React from "react";
import { useEffect, useState } from "react";

import { connect } from "react-redux";

import FollowButton from "./followButton";
import {
  followThunkCreator,
  unfollowThunkCreator,
} from "../../store/reducers/followReducer";

function MiddleFollowButtonContainer(props) {
  return <FollowButton {...props} />;
}

function mapStateToProps(state) {
  return {
    songs: state.songs.uploadedSongs,
    currentPlaying: state.songs.currentPlaying,
    following: state.user.anotherUser.following,
  };
}

const FollowButtonContainer = connect(mapStateToProps, {
  followThunkCreator,
  unfollowThunkCreator,
})(MiddleFollowButtonContainer);

export default FollowButtonContainer;
