import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import { ReactTypeformEmbed } from "react-typeform-embed";

import workStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/workStyle.jsx";

class SectionWork extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer
          justify="center"
          style={{ height: "475px", width: "100%" }}
        >
          <GridItem cs={12} sm={8} md={8}>
            <h2 className={classes.title}>Work with us</h2>
            <h4 className={classes.description}>
              Wacode is looking for sponsors and community partners. We want to
              find business and organizations who believe and support our
              mission of bringing technology to our local community, and
              providing a platform for our flourishing tech community.
            </h4>
            <ReactTypeformEmbed
              popup={false}
              autoOpen={false}
              url="https://wacodeteam.typeform.com/to/mpK8Ns"
            />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(workStyle)(SectionWork);
