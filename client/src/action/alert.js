import {v4 as uuidv4} from 'uuid';

import { DISPLAY_ALERT, REMOVE_ALERT } from '../reducers/type';

export const setAlert = (msg, alertType, timeout = 5000) => dispatch =>{
    const id = uuidv4();

    try {
        dispatch({
            type: DISPLAY_ALERT,
            payload: {msg, alertType, id}
        })

        setTimeout(() => {
            dispatch({
                type: REMOVE_ALERT,
                payload: id
            })
        }, timeout)
    } catch (error) {
        console.log(error);
    }
}