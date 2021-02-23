import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// Core Components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

// Assets
import Credera from "assets/img/SponsorLogos/Credera.png";
import FBFK from "assets/img/SponsorLogos/FBFKLogo.png";

// Links
import { FundraiserLink, MailToLink } from "constants.js";

// Styles
import sectionInterestedStyle from "assets/jss/material-kit-pro-react/views/blogPostsSections/sectionInterestedStyle.jsx";
const logoStyle = { width: "90%", height: "auto", margin: "20px" };
const LinkStyle = { color: "#3EAD7B" };
const torchStyle = {
  width: "90%",
  maxWidth: "400px",
  height: "auto",
  margin: "20px",
};

// Sponsor Links
const CrederaJobsLink = "https://www.credera.com/jobs/";
const FBFKLink = "https://www.fbfk.law/";

function SectionSponsors({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div className={classes.section} {...rest}>
      <h2 className={`${classes.title} ${classes.textCenter}`}>
        A special thanks to our Spring 2021 sponsors!
      </h2>
      <br />
      <GridContainer>
        <GridItem xs={12} sm={6} md={4}>
          <a href={CrederaJobsLink} target="_blank" rel="noopener noreferrer">
            <img style={logoStyle} src={Credera} alt="Credera Logo" />
          </a>
        </GridItem>
        <GridItem
          xs={12}
          sm={6}
          md={4}
          style={{ display: "flex", alignItems: "center" }}
        >
          <a href={FBFKLink} target="_blank" rel="noopener noreferrer">
            <img style={logoStyle} src={FBFK} alt="FBFK Logo" />
          </a>
        </GridItem>
        <GridItem
          xs={12}
          sm={6}
          md={4}
          style={{
            ...LinkStyle,
            fontFamily: "sans-serif",
            fontSize: "50px",
            textAlign: "center",
            fontWeight: "bold",
            margin: "auto 0",
            lineHeight: "100%",
          }}
        >
          NTSI Energy Solutions
        </GridItem>
        {/* <GridItem xs={12} sm={4}>
          <img style={logoStyle} src={PMI} alt="PMI Logo" />
        </GridItem>
        <GridItem xs={12} sm={4}>
          <img style={logoStyle} src={FiveHour} alt="5 Hour Evergy Logo" />
        </GridItem>
        <GridItem xs={12} sm={4}>
          <img
            style={logoStyle}
            src={SweetnessDesertsLogo}
            alt="Sweetness Deserts Logo"
          />
        </GridItem> */}
        <GridItem xs={12}>
          <h4 className={`${classes.title} ${classes.textCenter}`}>
            <a style={LinkStyle} href={MailToLink}>
              Corporate sponsor interestsed in helping out? Click here to reach
              out to the team!
            </a>
          </h4>
        </GridItem>
        {/* <GridItem xs={12}>
          <h4 className={`${classes.title} ${classes.textCenter}`}>
            <a
              style={LinkStyle}
              href={FundraiserLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img style={torchStyle} src={Torch} alt="Torch Fundraising" />
            </a>
          </h4>
        </GridItem> */}
      </GridContainer>
    </div>
  );
}

SectionSponsors.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(sectionInterestedStyle)(SectionSponsors);
