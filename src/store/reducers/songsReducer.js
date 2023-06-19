import { musicServiceApi } from "../../api/musicServiceApi";
import { editProfileThunkCreator } from "./userReducer";
const GET_SONGS_INFO = "GET_SONGS_INFO";
const SONGS_SEARCH = "SONGS_SEARCH";
const GET_UPLOADED_SONGS = "GET_UPLOADED_SONGS";
const GET_LIKED_SONGS = "GET_LIKED_SONGS";
const GET_COVER = "GET_COVER";
const GET_AUDIO = "GET_AUDIO";
const CHANGE_LIKE = "CHANGE_LIKE";

const initialState = {
  songsInfo: {
    id: "",
    coverId: "",
    cover: "",
    name: "",
    authorUsername: "",
    authorId: "",
    uploadDate: "",
    description: "",
    likesCount: 0,
    fileId: "",
    file: "",
    liked: true,
  },
  songsSearch: [],
  likedSongs: [],
  currentPlaying: "",
  uploadedSongs: [
    // {
    //   id: "",
    //   coverId: "",
    //   cover: "",
    //   name: "",
    //   authorUsername: "",
    //   authorId: "",
    //   uploadDate: "",
    //   description: "",
    //   likesCount: 0,
    //   fileId: "",
    //   file: "",
    //   liked: true,
    // },
  ],
};

const songsReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case GET_SONGS_INFO:
      newState.songsInfo = action.songsInfo;
      newState.songsInfo.cover = "";
      newState.songsInfo.file = "";
      return newState;
    case SONGS_SEARCH:
      newState.songsSearch = action.result;
      return newState;
    case GET_UPLOADED_SONGS:
      newState.uploadedSongs = action.uploadedSongs;
      return newState;
    case GET_LIKED_SONGS:
      console.log(action.likedSongs);
      newState.likedSongs = action.likedSongs;
      return newState;
    case GET_COVER:
      for (let i = 0; i < newState.uploadedSongs.length; i++) {
        const song = newState.uploadedSongs[i];
        if (song.id === action.songId) {
          newState.uploadedSongs[i].cover = action.file;
          break;
        }
      }
      for (let i = 0; i < newState.songsSearch.length; i++) {
        const song = newState.songsSearch[i];
        if (song.id === action.songId) {
          newState.songsSearch[i].cover = action.file;
          break;
        }
      }
      for (let i = 0; i < newState.likedSongs.length; i++) {
        const song = newState.likedSongs[i];
        if (song.id === action.songId) {
          newState.likedSongs[i].cover = action.file;
          break;
        }
      }
      return newState;
    case CHANGE_LIKE:
      for (let i = 0; i < newState.uploadedSongs.length; i++) {
        const song = newState.uploadedSongs[i];
        if (song.id === action.songId) {
          newState.uploadedSongs[i].liked = action.isLiked;
          newState.uploadedSongs[i].likesCount = action.likesCount;
          break;
        }
      }
      for (let i = 0; i < newState.songsSearch.length; i++) {
        const song = newState.songsSearch[i];
        if (song.id === action.songId) {
          newState.songsSearch[i].liked = action.isLiked;
          newState.songsSearch[i].likesCount = action.likesCount;
          break;
        }
      }
      for (let i = 0; i < newState.likedSongs.length; i++) {
        const song = newState.likedSongs[i];
        if (song.id === action.songId) {
          newState.likedSongs[i].liked = action.isLiked;
          newState.likedSongs[i].likesCount = action.likesCount;
          break;
        }
      }
      return newState;
    case GET_AUDIO:
      for (let i = 0; i < newState.uploadedSongs.length; i++) {
        const song = newState.uploadedSongs[i];
        if (song.id === action.songId) {
          newState.uploadedSongs[i].file = action.file;
          if (action.play) {
            newState.currentPlaying = action.file;
          }
          console.log(newState.currentPlaying, action.file, action.play);
          return newState;
        }
      }

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

function getLikedSongsActionCreator(likedSongs) {
  return { type: GET_LIKED_SONGS, likedSongs: likedSongs };
}

function getCoverActionCreator(id, file) {
  return { type: GET_COVER, songId: id, file: file };
}

function getAudioActionCreator(file, songId, play) {
  return { type: GET_AUDIO, songId: songId, file: file, play: play };
}

function changeLikeActionCreator(songId, isLiked, likesCount) {
  return {
    type: CHANGE_LIKE,
    isLiked: isLiked,
    songId: songId,
    likesCount: likesCount,
  };
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
        for (let i = 0; i < data.length; i++) {
          const song = data[i];
          musicServiceApi.files.downloadFile(song.coverId).then((file) => {
            dispatch(getCoverActionCreator(song.id, file));
          });
        }
        dispatch(getUploadedSongsActionCreator(data));
      });
    });
  };
}

export function songsSearchThunkCreator(searchString) {
  return (dispatch) => {
    musicServiceApi.song.searchSongs(searchString).then((data) => {
      dispatch(songsSearchActionCreator(data));
      for (let i = 0; i < data.length; i++) {
        const song = data[i];
        musicServiceApi.files.downloadFile(song.coverId).then((file) => {
          dispatch(getCoverActionCreator(song.id, file));
        });
      }
    });
  };
}

export function addSongThunkCreator(data, userId, song, cover) {
  return (dispatch) => {
    musicServiceApi.files.uploadFile(song).then((songId) => {
      data["fileId"] = songId;
      musicServiceApi.files.uploadFile(cover).then((coverId) => {
        data["coverId"] = coverId;
        musicServiceApi.song.addSongsInfo(data).then(() => {
          musicServiceApi.song.getUploadedSongs(userId).then((data) => {
            for (let i = 0; i < data.length; i++) {
              const song = data[i];
              musicServiceApi.files.downloadFile(song.coverId).then((file) => {
                dispatch(getCoverActionCreator(song.id, file));
              });
            }
            dispatch(getUploadedSongsActionCreator(data));
          });
        });
      });
    });
  };
}

export function getUploadedSongsThunkCreator(userId) {
  return (dispatch) => {
    musicServiceApi.song.getUploadedSongs(userId).then((data) => {
      for (let i = 0; i < data.length; i++) {
        const song = data[i];
        musicServiceApi.files.downloadFile(song.coverId).then((file) => {
          dispatch(getCoverActionCreator(song.id, file));
        });
      }
      dispatch(getUploadedSongsActionCreator(data));
    });
  };
}

export function getCoverThunkCreator(coverId, songId) {
  return (dispatch) => {
    musicServiceApi.files.downloadFile(coverId).then((file) => {
      dispatch(getCoverActionCreator(songId, file));
    });
  };
}

export function getAudioThunkCreator(audioId, songId, play) {
  return (dispatch) => {
    musicServiceApi.files.downloadFile(audioId).then((file) => {
      dispatch(getAudioActionCreator(file, songId, play));
    });
  };
}

export function getLikedSongsThunkCreator(userId) {
  return (dispatch) => {
    musicServiceApi.likes.getLikedSongs(userId).then((data) => {
      for (let i = 0; i < data.length; i++) {
        const song = data[i];
        musicServiceApi.files.downloadFile(song.coverId).then((file) => {
          dispatch(getCoverActionCreator(song.id, file));
        });
      }
      dispatch(getLikedSongsActionCreator(data));
    });
  };
}

export function addLikeThunkCreator(songId, userId) {
  return (dispatch) => {
    musicServiceApi.likes.addLike(songId).then((likesCount) => {
      console.log(likesCount)
      dispatch(changeLikeActionCreator(songId, true, likesCount));
      musicServiceApi.likes.getLikedSongs(userId).then((data) => {
        for (let i = 0; i < data.length; i++) {
          const song = data[i];
          musicServiceApi.files.downloadFile(song.coverId).then((file) => {
            dispatch(getCoverActionCreator(song.id, file));
          });
        }
        dispatch(getLikedSongsActionCreator(data));
      });
    });
  };
}

export function deleteLikeThunkCreator(songId, userId) {
  return (dispatch) => {
    musicServiceApi.likes.deleteLike(songId).then((likesCount) => {
      dispatch(changeLikeActionCreator(songId, false, likesCount));
      musicServiceApi.likes.getLikedSongs(userId).then((data) => {
        for (let i = 0; i < data.length; i++) {
          const song = data[i];
          musicServiceApi.files.downloadFile(song.coverId).then((file) => {
            dispatch(getCoverActionCreator(song.id, file));
          });
        }
        dispatch(getLikedSongsActionCreator(data));
      });
    });
  };
}
export default songsReducer;
