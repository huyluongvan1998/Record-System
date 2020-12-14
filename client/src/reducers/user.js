import { GET_USER, USER_ERROR, TOGGLE_SHOW, ADD_USER
    ,GET_USER_BY_ID, UPDATE_USER
} from './type';



const INITIAL_STATE = {
    user: null,
    users: [],
    loading: true,
    alert: [],
    isShow: false
}
// eslint-disable-next-line
export default (state = INITIAL_STATE, action) => {
    const {type, payload} = action

    
    switch(type){
        case GET_USER:
            return { 
                ...state,
                users: payload,
                loading: false
            };
        case GET_USER_BY_ID:
            return {
                ...state,
                user: payload,
                loading: false
            }
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, payload],
                loading: false
            }
        case UPDATE_USER: 
            return {
                ...state,
                users: state.users.map(user => user._id === payload.id ? {...user, payload} : user)
            }
        case USER_ERROR:
            return {
                ...state,
                alert: payload,
                isShow: false,
                loading: false
            };
        case TOGGLE_SHOW:
            return {
                ...state,
                isShow: payload,
        };
        default:
            return state;

    }
}