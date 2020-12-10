import React, {Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'
import { getUser } from '../action/user';
import { connect } from 'react-redux';

const User = ({ getUser }) => {

    useEffect(() => {
        getUser();
    }, [getUser]);
    return (
        <Fragment>
            test
        </Fragment>
    )
}

User.propTypes = {
    getUser: PropTypes.func.isRequired,
}

export default connect(null, { getUser })(User);
