import axios from 'axios';

axios.defaults.baseURL = 'http://62.109.23.105:8888/infotouch-device/api';
axios.defaults.headers = {
    'X-Requested-With': 'XMLHttpRequest'
};

axios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});