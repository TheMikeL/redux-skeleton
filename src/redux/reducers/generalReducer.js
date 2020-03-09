import {
    SET_MAIN_NAME,
} from '../actionTypes'

const INITIAL_DATA = {name: "Lam"}

const generalReducer = (state = INITIAL_DATA, action) => {
    switch (action.type) {
        case SET_MAIN_NAME:
            return {
                ...state,
                loading: false,
                name: action.payload
            }
        default:
            return state
    }
}
export default generalReducer;
