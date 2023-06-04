import { musicServiceApi } from "../../api/musicServiceApi";

const LOGIN = "LOGIN";
const REGISTRATION = "REGISTRATION";

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

export function loginThunkCreator(data) {
  return (dispatch) => {
    musicServiceApi.user.login(data).then((data) => {
      dispatch(loginActionCreator(data.token));
    })
  };
}

export function registrationThunkCreator(data) {
  return (dispatch) => {
    musicServiceApi.user.registration(data).then((data) => {
      dispatch(registrationActionCreator(data.token));
    })
  };
}

export default userReducer;
