/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";

// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import PersonAdd from "@material-ui/icons/PersonAdd";
import HowToReg from "@material-ui/icons/HowToReg";
import SupervisorAccount from "@material-ui/icons/SupervisorAccount";
import Grade from "@material-ui/icons/Grade";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-pro-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes, dropdownHoverColor } = props;
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
      <ListItem className={classes.listItem}>
          < Button
          color={"white"}
          className={classes.navButton}
          round
          >
            <Link to="/live">
              <b style={{ color: "#3EAD7B" }}>Live!</b>
            </Link>
          </Button>
      </ListItem>
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
