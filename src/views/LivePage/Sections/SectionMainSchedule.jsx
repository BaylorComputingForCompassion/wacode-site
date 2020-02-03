import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import Paper from "@material-ui/core/Paper";
import {
  Scheduler,
  DayView,
  Appointments
} from "@devexpress/dx-react-scheduler-material-ui";
import { ViewState } from "@devexpress/dx-react-scheduler";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import { appointments } from "./data";

import style from "assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.jsx";

const theme = createMuiTheme({ palette: { type: "light", primary: blue } });

class SectionMainSchedule extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: appointments
    };
  }

  render() {
    const { classes, ...rest } = this.props;
    const { data } = this.state;

    return (
      <div
        className="cd-section"
        id="contentAreas"
        style={{ marginTop: "-50px", paddingBottom: "4vh" }}
        {...rest}
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
                Schedule
              </h2>
              <br />
              <MuiThemeProvider theme={theme}>
                <Paper>
                  <Scheduler data={data}>
                    <ViewState currentDate="2019-03-02" />
                    <DayView startDayHour={8} endDayHour={22} />
                    <Appointments />
                  </Scheduler>
                </Paper>
              </MuiThemeProvider>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

SectionMainSchedule.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(style)(SectionMainSchedule);
