import axios from 'axios';
import { toast } from 'react-toastify';

const config = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
};

const configWithToken = () => {
    return {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem('token')
        }
    };
};

axios.interceptors.request.use(null, error => {
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500;
    if (!expectedError) {
        console.log('Error in calling service/api: ', error);
        toast.error('Error Happened ');
    }

    return Promise.reject(error);
});

axios.interceptors.request.use(
    function(config) {
        // spinning start to show
        // UPDATE: Add this code to show global loading indicator
        document.body.classList.add('loading-indicator');

        const token = window.localStorage.token;
        if (token) {
            config.headers.Authorization = `token ${token}`;
        }
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    function(response) {
        // spinning hide
        // UPDATE: Add this code to hide global loading indicator
        document.body.classList.remove('loading-indicator');

        return response;
    },
    function(error) {
        return Promise.reject(error);
    }
);

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    patch: axios.patch,
    config: config,
    tokenConfig: configWithToken
};
