import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import Iframe from "react-iframe";

import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx";

class SectionLocation extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className={classes.section} {...rest}>
        <h2 className={classes.title}>Location</h2>
        <GridContainer justify="center">
          <GridItem xs={12}>
            <p className={classes.description}>Open lots are highlighted.</p>
            <Iframe
              url="https://www.google.com/maps/d/u/0/embed?mid=1BVtIapKArz0fjrDgcrBWlIpEyE0EOcz0"
              height="500px"
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
