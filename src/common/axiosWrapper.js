import axios from 'axios';

let axiosProtectedInstance;

// Axios Wrapper Class
class AxiosWrapper {

    constructor() {
        this.axios = axios
        this.axios.defaults.headers.post['crossDomain'] = true;
        this.axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
        this.axios.defaults.headers.post['Content-Type'] = 'application/json';
        this.axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    }

}

export function getAxiosObject() {
    axiosProtectedInstance = axiosProtectedInstance || new AxiosWrapper();
    return axiosProtectedInstance
}