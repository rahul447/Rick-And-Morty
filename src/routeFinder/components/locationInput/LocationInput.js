import React, { Component } from "react";
import InputComponent from "../common/Input";
import CrossComponent from "../common/CrossIcon";
import PropTypes from 'prop-types'

// renders each input box
const LocationFormInputs = (props) => (
    <React.Fragment>
        <div>
            <InputComponent labelName="Starting Location" input="start"
                placeholder="Enter Start Location" inputVal={props.geo.start}
                updateInputDetails={props.updateInputDetails}
            />
            {
                props.geo.start && <CrossComponent inputType="start"
                    resetInputDetails={props.resetInputDetails} />
            }
        </div>
        <div>
            <InputComponent labelName="Drop-off point" input="drop"
                placeholder="Enter Drop Location" inputVal={props.geo.drop}
                updateInputDetails={props.updateInputDetails} />
            {
                props.geo.drop && <CrossComponent inputType="drop"
                    resetInputDetails={props.resetInputDetails} />
            }
        </div>
    </React.Fragment>
);

class LocationInputComponent extends Component {

    constructor(props) {
        super(props);

        this.findRoutes = this.findRoutes.bind(this);
    }

    // initials submit action 
    findRoutes() {
        this.props.submitInputDetails();
    }

    render() {

        const { geo, resetInputDetails } = this.props;

        // renders response info, submit reset buttons, error messages if any
        return (
            <React.Fragment>
                <LocationFormInputs {...this.props} />
                {
                    // Route info
                    geo.totalDistance && geo.totalTime &&
                    <div>
                        <p>
                            Total Distance: {geo.totalDistance}
                        </p>
                        <p>
                            Total Time: {geo.totalTime}
                        </p>
                    </div>
                }
                <div className="margin-top-16">
                    <button type="button" disabled={!(geo.start && geo.drop)} style={{ marginRight: 10 }} className="btn btn-primary" onClick={this.findRoutes}>{geo.submitted ? 'Re-Submit' : 'Submit'}</button>
                    <button type="button" className="btn btn-dark"
                        onClick={() => resetInputDetails()}>Reset</button>
                </div>

                {
                    // Error message
                    geo.failure && geo.failure.status &&
                    <div className="error-message">
                        {geo.failure.message}
                    </div>
                }
            </React.Fragment>
        );
    }
}

LocationInputComponent.propTypes = {
    geo: PropTypes.object,
    updateInputDetails: PropTypes.func,
    resetInputDetails: PropTypes.func,
    submitInputDetails: PropTypes.func
}

export default LocationInputComponent;