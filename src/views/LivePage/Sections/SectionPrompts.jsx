import React from "react";
import PropTypes from "prop-types";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import servicesStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/servicesStyle.jsx";

function SectionPrompts(props) {
  const { classes, ...rest } = props;
  return (
    <div className={classes.section} {...rest}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          xs={10}
          className={classNames(
            classes.mlAuto,
            classes.mrAuto,
            classes.textCenter
          )}
        >
          <h3 className={`${classes.title} ${classes.description}`}>
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
