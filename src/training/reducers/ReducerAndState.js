import Status from './Status'
import Sort from './Sort'
import AddUser from './AddUser'
import { combineReducers } from 'redux'

const reducer = combineReducers({
    Status, 
    Sort,
    AddUser
})

export default reducer;