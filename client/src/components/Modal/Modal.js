import React from 'react'
import { displayModal } from "../../action/user";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

const Modal = ({ isShow, displayModal }) => {
    return (
        <div className={`${isShow ? `show` : `hide`} modals`}
            onClick = {() => displayModal(isShow)}
        >
        </div>
    )
}

Modal.propTypes = {
    displayModal: PropTypes.func.isRequired,
}

export default connect( null, { displayModal })(Modal);
