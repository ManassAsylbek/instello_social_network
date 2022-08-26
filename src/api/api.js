import * as axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "ac163d2e-7294-47c1-9a62-aa36536f7b68"
    }
})

export const getUsersApi = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    }
}
export const getAuth = () => {
    return instance.get(`auth/me`)
        .then(response => {
            return response.data
        })
}

export const getProfile = (userId) => {
    return instance.get(`profile/${userId}`)
        .then(response => {
            return response.data
        })
}

export const getUnFollow = (userId) => {
    return instance.delete(`follow/${userId}`)
        .then(response => {
            return response.data
        })
}

export const getFollow = (userId) => {
    return instance.post(`follow/${userId}`)
        .then(response => {
            return response.data
        })
}


