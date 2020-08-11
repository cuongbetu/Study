const initialState = {
        sortBy : 'name',
        value : 1
}


const reducer = (state = initialState , action) => {
    switch (action.type) {
        case "TOGGLE_SORT":
            return state = {
                    sortBy : action.sortBy,
                    value : action.value
            }
        default:
            return state;
    }   
}

export default reducer;