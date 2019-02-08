
import axios from 'axios';
import {api} from '../environment/AppSetting';

export const usersService = {
    getAll: (params) => {
        return axios.get(api.url + 'users', params)
       },
    getUser: (name) => {
        return axios.get(api.githubUrl + 'users/' + name)
    }
} 