import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";

import companyLogo1 from "assets/img/SponsorLogos/ExxonMobil_Logo.png";
import companyLogo2 from "assets/img/SponsorLogos/GitHub_Logo.png";
import companyLogo3 from "assets/img/SponsorLogos/Credera_Logo.png";

import teamsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.jsx";
import teamStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/teamStyle.jsx";

const style = {
  ...teamsStyle,
  ...teamStyle,
  justifyContentCenter: {
    justifyContent: "center"
  }
};

class SectionSponsors extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Our Partners & Sponsors</h2>
        <div>
          <GridContainer>
            {/* Partner/Sponsor #1 */}
            <GridItem xs={12} sm={4} md={4}>
              <Card profile plain className={classes.card3}>
                <GridContainer>
                  <img
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                      display: "table-cell"
                    }}
                    src={companyLogo1}
                    alt="Company Logo 1"
                  />
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card profile plain className={classes.card3}>
                <GridContainer>
                  <img
                    src={companyLogo2}
                    alt="Company Logo 2"
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                      display: "table-cell"
                    }}
                    className={
                      classes.imgRaised +
                      " " +
                      classes.imgRounded +
                      " " +
                      classes.imgFluid
                    }
                  />
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <GridContainer>
                <img
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    display: "table-cell"
                  }}
                  src={companyLogo3}
                  alt="Company Logo #3"
                />
              </GridContainer>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(style)(SectionSponsors);
