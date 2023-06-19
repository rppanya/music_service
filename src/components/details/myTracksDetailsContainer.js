// import React from "react";
// import { useEffect, useState } from "react";

// import { connect } from "react-redux";

// import MyTracks from "./myTracks";
// import { getUploadedSongsThunkCreator } from "../../store/reducers/songsReducer";

// function MiddleMyTrackContainer(props) {
//   useEffect(() => {
//     props.getUploadedSongsThunkCreator(props.userId);
//   }, [props.userId]);
//   return <MyTracks {...props} />;
// }

// function mapStateToProps(state) {
//   return {
//     songs: state.songs.uploadedSongs,
//     currentPlaying: state.songs.currentPlaying,
//   };
// }

// const MyTracksContainer = connect(mapStateToProps, {
//   getUploadedSongsThunkCreator,
// })(MiddleMyTrackContainer);

// export default MyTracksContainer;
