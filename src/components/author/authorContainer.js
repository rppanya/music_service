import React from "react";
import { useEffect, useState } from "react";

import { connect } from "react-redux";

import Author from "./author";
import { getProfileInfoIdThunkCreator } from "../../store/reducers/userReducer";

function MiddleAuthorContainer(props) {
  console.log(props);
  const userId = window.location.pathname.split("/").pop();
  useEffect(() => {
    props.getProfileInfoIdThunkCreator(userId);
  }, []);
  // useEffect(() => {
  //   props.getProfileInfoIdThunkCreator(userId);
  // }, [props.uploadedSongs, props.likedSongs]);
  return <Author {...props} />;
}

function mapStateToProps(state) {
  return {
    user: state.user,
    // follow: state.follow
    // likedSongs: state.songs.likedSongs,
    // uploadedSongs: state.songs.uploadedSongs,
  };
}

const AuthorContainer = connect(mapStateToProps, {
  getProfileInfoIdThunkCreator,
})(MiddleAuthorContainer);

export default AuthorContainer;
