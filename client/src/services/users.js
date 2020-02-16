import http from './http-services';

const API_USERS = `${process.env.REACT_APP_API_ENDPOINT}/users/`;

// export function getAllTags() {
//     return http.get(API_TAGS, http.config);
// }

// export function getTag(id) {
//     return http.get(`${API_TAGS}${id}`, http.config);
// }

// export function deleteTag(id) {
//     return http.delete(`${API_TAGS}${id}`, http.config);
// }

export function addUser(data) {
    return http.post(`${API_USERS}register`, data, http.config);
}

export function loginUser(data) {
    return http.post(`${API_USERS}login`, data, http.config);
}

// export function updateTag(data) {
//     return http.put(`${API_TAGS}`, data, http.config);
// }
