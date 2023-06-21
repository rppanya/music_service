import { SELECTION_ALL } from "antd/es/table/hooks/useSelection";
import { musicServiceApi } from "../../api/musicServiceApi";

const LOGIN = "LOGIN";
const REGISTRATION = "REGISTRATION";
const GET_PROFILE_INFO = "GET_PROFILE_INFO";
const LOGOUT = "LOGOUT";
const UPLOAD_HEADER_IMAGE = "UPLOAD_HEADER_IMAGE";
const USERS_SEARCH = "USERS_SEARCH";
const GET_PROFILE_INFO_ID = "GET_PROFILE_INFO_ID ";
const DOWNLOAD_AVATAR_AND_HEADER = "DOWNLOAD_AVATAR_AND_HEADER";

const initialState = {
  user: {
    id: "",
    email: "",
    username: "",
    name: "",
    surname: "",
    city: "",
    country: "",
    age: 0,
    gender: "",
    bio: "",
    avatar: "",
    headerImage: "",
    followersCount: 0,
    followingCount: 0,
    likesCount: 0,
    uploadedSongsCount: 0,
  },
  avatarBin: "",
  headerImageBin: "",
  usersSearch: [],
  anotherUser: {
    id: "",
    email: "",
    username: "",
    name: "",
    surname: "",
    city: "",
    country: "",
    age: 0,
    gender: "",
    bio: "",
    avatar: "",
  },
};

const userReducer = (state = initialState, action) => {
  let newState = { ...state };

  switch (action.type) {
    case LOGIN:
      if (action.token) {
        localStorage.setItem("token", action.token);
      }
      return newState;
    case REGISTRATION:
      if (action.token) {
        localStorage.setItem("token", action.token);
      }
      return newState;
    case GET_PROFILE_INFO:
      newState.user = action.profileInfo;
      newState.avatarBin = action.avatarBin;
      newState.headerImageBin = action.headerImageBin;
      return newState;
    case LOGOUT:
      localStorage.removeItem("token");
      newState.user = {
        user: {
          id: "",
          email: "",
          username: "",
          name: "",
          surname: "",
          city: "",
          country: "",
          age: 0,
          gender: "",
          bio: "",
          avatar: "",
        },
      };
      newState.avatarBin = "";
      newState.headerImageBin = "";
      return newState;
    case USERS_SEARCH:
      newState.usersSearch = action.result;
      return newState;
    case GET_PROFILE_INFO_ID:
      newState.anotherUser = action.data;
      return newState;
    case UPLOAD_HEADER_IMAGE:
      newState.user.headerImage = action.url;
      return newState;
    case DOWNLOAD_AVATAR_AND_HEADER:
      newState.avatarBin = action.avatarBin;
      newState.headerImageBin = action.headerBin;
      return newState;
    default:
      return newState;
  }
};

function loginActionCreator(token) {
  return { type: LOGIN, token: token };
}

function registrationActionCreator(token) {
  return { type: REGISTRATION, token: token };
}

function getProfileInfoActionCreator(data, avatarBin, headerImageBin) {
  return {
    type: GET_PROFILE_INFO,
    profileInfo: data,
    avatarBin: avatarBin,
    headerImageBin: headerImageBin,
  };
}

function downloadAvatarAndHeaderActionCreator(avatarBin, headerBin) {
  //console.log(avatarBin, headerBin);

  return {
    type: DOWNLOAD_AVATAR_AND_HEADER,
    avatarBin: avatarBin,
    headerBin: headerBin,
  };
}

function logoutActionCreator() {
  return { type: LOGOUT };
}

function searchUsersActionCreator(result) {
  return { type: USERS_SEARCH, result: result };
}

function getProfileInfoIDActionCreator(data) {
  return {
    type: GET_PROFILE_INFO_ID,
    data: data,
  };
}

export function logoutThunkCreator() {
  return (dispatch) => {
    musicServiceApi.user.logout().then(() => {
      dispatch(logoutActionCreator());
    });
  };
}

export function loginThunkCreator(data) {
  return (dispatch) => {
    musicServiceApi.user.login(data).then((data) => {
      dispatch(loginActionCreator(data.token));
      musicServiceApi.user.getProfileInfo().then((data) => {
        if (data.avatar) {
          musicServiceApi.files.downloadFile(data.avatar).then((avatarBin) => {
            if (data.headerImage) {
              musicServiceApi.files
                .downloadFile(data.headerImage)
                .then((headerImageBin) => {
                  dispatch(
                    getProfileInfoActionCreator(data, avatarBin, headerImageBin)
                  );
                });
            } else {
              dispatch(getProfileInfoActionCreator(data, avatarBin, null));
            }
          });
        } else if (data.headerImage) {
          musicServiceApi.files
            .downloadFile(data.headerImage)
            .then((headerImageBin) => {
              dispatch(getProfileInfoActionCreator(data, null, headerImageBin));
            });
        } else {
          dispatch(getProfileInfoActionCreator(data, null, null));
        }
      });
    });
  };
}

export function registrationThunkCreator(data) {
  return (dispatch) => {
    musicServiceApi.user.registration(data).then((data) => {
      dispatch(registrationActionCreator(data.token));
      dispatch(getProfileInfoActionCreator(data, null, null));
    });
  };
}

export function getProfileInfoThunkCreator() {
  return (dispatch) => {
    musicServiceApi.user.getProfileInfo().then((data) => {
      if (data.avatar) {
        musicServiceApi.files.downloadFile(data.avatar).then((avatarBin) => {
          if (data.headerImage) {
            musicServiceApi.files
              .downloadFile(data.headerImage)
              .then((headerImageBin) => {
                dispatch(
                  getProfileInfoActionCreator(data, avatarBin, headerImageBin)
                );
              });
          } else {
            dispatch(getProfileInfoActionCreator(data, avatarBin, null));
          }
        });
      } else if (data.headerImage) {
        musicServiceApi.files
          .downloadFile(data.headerImage)
          .then((headerImageBin) => {
            dispatch(getProfileInfoActionCreator(data, null, headerImageBin));
          });
      } else {
        dispatch(getProfileInfoActionCreator(data, null, null));
      }
    });
  };
}

export function downloadAvatarAndHeaderThunkCreator(avatarId, headerId) {
  //console.log(avatarId, headerId);
  return (dispatch) => {
    musicServiceApi.files.downloadFile(headerId).then((headerBin) => {
      //console.log(headerBin);
      musicServiceApi.files.downloadFile(avatarId).then((avatarBin) => {
        //console.log(avatarBin);
        dispatch(downloadAvatarAndHeaderActionCreator(avatarBin, headerBin));
      });
    });
  };
}

export function editProfileThunkCreator(data, avatarFile) {
  return (dispatch) => {
    if (avatarFile) {
      musicServiceApi.files.uploadFile(avatarFile).then((avatarId) => {
        data["avatar"] = avatarId;
        musicServiceApi.user.changeProfileInfo(data).then(() => {
          musicServiceApi.user.getProfileInfo().then((data) => {
            if (data.avatar) {
              musicServiceApi.files
                .downloadFile(data.avatar)
                .then((avatarBin) => {
                  if (data.headerImage) {
                    musicServiceApi.files
                      .downloadFile(data.headerImage)
                      .then((headerImageBin) => {
                        dispatch(
                          getProfileInfoActionCreator(
                            data,
                            avatarBin,
                            headerImageBin
                          )
                        );
                      });
                  } else {
                    dispatch(
                      getProfileInfoActionCreator(data, avatarBin, null)
                    );
                  }
                });
            } else if (data.headerImage) {
              musicServiceApi.files
                .downloadFile(data.headerImage)
                .then((headerImageBin) => {
                  dispatch(
                    getProfileInfoActionCreator(data, null, headerImageBin)
                  );
                });
            } else {
              dispatch(getProfileInfoActionCreator(data, null, null));
            }
          });
        });
      });
    } else
      musicServiceApi.user.changeProfileInfo(data).then(() => {
        musicServiceApi.user.getProfileInfo().then((data) => {
          if (data.avatar) {
            musicServiceApi.files
              .downloadFile(data.avatar)
              .then((avatarBin) => {
                if (data.headerImage) {
                  musicServiceApi.files
                    .downloadFile(data.headerImage)
                    .then((headerImageBin) => {
                      dispatch(
                        getProfileInfoActionCreator(
                          data,
                          avatarBin,
                          headerImageBin
                        )
                      );
                    });
                }
              });
          } else if (data.headerImage) {
            musicServiceApi.files
              .downloadFile(data.headerImage)
              .then((headerImageBin) => {
                dispatch(
                  getProfileInfoActionCreator(data, null, headerImageBin)
                );
              });
          } else {
            dispatch(getProfileInfoActionCreator(data, null, null));
          }
        });
      });
  };
}

export function uploadHeaderImageThunkCreator(image) {
  return (dispatch) => {
    musicServiceApi.user.uploadHeaderImage(image).then((data) => {
      musicServiceApi.user.getProfileInfo().then((data) => {
        if (data.avatar) {
          musicServiceApi.files.downloadFile(data.avatar).then((avatarBin) => {
            if (data.headerImage) {
              musicServiceApi.files
                .downloadFile(data.headerImage)
                .then((headerImageBin) => {
                  dispatch(
                    getProfileInfoActionCreator(data, avatarBin, headerImageBin)
                  );
                });
            } else {
              dispatch(getProfileInfoActionCreator(data, avatarBin, null));
            }
          });
        } else if (data.headerImage) {
          musicServiceApi.files
            .downloadFile(data.headerImage)
            .then((headerImageBin) => {
              dispatch(getProfileInfoActionCreator(data, null, headerImageBin));
            });
        } else {
          dispatch(getProfileInfoActionCreator(data, null, null));
        }
      });
    });
  };
}

export function searchUsersThunkCreator(searchString) {
  return (dispatch) => {
    musicServiceApi.user.usersSearch(searchString).then((data) => {
      for (let i = 0; i < data.length; i++) {
        const user = data[i];
        if (data[i].avatarId) {
          musicServiceApi.files
            .downloadFile(data[i].avatarId)
            .then((avatar) => {
              data[i].avatar = avatar;
              dispatch(searchUsersActionCreator(data));
            });
        } else dispatch(searchUsersActionCreator(data));
      }
      dispatch(searchUsersActionCreator(data));
    });
  };
}

export function getProfileInfoIdThunkCreator(id) {
  return (dispatch) => {
    musicServiceApi.user.getProfileInfoID(id).then((data) => {
      if (data.avatar) {
        musicServiceApi.files.downloadFile(data.avatar).then((avatarBin) => {
          data.avatarFile = avatarBin;
          if (data.headerImage) {
            musicServiceApi.files
              .downloadFile(data.headerImage)
              .then((headerImageBin) => {
                data.headerImageFile = headerImageBin;
                dispatch(getProfileInfoIDActionCreator(data));
              });
          } else {
            dispatch(getProfileInfoIDActionCreator(data));
          }
        });
      } else if (data.headerImage) {
        musicServiceApi.files
          .downloadFile(data.headerImage)
          .then((headerImageBin) => {
            data.headerImageFile = headerImageBin;

            dispatch(getProfileInfoIDActionCreator(data));
          });
      } else {
        dispatch(getProfileInfoIDActionCreator(data));
      }
      //
    });
  };
}

export default userReducer;
