import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import style from "assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.jsx";

class SectionMainSchedule extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const { data } = this.state;

    return (
      <div
        {...rest}
        className="cd-section"
        id="contentAreas"
        style={{ marginTop: "-50px", paddingBottom: "4vh" }}
      >
        <div id="tables">
          <GridContainer>
            <GridItem
              xs={11}
              sm={10}
              className={`${classes.mrAuto} ${classes.mlAuto}`}
            >
              <h2
                className={classes.title}
                style={{ color: "black", textAlign: "center" }}
              >
                Main Event Schedule
              </h2>
              <br />

            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(style)(SectionMainSchedule);
