import axios from 'axios';
import $axios, { API_URL } from './index';

const $api = axios.create({
    baseURL: `${API_URL}/api`,
    withCredentials: true,
})

export default $api;