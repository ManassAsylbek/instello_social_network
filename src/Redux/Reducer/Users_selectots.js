

export const getUsers = (state) =>{
    return  state.explorePage.users
}

export const getInterestData = (state) =>{
    return  state.explorePage.interestData
}

export const getusersPhotoData = (state) =>{
    return  state.explorePage.usersPhotoData
}

export const getPageSize = (state) =>{
    return  state.explorePage.pageSize
}

export const getTotalUsersCount = (state) =>{
    return state.explorePage.totalUsersCount
}
export const getCurrentPage = (state) =>{
    return state.explorePage.currentPage
}
export const getLoadPage = (state) =>{
    return state.explorePage.loadPage
}
export const getIsFetching = (state) =>{
    return state.explorePage.isFetching
}
export const getFollowingInProgress = (state) =>{
    return state.explorePage.followingInProgress
}
