import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// Core Components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

// SponsorLogos
import Credera from "assets/img/SponsorLogos/Credera.png";
import PMI from "assets/img/SponsorLogos/PMI.png";
import FiveHour from "assets/img/SponsorLogos/5Hour.svg";
import Torch from "assets/img/Torch.png";

import sectionInterestedStyle from "assets/jss/material-kit-pro-react/views/blogPostsSections/sectionInterestedStyle.jsx";
const logoStyle = { width: "90%", height: "auto", margin: "20px" };
const torchStyle = { width: "25%", height: "auto", margin: "20px" };

function SectionSponsors({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div className={classes.section} {...rest}>
      <h2 className={classes.title + " " + classes.textCenter}>
        A special thanks to our Spring 2020 sponsors!
      </h2>
      <br />
      <GridContainer>
        <GridItem sm={4}>
          <a
            href={"https://www.credera.com/jobs/"}
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <img style={logoStyle} src={Credera} alt="Credera Logo" />
          </a>
        </GridItem>
        <GridItem sm={4}>
          <img style={logoStyle} src={PMI} alt="PMI Logo" />
        </GridItem>
        <GridItem xs={4}>
          <img style={logoStyle} src={FiveHour} alt="5 Hour Evergy Logo" />
        </GridItem>
        <GridItem xs={12}>
          <h4 className={classes.title + " " + classes.textCenter}>
            <a
              style={{ color: "#3EAD7B" }}
              href="https://baylor.scalefunder.com/cfund/project/19596"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <img style={torchStyle} src={Torch} alt="Torch Fundraising" />
            </a>
          </h4>
        </GridItem>
        <GridItem xs={12}>
          <h4 className={classes.title + " " + classes.textCenter}>
            <a style={{ color: "#3EAD7B" }} href="mailto:team@wacode.org">
              Corporate sponsor interestsed in helping out? Click here to reach
              out to team@wacode.org!
            </a>
          </h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}

SectionSponsors.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(sectionInterestedStyle)(SectionSponsors);
