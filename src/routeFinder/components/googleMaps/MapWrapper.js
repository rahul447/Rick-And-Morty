import React from "react";
import { compose, withProps } from "recompose";
import { withGoogleMap, GoogleMap, DirectionsRenderer } from "react-google-maps";
import config from "../../config/config";
import PropTypes from 'prop-types';

class MapWrapperComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      directions: null
    }
  }

  // routes direction service of google maps
  componentDidMount() {
    const DirectionsService = new window.google.maps.DirectionsService();

    DirectionsService.route({
      origin: new window.google.maps.LatLng(this.props.geo.startLatLong[0], this.props.geo.startLatLong[1]),
      destination: new window.google.maps.LatLng(this.props.geo.dropLatLong[0], this.props.geo.dropLatLong[1]),
      travelMode: window.google.maps.TravelMode.DRIVING,
    }, (result, status) => {
      if (status === window.google.maps.DirectionsStatus.OK) {
        this.setState({
          directions: result,
        });
      }
    });
  }

  // renders googleMap component
  render() {
    return (
      <GoogleMap
        defaultZoom={this.props.defaultZoom}
        defaultCenter={new window.google.maps.LatLng(this.props.geo.currLatLong.lat, this.props.geo.currLatLong.lng)}
      >
        {this.state.directions && <DirectionsRenderer directions={this.state.directions} />}
      </GoogleMap>
    )
  }
}

// Higher order component
export default compose(
  withProps({
    googleMapURL: config.GOOGLEMAPURL,
    loadingElement: <div style={{ height: config.mapHeights.loadingElement }} />,
    containerElement: <div style={{ height: config.mapHeights.containerElement }} />,
    mapElement: <div style={{ height: config.mapHeights.mapElement }} />,
  }),
  withGoogleMap
)(MapWrapperComponent)

MapWrapperComponent.propTypes = {
  geo: PropTypes.object,
  defaultZoom: PropTypes.number
}
