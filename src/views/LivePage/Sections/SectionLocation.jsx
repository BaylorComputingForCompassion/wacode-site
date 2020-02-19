import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import Iframe from "react-iframe";

import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx";

const LinkStyle = { color: "#3EAD7B" };

class SectionLocation extends React.Component {
  render() {
    const { classes, ...rest } = this.props;

    return (
      <div className={classes.section} {...rest}>
        <h2 className={classes.title}>Venue Information</h2>
        <GridContainer justify="center">
          <GridItem xs={10} md={4}>
            <Card style={{ width: "100%", height: "auto" }}>
              <CardBody>
                <h3 className={classes.title}>Address:</h3>
                <div className={classes.description}>
                  <a
                    style={LinkStyle}
                    href="https://goo.gl/maps/qGh1REBFaTLeWhcG9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h4>Baylor University</h4>
                    <h4>Cashion Academic Center (5th Floor)</h4>
                    <h5>1420 S 5th St, Waco, TX 76706</h5>
                  </a>
                </div>
                <hr />
                <h3 className={classes.title}>Parking:</h3>
                <div>
                  <h4>Speight Parking Garage</h4>
                  <h4>Lot near Sid Richardson Building</h4>
                  <h4>Lot near Fountain Mall</h4>
                </div>
              </CardBody>
            </Card>
            <p>Open lots are highlighted on map.</p>
          </GridItem>
          <GridItem xs={11} md={6}>
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
