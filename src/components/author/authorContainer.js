import React from "react";
import { useEffect, useState } from "react";

import { connect } from "react-redux";

import Author from "./author";
import { getProfileInfoIdThunkCreator } from "../../store/reducers/userReducer";

function MiddleAuthorContainer(props) {
  console.log(props)
  const userId = window.location.pathname.split("/").pop();
  useEffect(() => {
    props.getProfileInfoIdThunkCreator(userId);
  }, []);
  return <Author {...props} />;
}

function mapStateToProps(state) {
  return {
    user: state.user,
    follow: state.follow
  };
}

const AuthorContainer = connect(mapStateToProps, {
  getProfileInfoIdThunkCreator,
})(MiddleAuthorContainer);

export default AuthorContainer;
