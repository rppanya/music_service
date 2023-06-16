import instance from "./baseUrl";
const url = "api/songs";

function geetSongsInfo(id) {
  return instance.get(`${url}/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function editSongsData(id, data) {
  return instance.put(`${url}/${id}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function deleteSong(id) {
  return instance.delete(`${url}/${id}`);
}

function searchSongs(searchString) {
  return instance.post(`${url}/search`, searchString, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function addSongsInfo(data) {
  return instance.post(`${url}/add`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function getUploadedSongs(userId) {
    return instance.get(`${url}/${userId}/uploaded-songs`)
}


export const songApi = {
    geetSongsInfo: geetSongsInfo,
    editSongsData: editSongsData,
    deleteSong: deleteSong,
    searchSongs: searchSongs,
    addSongsInfo: addSongsInfo,
    getUploadedSongs: getUploadedSongs
};
