import React from "react";
import Iframe from "react-iframe";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Card from "components/Card/Card.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CardBody from "components/Card/CardBody.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

// Links
import { ParkingLotMapLink, CashionMapLink } from "constants.js";

// Styles
import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx";
const VenueInfoCardStyle = { width: "100%", height: "auto" };
const LinkStyle = { color: "#3EAD7B" };

class SectionLocation extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className={`${classes.section} cd-section`} {...rest}>
        <h2 className={classes.title}>Venue Information</h2>
        <GridContainer justify="center">
          <GridItem xs={11} md={5}>
            <Card style={VenueInfoCardStyle}>
              <CardBody>
                <h3 className={classes.title}>Address:</h3>
                <div className={classes.description}>
                  <a
                    style={LinkStyle}
                    href={CashionMapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h5>Baylor University</h5>
                    <h5>Cashion Academic Center (5th Floor)</h5>
                    <h6>1420 S 5th St, Waco, TX 76706</h6>
                  </a>
                </div>
                <hr />
                <h3 className={classes.title}>Parking:</h3>
                <div>
                  <h5>Speight Parking Garage</h5>
                  <h5>Lot near Sid Richardson Building</h5>
                  <h5>Lot near Fountain Mall</h5>
                </div>
                <hr />
                <h3 className={classes.title}>Guest WiFi:</h3>
                <div>
                  <h5>Network Name: BU-GUEST</h5>
                  <h5>
                    Usernames &amp; passwords will be given to you during
                    sign-in!
                  </h5>
                </div>
              </CardBody>
            </Card>
            <p>Open lots are highlighted in green on the map.</p>
          </GridItem>
          <GridItem xs={12} md={7}>
            <Iframe
              url={ParkingLotMapLink}
              height="675px"
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
