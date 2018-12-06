import React, { Component } from "react";
import PropTypes from 'prop-types'
import Script from 'react-load-script';
import config from "../../config/config";

class InputComponent extends Component {

    constructor(props) {
        super(props);
        this.renderAutoComplete = this.renderAutoComplete.bind(this);
        this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
        this.AutoComplete = null;
    }

    // callback for input place change
    handlePlaceSelect() {
        let AddressObject = this.AutoComplete.getPlace();
        let Address = AddressObject.address_components;

        Address && this.props.updateInputDetails(this.props.input, AddressObject.formatted_address)

    }

    // auto complete feature , called when google maps is loaded
    renderAutoComplete() {
        const options = { types: ['(cities)'] };

        this.AutoComplete = new window.google.maps.places.Autocomplete(
            document.getElementById(this.props.input), options);

        this.AutoComplete.addListener('place_changed', this.handlePlaceSelect);
    }

    // renders each input box
    render() {
        return (
            <React.Fragment>
                <Script url={config.GOOGLEMAPURL} onLoad={this.renderAutoComplete} />
                <label><b>{this.props.labelName}</b></label><br />
                <input type="text" id={this.props.input} value={this.props.inputVal}
                    name={this.props.input} required placeholder={this.props.placeholder}
                    onChange={evt => this.props.updateInputDetails(this.props.input, evt.target.value)}
                />
            </React.Fragment>
        )
    }
}

InputComponent.propTypes = {
    labelName: PropTypes.string,
    input: PropTypes.string,
    inputVal: PropTypes.string,
    placeholder: PropTypes.string,
    updateInputDetails: PropTypes.func
}

export default InputComponent;