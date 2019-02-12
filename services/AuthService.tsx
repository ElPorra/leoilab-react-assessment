
import axios from 'axios';
import {api} from '../environment/AppSetting';

export const authService = {
    login: (email: string, password: string) => {
        return axios.post(api.url + 'login', { email, password })
       }
} 