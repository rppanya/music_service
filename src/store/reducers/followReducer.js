import { musicServiceApi } from "../../api/musicServiceApi";
import {
  getProfileInfoIDActionCreator,
  getProfileInfoIdThunkCreator,
} from "./userReducer";
const GET_FOLLOWING = "GET_FOLLOWING";
const GET_SUBSCRIBERS = "GET_SUBSCRIBERS";

const initialState = {
  following: [],
  subscribers: [],
};

const followReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case GET_FOLLOWING:
      newState.following = action.following;
      return newState;
    case GET_SUBSCRIBERS:
      newState.subscribers = action.subscribers;
      return newState;

    default:
      return newState;
  }
};

function getFollowingActionCreator(following) {
  return { type: GET_FOLLOWING, following: following };
}

function getSubscribersActionCreator(subscribers) {
  return { type: GET_SUBSCRIBERS, subscribers: subscribers };
}

export function getFollowingThunkCreator(userId) {
  console.log("following" + userId);
  return (dispatch) => {
    musicServiceApi.following.getFollowing(userId).then((data) => {
      for (let i = 0; i < data.length; i++) {
        const user = data[i];
        if (data[i].avatarId) {
          musicServiceApi.files
            .downloadFile(data[i].avatarId)
            .then((avatar) => {
              data[i].avatar = avatar;
              dispatch(getFollowingActionCreator(data));
            });
        } else dispatch(getFollowingActionCreator(data));
      }
      dispatch(getFollowingActionCreator(data));

      // if (data.avatarId) {
      //   musicServiceApi.files.downloadFile(data.avatarId).then((avatar) => {
      //     data.avatar = avatar;
      //     dispatch(getFollowingActionCreator(data));
      //   });
      // } else dispatch(getFollowingActionCreator(data));
    });
  };
}

export function getSubscribersThunkCreator(userId) {
  console.log("subscribers" + userId);

  return (dispatch) => {
    musicServiceApi.subscribers.getSubscribers(userId).then((data) => {
      for (let i = 0; i < data.length; i++) {
        const user = data[i];
        if (data[i].avatarId) {
          musicServiceApi.files
            .downloadFile(data[i].avatarId)
            .then((avatar) => {
              data[i].avatar = avatar;
              dispatch(getSubscribersActionCreator(data));
            });
        } else dispatch(getSubscribersActionCreator(data));
      }
      dispatch(getSubscribersActionCreator(data));
    });
  };
}

export function followThunkCreator(userId) {
  return (dispatch) => {
    musicServiceApi.following.follow(userId).then(() => {
      musicServiceApi.subscribers
        .getSubscribers(userId)
        .then((data) => {
          if (data.avatarId) {
            musicServiceApi.files.downloadFile(data.avatarId).then((avatar) => {
              data.avatar = avatar;
              dispatch(getSubscribersActionCreator(data));
            });
          } else dispatch(getSubscribersActionCreator(data));
        })
        .then(
          musicServiceApi.following.getFollowing(userId).then((data) => {
            if (data.avatarId) {
              musicServiceApi.files
                .downloadFile(data.avatarId)
                .then((avatar) => {
                  data.avatar = avatar;
                  dispatch(getFollowingActionCreator(data));
                });
            } else dispatch(getFollowingActionCreator(data));
          })
        );
    });
  };
}

export function unfollowThunkCreator(userId) {
  return (dispatch) => {
    musicServiceApi.following.unfollow(userId).then(() => {
      musicServiceApi.subscribers
        .getSubscribers(userId)
        .then((data) => {
          if (data.avatarId) {
            musicServiceApi.files.downloadFile(data.avatarId).then((avatar) => {
              data.avatar = avatar;
              dispatch(getSubscribersActionCreator(data));
            });
          } else dispatch(getSubscribersActionCreator(data));
        })
        .then(
          musicServiceApi.following.getFollowing(userId).then((data) => {
            if (data.avatarId) {
              musicServiceApi.files
                .downloadFile(data.avatarId)
                .then((avatar) => {
                  data.avatar = avatar;
                  dispatch(getFollowingActionCreator(data));
                });
            } else dispatch(getFollowingActionCreator(data));
          })
        );
      // .then(
      //   getProfileInfoIdThunkCreator(userId)
      // )
    });
  };
}

export default followReducer;
