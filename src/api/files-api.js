import instance from "./baseUrl";
const url = "api/files";

function uploadFile(file) {
  return instance.post(`${url}/upload`, file, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

function downloadFile(id) {
  return instance.get(`${url}/download/${id}`, {
    headers: {
      "Content-Type": "application/octet-stream",
    },
  });
}


export const filesApi = {
    uploadFile: uploadFile,
    downloadFile: downloadFile
};
