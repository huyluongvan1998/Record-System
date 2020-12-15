import {
    GET_USER, USER_ERROR, ADD_USER, TOGGLE_SHOW,
    GET_USER_BY_ID, UPDATE_USER, DELETE_USER
}
from  '../reducers/type';
import axios from 'axios';
import { setAlert } from "./alert";

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

//Add user
export const addUser = (formData) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        console.log(formData);
        const body = JSON.stringify(formData);

        const res = await axios.post('/api/users', body, config);

        dispatch({
            type: ADD_USER,
            payload: res.data
        });
        dispatch(setAlert('Add User Successfully', 'success'))
    } catch (error) {
        const errors = error.response.data.errors;

        errors.map(error => dispatch(setAlert(error.msg, 'danger')))

        dispatch({
            type: USER_ERROR,
            payload: {msg: error.response.statusText, status: error.response.status}
        })
        console.error(error);
    }
}

//Update user
export const updateUser = (formData, id) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        console.log(formData);
        const body = JSON.stringify(formData);

        const res = await axios.put(`/api/users/${id}`, body, config);

        dispatch({
            type: UPDATE_USER,
            payload: res.data
        });
        dispatch(setAlert('Update user Successfully', 'success'))
    } catch (error) {
        const errors = error.response.data.errors;
        if(errors)  errors.map(error => dispatch(setAlert(error.msg, 'danger')));

        dispatch({
            type: USER_ERROR,
            payload: {msg: error.response.statusText, status: error.response.status}
        })
    }
}


//delete User
export const deleteUser = (id) => async dispatch => {
    try {
        const res = await axios.delete(`/api/users/${id}`);
        if(!res){
            return dispatch(setAlert('User not Found', 'danger'));
        }

        dispatch({
            type: DELETE_USER,
            payload: id
        })
        dispatch(setAlert('Deleted', 'danger'));
    } catch (error) {
        console.error(error)
        dispatch({
            type: USER_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status}
        })
    }
 }

//SHOW MODAL
export const displayModal = (isShow) => async dispatch => {
    try {
            return dispatch({
                type: TOGGLE_SHOW,
                payload: !isShow
        })
    
    } catch (error) {
       console.error(error); 
       dispatch({
        type: USER_ERROR
        })
    }
}




//get user on click
 export const getUserById = (id) => async dispatch =>{
     try {
         const res = await axios.get(`/api/users/${id}`);

         dispatch({
             type: GET_USER_BY_ID,
             payload: res.data
         })
     } catch (error) {
        console.error(error); 
        dispatch({
         type: USER_ERROR
         })
     }
 }

