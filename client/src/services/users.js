import http from './http-services';

const API_USERS = `/users/`;

export function addUser(data) {
    return http.post(`${API_USERS}register`, data, http.config);
}

export function loginUser(data) {
    return http.post(`${API_USERS}login`, data, http.config);
}
