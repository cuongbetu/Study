import * as types from '../constant/ActionTypes';

var initialState = {
    name : '',
    status : -1,
};

var myReducer = (state = initialState,action) => {
    switch (action.type) {
        case types.FILTER_TASK:
            action.filterValue.name = action.filterValue.name.toLowerCase();
            action.filterValue.status = parseInt(action.filterValue.status);
            return action.filterValue;
        default:
            return state;
    }
};

export default myReducer