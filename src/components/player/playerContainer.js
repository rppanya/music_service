import React, { useEffect } from "react";

import { connect } from "react-redux";

import Player from "./player";
import {
  addLikeThunkCreator,
  deleteLikeThunkCreator,
  setCurrentPlaying,
} from "../../store/reducers/songsReducer";

function MiddlePlayerContainer(props) {
  console.log(props);
  useEffect(() => {
    props.setCurrentPlaying("");
  }, [props.userId]);
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
  setCurrentPlaying,
})(MiddlePlayerContainer);

export default PlayerContainer;
