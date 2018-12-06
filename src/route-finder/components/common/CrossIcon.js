import React, { Component } from "react";
import PropTypes from 'prop-types'

class CrossComponent extends Component {

    // renders cross icon
    render() {
        return (
            <React.Fragment>
                <button style={margin: "5px"} onClick={() => this.props.resetInputDetails(this.props.inputType)}>
                    <i className="fa fa-times" ></i>X</button>
            </React.Fragment >
        )
    }
}

CrossComponent.propTypes = {
    resetInputDetails: PropTypes.func,
    inputType: PropTypes.string
}

export default CrossComponent;