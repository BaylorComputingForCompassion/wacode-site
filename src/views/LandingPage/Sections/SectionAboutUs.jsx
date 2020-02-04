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
              Wacode is an annual 12-hour&nbsp;
              <a
                style={{ color: "#3EAD7B" }}
                href="https://www.hackreactor.com/blog/what-is-a-hackathon-your-complete-guide"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                hackathon
              </a>
              &nbsp;held at the Blume Conference Center on Baylor
              University&apos;s campus. We want to bring in students,
              professionals, hobbyists together to build, collaborate, and share
              their knowledge.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                title="Learn Modern Development Techniques"
                description="Guest lectures and workshops hosted by industry professionals with decades of experience."
                icon={Code}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                title="Code For Social Good"
                description="Our programming prompts are focused on solving important issues in our local Waco community."
                icon={Favorite}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                title="Built Your Professional Network"
                description="Professionals on-site looking to hire on new talent for internship and full-time opportunities."
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
