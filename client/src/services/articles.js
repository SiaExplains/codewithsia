import http from './http-services';

const API_ARTICLES = `${process.env.REACT_APP_API_ENDPOINT}/articles/`;

export function getAllArticles() {
    return http.get(API_ARTICLES, http.config);
}

export function getAnArticle(id) {
    return http.get(`${API_ARTICLES}${id}`, http.config);
}

export function deleteAnArticle(id) {
    return http.delete(`${API_ARTICLES}${id}`, http.tokenConfig());
}

export function addAnArticle(data) {
    return http.post(`${API_ARTICLES}`, data, http.tokenConfig());
}

export function updateAnArticle(data) {
    return http.put(`${API_ARTICLES}`, data, http.tokenConfig());
}
