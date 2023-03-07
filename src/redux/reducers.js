import { CoffeeMakerSharp } from '@mui/icons-material'
import { combineReducers } from 'redux'

const user = (state = null) => state

const businesses = (state = [], action) => {
    switch(action.type) {
        case 'ADD_BUSINESS':
            return [ ...state, action.value ]
        case 'REMOVE_BUSINESS':
            const businesses = [ ...state ]
            businesses.splice(action.value, 1)
            return 
        default:
            return state
    }
}

// const makes = (state = [], action) => {
//     switch(action.type) {
//         case 'FETCH_MAKES':
//             return action.value
//             break;
//         case 'DELETE_MAKE':
//             const makes = [...state]
//             makes.splice(action.value, 1)
//             return makes
//         default:
//             return state
//     }
// }

export default combineReducers({ 
    user, 
    businesses
    // , makes 
})