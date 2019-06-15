import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// Core Components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

// SponsorLogos
import AmericanAirlines from "assets/img/SponsorLogos/AmericanAirlines.png";
import TriStar from "assets/img/SponsorLogos/TriStar.jpeg";
import Agglo from "assets/img/SponsorLogos/Agglo.png";
import Blumania from "assets/img/SponsorLogos/BLUMANIA.png";
import Pariveda from "assets/img/SponsorLogos/Pariveda.jpeg";
import Credera from "assets/img/SponsorLogos/Credera.png";
import PMI from "assets/img/SponsorLogos/PMI.png";
import WC from "assets/img/SponsorLogos/WC.png";
import PremiumPoppers from "assets/img/SponsorLogos/PremiumPoppers.png";
import GitHub from "assets/img/SponsorLogos/GitHub.png";

import sectionInterestedStyle from "assets/jss/material-kit-pro-react/views/blogPostsSections/sectionInterestedStyle.jsx";

function SectionSponsors({ ...props }) {
  const { classes } = props;
  return (
    <div className={classes.section}>
      <h2 className={classes.title + " " + classes.textCenter}>
        A special thanks to our Spring 2019 sponsors & partners!
      </h2>
      <br />
      <GridContainer>
        <GridItem sm={12} md={12} lg={12}>
          <a href={"https://jobs.aa.com/"} target={"_blank"}>
            <img
              style={{ width: "100%", height: "auto", margin: "20px" }}
              src={AmericanAirlines}
              alt="American Airlines Logo"
            />
          </a>
        </GridItem>
        <GridItem sm={12} md={4}>
          <a
            href={"https://www.parivedasolutions.com/privacy/careers-overview"}
            target={"_blank"}
          >
            <img
              style={{ width: "90%", height: "auto", margin: "20px" }}
              src={Pariveda}
              alt="Pariveda Logo"
            />
          </a>
        </GridItem>
        <GridItem sm={12} md={4}>
          <a href={"https://github.com/about/careers"} target={"_blank"}>
            <img
              style={{ width: "90%", height: "auto", margin: "20px" }}
              src={GitHub}
              alt="GitHub Logo"
            />
          </a>
        </GridItem>
        <GridItem sm={12} md={4}>
          <a href={"https://www.credera.com/jobs/"} target={"_blank"}>
            <img
              style={{ width: "90%", height: "auto", margin: "20px" }}
              src={Credera}
              alt="Credera Logo"
            />
          </a>
        </GridItem>
        <GridItem sm={12} md={4}>
          <img
            style={{ width: "90%", height: "auto", margin: "20px" }}
            src={TriStar}
            alt="Tri Star Logo"
          />
        </GridItem>
        <GridItem sm={12} md={4}>
          <img
            style={{ width: "90%", height: "auto", margin: "20px" }}
            src={PMI}
            alt="PMI Logo"
          />
        </GridItem>
        <GridItem sm={12} md={4}>
          <img
            style={{ width: "90%", height: "auto", margin: "20px" }}
            src={WC}
            alt="WC Logo"
          />
        </GridItem>
        <GridItem sm={12} md={4}>
          <img
            style={{ width: "90%", height: "auto", margin: "5px" }}
            src={Agglo}
            alt="Agglo Logo"
          />
        </GridItem>
        <GridItem sm={12} md={4}>
          <a href={"https://www.blumaniaenergy.com/"} target={"_blank"}>
            <img
              style={{ width: "90%", height: "auto", margin: "20px" }}
              src={Blumania}
              alt="Blumania Logo"
            />
          </a>
        </GridItem>
        <GridItem sm={12} md={4}>
          <a href={"https://www.premiumpopperspopcorn.com/"} target={"_blank"}>
            <img
              style={{ width: "90%", height: "auto", margin: "5px" }}
              src={PremiumPoppers}
              alt="Premium Poppers Logo"
            />
          </a>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(sectionInterestedStyle)(SectionSponsors);
