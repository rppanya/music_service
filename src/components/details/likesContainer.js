import React from "react";
import { useEffect, useState } from "react";

import { connect } from "react-redux";

import MyTracks from "../profile/myTracks";
import { getLikedSongsThunkCreator } from "../../store/reducers/songsReducer";

function MiddleLikesContainer(props) {
  useEffect(() => {
    props.getLikedSongsThunkCreator(props.userId);
  }, [props.userId]);
  return <MyTracks {...props} />;
}

function mapStateToProps(state) {
  return {
    songs: state.songs.likedSongs,
    currentPlaying: state.songs.currentPlaying,
  };
}

const LikesContainer = connect(mapStateToProps, {
    getLikedSongsThunkCreator,
})(MiddleLikesContainer);

export default LikesContainer;
