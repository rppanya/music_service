import React from "react";

import { connect } from "react-redux";
import { registrationThunkCreator } from "../../store/reducers/userReducer";
import RegistrationForm from "./registrationForm";

function MiddleRegistrationFormContainer(props) {
  //console.log(props);
  return <RegistrationForm {...props} />;
}

function mapStateToProps(state) {
  return { user: state.user };
}

const RegistrationFormContainer = connect(mapStateToProps, { registrationThunkCreator })(
  MiddleRegistrationFormContainer
);

export default RegistrationFormContainer;
