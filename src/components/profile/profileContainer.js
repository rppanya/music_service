import React, { useEffect } from "react";

import { connect } from "react-redux";
import { getProfileInfoThunkCreator } from "../../store/reducers/userReducer";
import Profile from "./profile";

function MiddleProfileContainer(props) {
  console.log(props);
  useEffect(() => {
    props.getProfileInfoThunkCreator();
  }, []);
  return <Profile {...props} />;
}

function mapStateToProps(state) {
  return { user: state.user };
}

const ProfileContainer = connect(mapStateToProps, {
  getProfileInfoThunkCreator,
})(MiddleProfileContainer);

export default ProfileContainer;
