import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
// SponsorLogos
import TriStar from "assets/img/SponsorLogos/TriStar.jpeg";
import Agglo from "assets/img/SponsorLogos/Agglo.png";
import Blumania from "assets/img/SponsorLogos/BLUMANIA.png";
import Pariveda from "assets/img/SponsorLogos/Pariveda.jpeg";
import WC from "assets/img/SponsorLogos/WC.png";
import PremiumPoppers from "assets/img/SponsorLogos/PremiumPoppers.png";
import Placeholder from "assets/img/image_placeholder.png";

import sectionInterestedStyle from "assets/jss/material-kit-pro-react/views/blogPostsSections/sectionInterestedStyle.jsx";

function SectionSponsors({ ...props }) {
  const { classes } = props;
  return (
    <div className={classes.section}>
      <h2 className={classes.title + " " + classes.textCenter}>
        A special thanks to our sponsors & partners!
      </h2>
      <br />
      <GridContainer>
        <GridItem sm={12} md={4}>
          <img
            style={{ width: "100%", height: "auto", margin: "20px" }}
            src={TriStar}
            alt="Tri Star Logo"
          />
        </GridItem>
        <GridItem sm={12} md={4}>
          <img
            style={{ width: "100%", height: "auto", margin: "20px" }}
            src={Pariveda}
            alt="Tri Star Logo"
          />
        </GridItem>
        <GridItem sm={12} md={4}>
          <img
            style={{ width: "100%", height: "auto", margin: "5px" }}
            src={Agglo}
            alt="Agglo Logo"
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem sm={12} md={4}>
          <img
            style={{ width: "100%", height: "auto", margin: "20px" }}
            src={Blumania}
            alt="Blumania Logo"
          />
        </GridItem>
        <GridItem sm={12} md={4}>
          <img
            style={{ width: "100%", height: "auto", margin: "20px" }}
            src={WC}
            alt="WC Logo"
          />
        </GridItem>
        <GridItem sm={12} md={4}>
          <img
            style={{ width: "100%", height: "auto", margin: "5px" }}
            src={PremiumPoppers}
            alt="Premium Poppers Logo"
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem sm={12} md={4}>
          <img
            style={{ width: "100%", height: "auto", margin: "20px" }}
            src={Placeholder}
            alt="This could be your company!"
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(sectionInterestedStyle)(SectionSponsors);
