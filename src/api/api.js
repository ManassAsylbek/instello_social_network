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
    },
    getUnFollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getFollow (userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },

    getProfile (userId) {
        return getProfileApi.getProfile(userId)
    }

}

export const getProfileApi = {

    getProfile (userId) {
        return instance.get(`profile/${userId}`)
        /*    .then(response => {
                return response.data
            })*/
    },

    getStatus (userId) {
        return instance.get(`profile/status/${userId}`)
          /*  .then(response => {
                return response.data
            })*/
    },
    getUpdateStatus (status) {
        return instance.put(`profile/status`, {status: status} )
           /* .then(response => {
                return response.data
            })*/
    },
    getSavePhoto (photoFile) {
        const formData=new FormData()
        formData.append("image",photoFile)
        return instance.put(`profile/photo`, formData,{
            headers:{
                "Content-Type":"multipart/form-data"
            }
        } )

    }

}

export const getAuthApi = {
    getAuth () {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    getLogin (email, password, rememberMe = false) {
        return instance.post(`auth/login`,{email, password, rememberMe})
    },
    getLogOut () {
        return instance.delete(`auth/login`)
    },
}



