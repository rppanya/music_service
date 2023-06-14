import filesApi from "./files-api";
import { followingApi } from "./following-api";
import { likesApi } from "./likes-api";
import { notificationsApi } from "./notifications-api";
import { songApi } from "./songs-api";
import { subscribersApi } from "./subscribers-api";
import { userApi } from "./user-api";

export const musicServiceApi = {
  user: userApi, 
  song: songApi, 
  notification: notificationsApi,
  likes: likesApi,
  following: followingApi,
  files: filesApi,
  subscribers: subscribersApi
};
