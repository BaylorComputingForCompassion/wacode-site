import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import Favorite from "@material-ui/icons/Favorite";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx";

import logo from "assets/img/logo.png";

class SectionProduct extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem sm={12} md={9}>
            <div style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
              <h2 className={classes.title}>
                What is{" "}
                <img src={logo} alt="Wacode Logo" style={{ height: "4vh" }} />?
              </h2>
            </div>
            <h5 className={classes.description}>
              Wacode is an annual 12-hour hackathon held at the Blume Conference
              Center on Baylor University&apos;s campus. We plan on bringing the
              students, professionals, hobbyists, and anyone else curious and
              passionate about tech in the greater Waco together to build,
              collaborate, and share their knowledge and projects with us. We
              are here to provide a comfortable learning environment for all
              hackers to use their creativity and innovation at its full
              potential.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                title="Learn Modern Development Techniques"
                description="Bacon ipsum dolor amet dolore in pork ea picanha. Pork belly fugiat leberkas bresaola prosciutto aliqua hamburger rump brisket exercitation sed."
                icon={Code}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                title="Code For Good"
                description="Bacon ipsum dolor amet dolore corned beef null brisket pork belly tenderloin in pork ea picanha. Pork belly landjaeger consequat pig filet mignon fugiat leberkas bresaola prosciutto."
                icon={Favorite}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                title="Built Your Professional Network"
                description="Bacon ipsum dolor amet dolore corned beef nulla frankfurter tongue brisket pork belly tenderloin in pork ea picanha. Pork belly landjaeger consequat pig hamburger rump brisket exercitation sed."
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

export default withStyles(productStyle)(SectionProduct);
