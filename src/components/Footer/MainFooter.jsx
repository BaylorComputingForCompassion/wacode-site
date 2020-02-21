import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import withStyles from "@material-ui/core/styles/withStyles";

// Core Components
import Footer from "components/Footer/Footer.jsx";

// Links
import { MailToLink, C4CWebsiteLink } from "constants.js";

// Styles
import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";
const LinkStyle = { color: "#3EAD7B" };

class MainFooter extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <Footer
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a href={C4CWebsiteLink} className={classes.block}>
                      Computing for Compassion
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()} , made with ❤️ by&nbsp;
                <a href={MailToLink} style={LinkStyle}>
                  The Wacode Team
                </a>
              </div>
            </div>
          }
        />
      </>
    );
  }
}

MainFooter.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(landingPageStyle)(MainFooter);
