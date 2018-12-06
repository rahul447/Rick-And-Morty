import React, { Component } from "react";
import { MapWrapperComponent, LocationInputComponent } from "../components/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateInputDetails, resetInputDetails, submitInputDetails, updateCurrentLocation } from "../actions/index";
import PropTypes from 'prop-types'

// container component that talks to redux store
class Main extends Component {

  // get current lat long
  componentDidMount() {
    this.getCurrentLocation()
  }

  render() {
    return (
      <React.Fragment>
        <LocationInputComponent submitInputDetails={this.props.submitInputDetails}
          geo={this.props.geo} updateInputDetails={this.props.updateInputDetails}
          resetInputDetails={this.props.resetInputDetails}
        />
        {
          this.props.geo.startLatLong.length > 0 && this.props.geo.dropLatLong.length > 0 &&
          <div className="margin-top-16">
            <MapWrapperComponent geo={this.props.geo} defaultZoom={10} />
          </div>
        }
      </React.Fragment>
    );
  }

  getCurrentLocation() {
    const location = window.navigator && window.navigator.geolocation
    location && location.getCurrentPosition((position) => {
      this.props.updateCurrentLocation(position.coords)
    })
  }
}

// returns parts of redux state
function mapStateToProps(routeFinder) {
  return {
    geo: routeFinder.geo
  };
}

// returns action dispactors
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateInputDetails, resetInputDetails, submitInputDetails, updateCurrentLocation }, dispatch);
}

Main.propTypes = {
  geo: PropTypes.object,
  updateInputDetails: PropTypes.func,
  resetInputDetails: PropTypes.func,
  submitInputDetails: PropTypes.func,
  updateCurrentLocation: PropTypes.func
}

// connects component to redux
export default connect(mapStateToProps, mapDispatchToProps)(Main);