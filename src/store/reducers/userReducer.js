import { musicServiceApi } from "../../api/musicServiceApi";

const LOGIN = "LOGIN";
const REGISTRATION = "REGISTRATION";
const GET_PROFILE_INFO = "GET_PROFILE_INFO";
const LOGOUT = "LOGOUT";

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

export default userReducer;
