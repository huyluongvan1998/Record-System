import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {getUser, getUserById, addUser, displayModal} from '../../action/user';
import {connect} from 'react-redux';


const User = ({getUser, addUser, displayModal, 
        getUserById,
        user: {
        users,
        user,
        isShow
    }}) => {

    useEffect(() => {
        getUser();
        
        if(user) {
            setFormData({
                name: user.name,
                email: user.email,
                age: user.age ? user.age : '',
                gender: user.gender ? user.gender : '',
            });
        }
    }, [getUser, user]);

    const initialState = {
        name: '',
        email: '',
        age: '',
        gender: ''
    }

    const [formData, setFormData] = useState(initialState);

    const {
        name, 
        age,
        email,
        gender
    } = formData;

    let edit = false;

    const onChangeHandler = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitHandler = e => {
        e.preventDefault();

        user ? addUser(formData, !edit) : addUser(formData, edit);
    }

    const clearState = () => {
        setFormData({ ...initialState });
    }

    return (
        <div className='container'>
            <button className='btn btn-success font-weight-bold' 
                    type='submit'
                    onClick={() => {
                        displayModal(isShow);
                    }}>
                Add User</button>
            <table className='ui-table my-2'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, idx) => (
                            <tr key={idx}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>{user.gender}</td>
                                <td>
                                    <button className="btn btn-primary mx-1"
                                            onClick={() => getUserById(user._id)}
                                    >
                                        EDIT
                                    </button>
                                    <button className="btn btn-primary mx-1">
                                        DELETE
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="form-container">
                <h2>Input User</h2>
                <form className="form form-data" onSubmit={(e) => {
                    onSubmitHandler(e);
                    clearState();
                }}>
                    <input
                        type="text"
                        placeholder='Name'
                        name='name'
                        value={name}
                        onChange={(e) => onChangeHandler(e)}/>
                    <input
                        type="email"
                        disabled = {user ? 'disable' : ''}
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={(e) => onChangeHandler(e)}/>
                    <input
                        type="number"
                        min='18'
                        max='100'
                        onChange={(e) => onChangeHandler(e)}
                        placeholder='Age'
                        name='age'
                        value={age}/>
                    <select
                        id="cars"
                        name='gender'
                        value={gender}
                        onChange={(e) => onChangeHandler(e)}>
                        <option value={null}></option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select>
                    <button type='submit' className='btn btn-success'>{
                        user ? 'UPDATE' : 'ADD'
                    }</button>
                </form>
            </div>
        </div>
    )
}

User.propTypes = {
    getUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    addUser: PropTypes.func.isRequired,
    displayModal: PropTypes.func.isRequired,
    getUserById: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({user: state.user})

export default connect(mapStateToProps, {getUser, addUser, displayModal, getUserById})(User);
