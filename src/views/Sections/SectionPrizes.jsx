// @TODO
import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

import servicesStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/servicesStyle.jsx";

function SectionPrizes(props) {
  const { classes, ...rest } = props;
  return (
    <div className={`${classes.services} cd-section`} {...rest}>
      <h1
        className={`${classes.mlAuto} ${classes.mrAuto} ${classes.textCenter} ${classes.title}`}
      >
        Prizes
      </h1>
      <GridContainer>
        <GridItem
          xs={10}
          sm={8}
          className={`${classes.mlAuto} ${classes.mrAuto} ${classes.textCenter}`}
        >
          <h2 className={classes.title}>Novice Bracket</h2>
          <h4 className={classes.title}>
            1st Place: $20 Amazon Gift Card (to each member of the winning team)
            + Swag!
          </h4>
          <h4 className={classes.title}>
            2nd Place: $10 Amazon Gift Card (to each member of the winning team)
          </h4>
        </GridItem>
        <GridItem
          xs={10}
          sm={8}
          className={`${classes.mlAuto} ${classes.mrAuto} ${classes.textCenter}`}
        >
          <h2 className={classes.title}>Experienced Bracket</h2>
          <h4 className={classes.title}>
            1st Place: $100 Amazon Gift Card (to each member of the winning
            team) + Swag
          </h4>
          <h4 className={classes.title}>
            2nd Place: $50 Amazon Gift Card (to each member of the winning team)
            + Swag
          </h4>
          <h4 className={classes.title}>
            3rd Place: $30 Amazon Gift Card (to each member of the winning team)
            + Swag
          </h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}

SectionPrizes.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(servicesStyle)(SectionPrizes);
