import http from './http-services';

const API_FETCH_ALL_ITEMS = `/file-manager/`;
const API_CREATE_DIRECTORY = `/file-manager/create-dir`;
export const API_UPLOAD_AN_ITEM = `${process.env.REACT_APP_API_ENDPOINT}/file-manager/upload`;

export function fetchAllItems(path) {
    return http.get(`${API_FETCH_ALL_ITEMS}${path}`, http.tokenConfig());
}

export function createDirectory(data) {
    return http.post(API_CREATE_DIRECTORY, data, http.tokenConfig());
}
