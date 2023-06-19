import instance from "./baseUrl";
const url = "api/likes";

function addLike(songId) {
  return instance.post(
    `${url}/add/${songId}`,
    {},
    {
      headers: {
        "Content-Type": "applicatin/json",
      },
    }
  );
}

function getLikedSongs(userId) {
    return instance.get(`${url}/${userId}`)
}

function deleteLike(songId) {
    return instance.delete(`${url}/remove-like/${songId}`)
}

export const likesApi = {
    addLike: addLike,
    getLikedSongs: getLikedSongs, 
    deleteLike: deleteLike
};
