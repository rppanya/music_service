import React, { useEffect } from "react";

import { connect } from "react-redux";
import {
  getProfileInfoThunkCreator,
  uploadHeaderImageThunkCreator,
  downloadAvatarAndHeaderThunkCreator,
} from "../../store/reducers/userReducer";
import { getUploadedSongsThunkCreator } from "../../store/reducers/songsReducer";
import Profile from "./profile";

function MiddleProfileContainer(props) {
  useEffect(() => {
    props.getProfileInfoThunkCreator();
  }, []);
  return <Profile {...props} />;
}

function mapStateToProps(state) {
  return {
    user: state.user.user,
    avatarBin: state.avatarBin,
    headerImageBin: state.headerImageBin,
    uploadedSongs: state.songs.uploadedSongs,
  };
}

const ProfileContainer = connect(mapStateToProps, {
  getProfileInfoThunkCreator,
  uploadHeaderImageThunkCreator,
  downloadAvatarAndHeaderThunkCreator,
  getUploadedSongsThunkCreator,
})(MiddleProfileContainer);

export default ProfileContainer;
