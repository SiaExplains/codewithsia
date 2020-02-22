import http from './http-services';

const API_CATEGORIES = `${process.env.REACT_APP_API_ENDPOINT}/categories/`;

export function getAllCategories() {
    return http.get(API_CATEGORIES, http.config);
}

export function getCategory(id) {
    return http.get(`${API_CATEGORIES}${id}`, http.config);
}

export function deleteCategory(id) {
    return http.delete(`${API_CATEGORIES}${id}`, http.tokenConfig());
}

export function addCategory(data) {
    return http.post(`${API_CATEGORIES}`, data, http.tokenConfig());
}

export function updateCategory(data) {
    return http.put(`${API_CATEGORIES}`, data, http.config);
}
