import * as types from '../constants/ActionType'

export const toggleStatus = () => {
    return {
        type : types.TOGGLE_STATUS
    }
}

export const toggleSort = ({sortBy,value}) => {
    return {
        type : types.TOGGLE_SORT,
        sortBy,
        value 
    }
}

export const addUser = (users) => {
    return {
        type : types.ADD_USER,
        users
    }
}