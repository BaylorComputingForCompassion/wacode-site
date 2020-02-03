import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import Favorite from "@material-ui/icons/Favorite";

// Core Components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

// Styles
import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx";

// Assets
import logo from "assets/img/logo.png";

class SectionAboutUs extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className={classes.section} {...rest}>
        <GridContainer justify="center">
          <GridItem sm={12} md={9}>
            <div style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
              <h2 className={classes.title}>
                What is&nbsp;
                <img src={logo} alt="Wacode Logo" style={{ height: "4vh" }} />?
              </h2>
            </div>
            <h5 className={classes.description}>
              Wacode is an annual 12-hour hackathon, innovation fest, and
              start-up competition held at the Blume Conference Center on
              University&apos;s campus. We want to bring in students,
              professionals, hobbyists, and anyone else curious and passionate
              about tech in the greater Waco area together to build,
              collaborate, and share their knowledge and projects with us.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                title="Learn Modern Development Techniques"
                description="Guest lectures and workshops hosted by industry professionals with decades of experience. We hope this provides individuals a unique opportunity to interact with some of the brightest minds around."
                icon={Code}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                title="Code For Good"
                description="Our programming prompts are centered around solving certain issues in our community; we want to help combat issues like low literacy rates, providing rehabilitation for victims of drug abuse, and fending against human trafficking. Specific prompts will be posted a few days before our event begins."
                icon={Favorite}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                title="Built Your Professional Network"
                description="We want to provide an opportunity for you to meet with students and professionals in the area to build and learn something new. Our goal is to provide an environment that allows curious minds to work together to create something truly innovative."
                icon={Group}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

SectionAboutUs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(productStyle)(SectionAboutUs);
