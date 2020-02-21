/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";

// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-pro-react/components/headerLinksStyle.jsx";

function HeaderLinksLive({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list + " " + classes.mlAuto}>
      <ListItem className={classes.listItem}>
        <Button
          href={"#venue"}
          color={"transparent"}
          className={classes.navButton}
          round
        >
          Venue Info
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href={"#schedule"}
          color={"transparent"}
          className={classes.navButton}
          round
        >
          Main Schedule
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href={"#prompts"}
          color={"transparent"}
          className={classes.navButton}
          round
        >
          Prompts
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href={"#sponsors"}
          color={"transparent"}
          className={classes.navButton}
          round
        >
          Sponsors
        </Button>
      </ListItem>
    </List>
  );
}

HeaderLinksLive.defaultProps = {
  hoverColor: "primary"
};

HeaderLinksLive.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose"
  ])
};

export default withStyles(headerLinksStyle)(HeaderLinksLive);
