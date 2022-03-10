import * as axios from 'axios';
import { follow } from '../redux/users_reducer';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "4528cbd4-891e-4279-b216-0c868f4250be"
    }
});


export const UserAPI = {
    getUsers(pageSize = 10, currentPage = 1) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
        .then(response => response.data)
    },

    follow(id) {
        return instance.post(`follow/${id}`)
    },

    unfollow(id) {
        return instance.delete(`follow/${id}`)
    },
    setProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    }
}

export const AuthAPI = {
    getData() {
        return instance.get('auth/me').then(response => response.data)
    }
}