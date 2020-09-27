const initialState = {
    apiData: []
}

// Setting up our root reducer.
const reducer = (state = initialState, action) => {
    switch (action.type) {
        // Action case for our getData action creator.
        case "GET_DATA":
            console.log(action)
            return {
                ...state,
                apiData: action.data
            }
        default:
            return state
    }
}

export default reducer


// // Example of how to use combineReducers
// import { combineReducers } from 'react-redux'
// export const root = combineReducers({ banana: reducer })