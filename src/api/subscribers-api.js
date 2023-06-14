import instance from "./baseUrl";
const url = "api/subscribers";

function getSubscribers(userId) {
    return instance.get(`${url}/${userId}`)
}

export const subscribersApi = {
    getSubscribers: getSubscribers
}