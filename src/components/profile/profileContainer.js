import React, { useEffect } from "react";

import { connect } from "react-redux";
import {
  getProfileInfoThunkCreator,
  uploadHeaderImageThunkCreator,
  downloadAvatarAndHeaderThunkCreator,
} from "../../store/reducers/userReducer";
import Profile from "./profile";

function MiddleProfileContainer(props) {
  useEffect(() => {
    props.getProfileInfoThunkCreator();
  }, []);
  useEffect(() => {
    props.getProfileInfoThunkCreator();
  }, [props.likedSongs, props.uploadedSongs]);
  return <Profile {...props} />;
}

function mapStateToProps(state) {
  return {
    user: state.user,
    avatarBin: state.user.avatarBin,
    headerImageBin: state.user.headerImageBin,
    likedSongs: state.songs.likedSongs,
    uploadedSongs: state.songs.uploadedSongs,
    songsS: state.songs
  };
}

const ProfileContainer = connect(mapStateToProps, {
  getProfileInfoThunkCreator,
  uploadHeaderImageThunkCreator,
  downloadAvatarAndHeaderThunkCreator,
})(MiddleProfileContainer);

export default ProfileContainer;
