import * as axios from "axios";


const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
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
    console.warn("API::::: wrong location pls replace it")
    return profileAPI.getUserId(userId)

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
  getAuth(){
    return instance.get('auth/me')
      .then(response => {return response.data})
  },
  login(email, password, rememberMe = false){
    return instance.post('auth/login', {email, password, rememberMe});
  },
  logout(){
    return instance.delete('auth/login');
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
  },
  updateStatus(status) {
    return instance.put(`profile/status`, {status: status})
  },
};
