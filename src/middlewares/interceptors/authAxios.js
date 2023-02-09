import axios from 'axios';
const authAxios = axios.create({
    baseURL: 'https://ssctestlaravelcode_be.dev/api/'
})

export default authAxios;