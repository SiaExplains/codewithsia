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

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    patch: axios.patch,
    config: config,
    tokenConfig: configWithToken
};
