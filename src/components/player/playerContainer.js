import React from "react";

import { connect } from "react-redux";

import Player from "./player";
import {
  addLikeThunkCreator,
  deleteLikeThunkCreator,
} from "../../store/reducers/songsReducer";

function MiddlePlayerContainer(props) {
  console.log(props);
  return props.currentPlaying ? <Player {...props} /> : null;
}

function mapStateToProps(state) {
  return {
    currentPlaying: state.songs.currentPlaying,
    songs: state.songs,
    userId: state.user.user.id,
  };
}

const PlayerContainer = connect(mapStateToProps, {
  addLikeThunkCreator,
  deleteLikeThunkCreator,
})(MiddlePlayerContainer);

export default PlayerContainer;
