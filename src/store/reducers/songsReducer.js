import { musicServiceApi } from "../../api/musicServiceApi";
const GET_SONGS_INFO = "GET_SONGS_INFO";
const SONGS_SEARCH = "SONGS_SEARCH";
const GET_UPLOADED_SONGS = "GET_UPLOADED_SONGS";

const initialState = {
  songsInfo: {
    id: "",
    coverId: "",
    name: "",
    authorUsername: "",
    authorId: "",
    uploadDate: "",
    description: "",
    likesCount: 0,
    fileId: "",
    liked: true,
  },
  songsSearch: [],
  uploadedSongs: [
    {
      id: "",
      coverId: "",
      name: "",
      authorUsername: "",
      authorId: "",
      uploadDate: "",
      description: "",
      likesCount: 0,
      fileId: "",
      liked: true,
    },
  ],
};

const songsReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case GET_SONGS_INFO:
      newState.songsInfo = action.songsInfo;
      return newState;
    case SONGS_SEARCH:
      newState.songsSearch = action.result;
      return newState;
    case GET_UPLOADED_SONGS:
      newState.uploadedSongs = action.uploadedSongs;
      return newState;
    default:
      return newState;
  }
};

function getSongsInfoActionCreator(songsInfo) {
  return { type: GET_SONGS_INFO, songsInfo: songsInfo };
}

function songsSearchActionCreator(result) {
  return { type: SONGS_SEARCH, result: result };
}

function getUploadedSongsActionCreator(uploadedSongs) {
  return { type: GET_UPLOADED_SONGS, uploadedSongs: uploadedSongs };
}

export function getSongsInfoThunkCreator(id) {
  return (dispatch) => {
    musicServiceApi.song.geetSongsInfo(id).then((data) => {
      dispatch(getSongsInfoActionCreator(data));
    });
  };
}

export function editSongsInfoThunkCreator(id, data) {
  return (dispatch) => {
    musicServiceApi.song.editSongsData(id, data).then((newData) => {
      dispatch(getSongsInfoActionCreator(newData));
    });
  };
}

export function deleteSongThunkCreator(id, userId) {
  return (dispatch) => {
    musicServiceApi.song.deleteSong(id).then(() => {
      musicServiceApi.song.getUploadedSongs(userId).then((data) => {
        dispatch(getUploadedSongsActionCreator(data));
      });
    });
  };
}

export function songsSearchThunkCreator(searchString) {
  return (dispatch) => {
    musicServiceApi.song.searchSongs(searchString).then((data) => {
      dispatch(songsSearchActionCreator(data));
    });
  };
}

export function addSongThunkCreator(data, userId) {
  return (dispatch) => {
    musicServiceApi.song.addSongsInfo(data).then(() => {
      musicServiceApi.song.getUploadedSongs(userId).then((data) => {
        dispatch(getUploadedSongsActionCreator(data));
      });
    });
  };
}

export function getUploadedSongsThunkCreator(userId) {
  return (dispatch) => {
    musicServiceApi.song.getUploadedSongs(userId).then((data) => {
      dispatch(getUploadedSongsActionCreator(data));
    });
  };
}

export default songsReducer;
