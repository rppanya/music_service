import React from "react";

import { connect } from "react-redux";

import Player from "./player";

function MiddlePlayerContainer(props) {
  console.log(props);
  return props.currentPlaying ? <Player {...props} /> : null;
}

function mapStateToProps(state) {
  return {
    currentPlaying: state.songs.currentPlaying,
  };
}

const PlayerContainer = connect(mapStateToProps, {})(MiddlePlayerContainer);

export default PlayerContainer;
