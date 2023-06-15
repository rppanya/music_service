import { musicServiceApi } from "../../api/musicServiceApi";

const LOGIN = "LOGIN";
const REGISTRATION = "REGISTRATION";
const GET_PROFILE_INFO = "GET_PROFILE_INFO";
const LOGOUT = "LOGOUT";
//const UPLOAD_HEADER_IMAGE = "UPLOAD_HEADER_IMAGE";
const USERS_SEARCH = "USERS_SEARCH";
const GET_PROFILE_INFO_ID = "GET_PROFILE_INFO_ID ";

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
  },
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

function getProfileInfoActionCreator(data) {
  return { type: GET_PROFILE_INFO, profileInfo: data };
}

function logoutActionCreator() {
  return { type: LOGOUT };
}

function searchUsersActionCreator(result) {
  return { type: USERS_SEARCH, result: result };
}

function getProfileInfoIDActionCreator(data) {
  return {type: GET_PROFILE_INFO_ID, data: data}
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
      console.log(data);
      dispatch(loginActionCreator(data.token));
    });
  };
}

export function registrationThunkCreator(data) {
  return (dispatch) => {
    musicServiceApi.user.registration(data).then((data) => {
      dispatch(registrationActionCreator(data.token));
    });
  };
}

export function getProfileInfoThunkCreator() {
  return (dispatch) => {
    musicServiceApi.user.getProfileInfo().then((data) => {
      dispatch(getProfileInfoActionCreator(data));
    });
  };
}

export function editProfileThunkCreator(data) {
  return (dispatch) => {
    musicServiceApi.user.changeProfileInfo(data).then(() => {
      musicServiceApi.user.getProfileInfo().then((data) => {
        dispatch(getProfileInfoActionCreator(data));
      });
    });
  };
}

export function uploadHeaderImageThunkCreator(image) {
  return (dispatch) => {
    musicServiceApi.user.uploadHeaderImage(image).then(() => {
      musicServiceApi.user.getProfileInfo().then((data) => {
        dispatch(getProfileInfoActionCreator(data));
      });
    });
  };
}

export function searchUsersThunkCreator(searchString) {
  return (dispatch) => {
    musicServiceApi.user.usersSearch(searchString).then((data) => {
      dispatch(searchUsersActionCreator(data));
    });
  };
}

export function getProfileInfoIdThunkCreator(id) {
  return (dispatch) => {
    musicServiceApi.user.getProfileInfoID(id).then((data) => {
      dispatch(getProfileInfoIDActionCreator(data))
    })
  };
}

export default userReducer;
