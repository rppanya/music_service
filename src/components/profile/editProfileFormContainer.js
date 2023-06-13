import React from "react";

import { connect } from "react-redux";
import { editProfileThunkCreator } from "../../store/reducers/userReducer";
import EditProfileForm from "./editProfileForm";

function MiddleEditProfileFormContainer(props) {
  console.log(props);
  return <EditProfileForm {...props} />;
}

function mapStateToProps(state) {
  return { user: state.user };
}

const EditProfileFormContainer = connect(mapStateToProps, { editProfileThunkCreator })(
  MiddleEditProfileFormContainer
);

export default EditProfileFormContainer;
