const initialState = false


const reducer = (state = initialState , action) => {
    switch (action.type) {
        case "TOGGLE_STATUS":
            return state = !state 
        default:
            return state;
    }   
}

export default reducer;