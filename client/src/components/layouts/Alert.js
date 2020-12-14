import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';


const Alert = ({
    alert: { errors }
}) => {
    return (
        errors.map(error => (
            <div className={`alert-${error.alertType}  alert`}>
            {
                error.msg
            }
        </div>
        ))
    )
}

Alert.propTypes = {
 alert: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    alert: state.alert
})
export default connect(mapStateToProps)(Alert);
