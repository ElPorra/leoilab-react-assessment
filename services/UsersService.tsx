import axios from "axios";
import { api } from "../environment/AppSetting";

export const usersService = {
  getUser: (name: string) => {
    return axios.get(api.githubUrl + "users/" + name);
  },
  getRepos: (name: string) => {
    return axios.get(api.githubUrl + "users/" + name + "/repos");
  },
  getFollowers: (name: string) => {
    return axios.get(api.githubUrl + "users/" + name + "/followers");
  }
};
