import React, { useEffect } from "react";

import { connect } from "react-redux";
import {
  getProfileInfoThunkCreator,
  uploadHeaderImageThunkCreator,
} from "../../store/reducers/userReducer";
import Profile from "./profile";

function MiddleProfileContainer(props) {
  useEffect(() => {
    props.getProfileInfoThunkCreator();
  }, []);
  return <Profile {...props} />;
}

function mapStateToProps(state) {
  return { user: state.user.user };
}

const ProfileContainer = connect(mapStateToProps, {
  getProfileInfoThunkCreator,
  uploadHeaderImageThunkCreator,
})(MiddleProfileContainer);

export default ProfileContainer;
