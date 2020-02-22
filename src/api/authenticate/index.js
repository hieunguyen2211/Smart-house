import axios from 'axios';
import { API_URL } from '../config';

const apiLoginURL = API_URL + '/auth/login';

export const login = body => {
    return axios.post(apiLoginURL, body);
};
