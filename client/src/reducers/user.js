import { GET_USER, USER_ERROR } from './type';



const INITIAL_STATE = {
    name: '',
    email: '',
    age: 0,
    gender: '',
    loading: true,
    alert: ''
}
// eslint-disable-next-line
export default (state = INITIAL_STATE, action) => {
    const {type, payload} = action

    
    switch(type){
        case GET_USER:
            return { 
                ...state,
                user: payload,
                loading: false
            };
        case USER_ERROR:
            return {
                ...state,
                alert: payload,
                loading: false
            }
        default:
            return state;

    }
}