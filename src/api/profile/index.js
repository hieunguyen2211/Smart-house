import axios from 'axios';
import { API_URL } from '../config';

const profile_api_url = API_URL + '/me';

export const getProfile = () => {
    return axios.get(profile_api_url, {
        headers: { Authorization: localStorage.getItem('access_token') }
    });
};
