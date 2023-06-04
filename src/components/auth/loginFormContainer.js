import React from "react";

import { connect } from "react-redux";
import { loginThunkCreator } from "../../store/reducers/userReducer";
import LoginForm from "./loginForm";

function MiddleLoginFormContainer(props) {
  console.log(props);
  return <LoginForm {...props} />;
}

function mapStateToProps(state) {
  return { user: state.user };
}

const LoginFormContainer = connect(mapStateToProps, { loginThunkCreator })(
  MiddleLoginFormContainer
);

export default LoginFormContainer;
