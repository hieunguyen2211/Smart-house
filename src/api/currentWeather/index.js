import axios from 'axios';
import { WEATHER_API_URL } from '../config';

export const getWeather = () => {
    return axios.get(WEATHER_API_URL);
};
