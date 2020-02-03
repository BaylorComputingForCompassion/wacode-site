import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

import Iframe from "react-iframe";

import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx";

const CustomSkinMap = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap
      defaultZoom={17}
      defaultCenter={{ lat: 31.54645, lng: -97.11815 }}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: true,
        styles: [
          {
            featureType: "water",
            stylers: [
              { saturation: 43 },
              { lightness: -11 },
              { hue: "#0088ff" }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#808080" }, { lightness: 54 }]
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [{ color: "#ece2d9" }]
          },
          {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [{ color: "#ccdca1" }]
          },
          {
            featureType: "landscape.natural",
            elementType: "geometry.fill",
            stylers: [{ visibility: "on" }, { color: "#b8cb93" }]
          },
          { featureType: "poi.park", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.sports_complex",
            stylers: [{ visibility: "on" }]
          },
          { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.business",
            stylers: [{ visibility: "simplified" }]
          }
        ]
      }}
    >
      <Marker position={{ lat: 31.54645, lng: -97.11815 }} />
    </GoogleMap>
  ))
);

class SectionLocation extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Location</h2>
        <GridContainer justify="center">
          <GridItem xs={12} sm={6}>
            <p className={classes.description}>1420 S 5th St, Waco, TX 76706</p>
            <CustomSkinMap
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB-elLOVuda86FtsS7iGwBMjvjTQaSSbYk"
              loadingElement={<div style={{ height: `45vh`, width: `auto` }} />}
              containerElement={
                <div
                  style={{
                    height: `45vh`,
                    width: `auto`,
                    paddingLeft: "15px",
                    paddingRight: "15px"
                  }}
                />
              }
              mapElement={<div style={{ height: `45vh`, width: `auto` }} />}
            />
          </GridItem>
          <GridItem xs={12} sm={6}>
            <p className={classes.description}>Open lots are highlighted.</p>
            <Iframe
              url="https://www.google.com/maps/d/u/0/embed?mid=1BVtIapKArz0fjrDgcrBWlIpEyE0EOcz0"
              height="45vh"
              width="95%"
              id="wacodeParkingMap"
              display="initial"
              position="relative"
              allowFullScreen
            />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

SectionLocation.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(productStyle)(SectionLocation);
