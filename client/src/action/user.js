import { GET_USER, USER_ERROR } from '../reducers/type';
import axios from 'axios';

export const getUser = () => async dispatch => {
    try {
        
        const res = await axios.get('/api/users');

        dispatch({
            type: GET_USER,
            payload: res.data
        })
        
    } catch (error) {
        console.error(error);
        dispatch({
            type: USER_ERROR,
            payload: {msg: error.response.statusText, status: error.response.status}
        })
    }
}