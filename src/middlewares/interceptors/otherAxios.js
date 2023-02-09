import axios from 'axios';
const otherAxios = axios.create({
    baseURL: 'https://ssctestlaravelcode_be.dev/api/'
})
otherAxios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('ssctestOauthAccessToken');
otherAxios.defaults.headers.common['Accept'] = 'application/json';

export default otherAxios;