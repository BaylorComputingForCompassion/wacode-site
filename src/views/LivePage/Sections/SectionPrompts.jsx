import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

// Styles
import servicesStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/servicesStyle.jsx";

function SectionPrompts(props) {
  const { classes, ...rest } = props;
  return (
    <div className={classes.section} {...rest}>
      <GridContainer>
        <GridItem
          xs={10}
          sm={8}
          className={`${classes.mlAuto} ${classes.mrAuto} ${classes.textCenter}`}
        >
          <h3 className={classes.title}>
            Prompts, Judging Criteria, and Prize Announcements Dropping on
            Friday @ 7:00pm CST!
          </h3>
        </GridItem>
      </GridContainer>
    </div>
  );
}

SectionPrompts.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(servicesStyle)(SectionPrompts);
