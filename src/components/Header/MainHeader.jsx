import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Header from "components/Header/Header.jsx";

// Styles
import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";

class MainHeader extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <Header
          color="transparent"
          brand="Wacode: A Community Hackathon"
          links={children}
          fixed
          changeColorOnScroll={{
            height: 300,
            color: "primary"
          }}
        />
      </>
    );
  }
}

MainHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.any
};

export default withStyles(landingPageStyle)(MainHeader);
