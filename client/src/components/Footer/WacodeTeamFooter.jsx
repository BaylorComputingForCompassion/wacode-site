import classNames from "classnames";
import React from "react";
// @material-ui/core components
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Footer from "components/Footer/Footer.jsx";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

import wacodeFooterStyle from "assets/jss/material-kit-pro-react/components/wacodeFooterStyle.jsx";

function WacodeTeamFooter(props) {
  const { children, classes, theme, big, className } = props;
  const themeType =
    theme === "transparent" || theme == undefined ? false : true;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes[theme]]: themeType,
    [classes.big]: big || children !== undefined,
    [className]: className !== undefined
  });
  const aClasses = classNames({
    [classes.a]: true
  });
  return (
    <Footer
      content={
        <div>
          <div className={classes.left}>
            <List className={classes.list}>
              <ListItem className={classes.inlineBlock}>
                <a
                  href="https://www.creative-tim.com/"
                  className={classes.block}
                >
                  Creative Tim
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a
                  href="https://www.creative-tim.com/presentation"
                  className={classes.block}
                >
                  About us
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a href="//blog.creative-tim.com/" className={classes.block}>
                  Blog
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a
                  href="https://www.creative-tim.com/license"
                  className={classes.block}
                >
                  Licenses
                </a>
              </ListItem>
            </List>
          </div>
          <div className={classes.right}>
            &copy; {1900 + new Date().getYear()} , made with{" "}
            <Favorite className={classes.icon} /> by{" "}
            <a href="https://www.creative-tim.com">Creative Tim</a> for a better
            web.
          </div>
        </div>
      }
    />
  );
}

WacodeTeamFooter.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.oneOf(["dark", "white", "transparent"]),
  big: PropTypes.bool,
  content: PropTypes.node.isRequired
};

export default withStyles(wacodeFooterStyle)(WacodeTeamFooter);
