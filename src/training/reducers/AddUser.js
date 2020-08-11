const initialState = {
      user : []
}


const reducer = (state = initialState , action) => {
    switch (action.type) {
        case "ADD_USER":
            return state = { user : [...action.users]}
        default:
            return state;
    }   
}

export default reducer;