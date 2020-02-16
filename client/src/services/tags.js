import http from './http-services';

const API_TAGS = `${process.env.REACT_APP_API_ENDPOINT}/tags/`;

export function getAllTags() {
    return http.get(API_TAGS, http.config);
}

export function getTag(id) {
    return http.get(`${API_TAGS}${id}`, http.config);
}

export function deleteTag(id) {
    return http.delete(`${API_TAGS}${id}`, http.tokenConfig());
}

export function addTag(data) {
    return http.post(`${API_TAGS}`, data, http.tokenConfig());
}

export function updateTag(data) {
    return http.put(`${API_TAGS}`, data, http.config);
}
