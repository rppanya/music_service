import React from "react";
import { useEffect, useState } from "react";

import { connect } from "react-redux";

import Details from "./detailsContainer";
import { getProfileInfoIdThunkCreator } from "../../store/reducers/userReducer";

function MiddleDetailsPageContainer(props) {
  const userId = window.location.pathname.split("/").pop();

  useEffect(() => {
    props.getProfileInfoIdThunkCreator(userId);
  }, []);
  return <Details {...props} />;
}

function mapStateToProps(state) {
  return {
    user: state.user.anotherUser,
    avatarBin: state.user.avatarBin,
    songs: state.songs,
    currentPlaying: state.songs.currentPlaying,
  };
}

const DetailsPageContainer = connect(mapStateToProps, {
  getProfileInfoIdThunkCreator,
})(MiddleDetailsPageContainer);

export default DetailsPageContainer;
