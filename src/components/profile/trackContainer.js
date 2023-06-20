import React from "react";

import { connect } from "react-redux";
import {
  getCoverThunkCreator,
  getAudioThunkCreator,
  addLikeThunkCreator,
  deleteLikeThunkCreator,
  deleteSongThunkCreator,
  setCurrentPlaying
} from "../../store/reducers/songsReducer";
import Track from "./track";

function MiddleTrackContainer(props) {
  return <Track {...props} />;
}

function mapStateToProps(state) {
  return {
    songs: state.songs,
    currentPlaying: state.songs.currentPlaying,
    userId: state.user.user.id,
  };
}

const TrackContainer = connect(mapStateToProps, {
  getCoverThunkCreator,
  getAudioThunkCreator,
  addLikeThunkCreator,
  deleteLikeThunkCreator,
  deleteSongThunkCreator,
  setCurrentPlaying
})(MiddleTrackContainer);

export default TrackContainer;
