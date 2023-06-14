import instance from "./baseUrl";
const url = "api/following";

function unfollow(userId) {
  return instance.post(`${url}/unfollow/${userId}`);
}

function follow(userId) {
  return instance.post(`${url}/follow/${userId}`);
}

function getFollowing(userId) {
  return instance.get(`${url}/${userId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export const followingApi = {
    unfollow: unfollow,
    follow: follow,
    getFollowing: getFollowing
};
