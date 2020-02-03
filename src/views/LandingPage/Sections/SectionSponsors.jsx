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

import sectionInterestedStyle from "assets/jss/material-kit-pro-react/views/blogPostsSections/sectionInterestedStyle.jsx";

function SectionSponsors({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div className={classes.section} {...rest}>
      <h2 className={classes.title + " " + classes.textCenter}>
        A special thanks to our Spring 2020 sponsors!
      </h2>
      <br />
      <GridContainer>
        <GridItem xs={6}>
          <a
            href={"https://www.credera.com/jobs/"}
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <img
              style={{ width: "90%", height: "auto", margin: "20px" }}
              src={Credera}
              alt="Credera Logo"
            />
          </a>
        </GridItem>
        <GridItem sm={6}>
          <img
            style={{ width: "90%", height: "auto", margin: "20px" }}
            src={PMI}
            alt="PMI Logo"
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}

SectionSponsors.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(sectionInterestedStyle)(SectionSponsors);
