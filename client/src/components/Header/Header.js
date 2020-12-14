import React from 'react';
import logo from '../../logo.svg';

const Header = () => {
    return (
        <header className='fluid-container header'>
            <div></div>
            <div className='content center'>
                <img src={ logo } alt="error" />
                <div className='center text'>
                    <h2 >MERN CRUD</h2>
                    <p >A simple records system using MongoDB, Express.js, React.js, and Node.js with real-time Create, Read, Update, and Delete operations using Socket.io. REST API was implemented on the back-end. Semantic UI React was used for the UI.</p>
                </div>
            </div>
            <div></div>
        </header>
    )
}

export default Header
