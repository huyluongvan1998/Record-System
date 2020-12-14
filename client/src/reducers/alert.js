import { DISPLAY_ALERT, REMOVE_ALERT } from './type';



const INITIAL_STATE = {
    errors: []
};
// eslint-disable-next-line
export default (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type) {
        case DISPLAY_ALERT: 
            return {
                ...state,
                errors: [...state.errors, payload]
            }
        case REMOVE_ALERT:
            return {
                ...state,
                errors: state.errors.filter(error => error.id !== payload)
            }
        default:
            return state;
    }
}