
import axios from 'axios';
import {api} from '../environment/AppSetting';

export const authService = {
    login: (email, password) => {
        return axios.post(api.url + 'login', { email, password })
       }
} 