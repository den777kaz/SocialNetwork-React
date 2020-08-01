import * as axios from "axios";


const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  data: {},
  headers: {"API-KEY": "5d79fda8-d38c-4d80-894f-408b2f9d122e"}
});


export const usersAPI = {
  // GET
  getUsers(currentPage, pageSize){
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response=> {
        return response.data;
      })
  },
  getUserId(userId) {
    return instance.get(`profile/${userId}`)
      .then(response => {return response.data})
  },
  getAuth(){
    return instance.get('auth/me')
      .then(response => {return response.data})
  },

  //POST
  followUser(userId){
    return instance.post(`follow/${userId}`)
      .then(response => {return response.data})
  },

  //DELETE
  unFollowUser(userId){
    return instance.delete(`follow/${userId}`)
      .then(response => {return response.data})
  },
};


export const profileAPI = {
  getUserId(userId) {
    return instance.get(`profile/${userId}`)
      .then(response => {return response.data})
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
      .then(response => {return response.data})
  }
};
