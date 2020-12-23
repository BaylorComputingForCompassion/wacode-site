/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// @material-ui/core components
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Button from "components/CustomButtons/Button.jsx";

// Styles
import headerLinksStyle from "assets/jss/material-kit-pro-react/components/headerLinksStyle.jsx";
const LinkStyle = { color: "#3EAD7B" };

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list + " " + classes.mlAuto}>
      <ListItem className={classes.listItem}>
        <Button
          href={"#about"}
          color={"transparent"}
          className={classes.navButton}
          round
        >
          About Us
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href={"#team"}
          color={"transparent"}
          className={classes.navButton}
          round
        >
          Team
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href={"#faq"}
          color={"transparent"}
          className={classes.navButton}
          round
        >
          F.A.Q.
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
      {/* @TODO Hide when Wacode is over */}
      {/* <ListItem className={classes.listItem}>
        <Link to="/live">
          <Button
            color={"white"}
            tag={Link}
            to={"/live"}
            className={classes.navButton}
            round
          >
            <b style={LinkStyle}>Live!</b>
          </Button>
        </Link>
      </ListItem> */}
    </List>
  );
}

HeaderLinks.defaultProps = {
  hoverColor: "primary"
};

HeaderLinks.propTypes = {
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

export default withStyles(headerLinksStyle)(HeaderLinks);
