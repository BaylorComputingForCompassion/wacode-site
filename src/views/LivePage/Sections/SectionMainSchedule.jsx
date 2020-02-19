import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Paper from "@material-ui/core/Paper";

import Room from "@material-ui/icons/Room";
import SubjectIcon from "@material-ui/icons/Subject";

import {
  Scheduler,
  DayView,
  Appointments,
  AppointmentTooltip
} from "@devexpress/dx-react-scheduler-material-ui";
import { ViewState } from "@devexpress/dx-react-scheduler";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import { appointments } from "./data";

import style from "assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.jsx";

const theme = createMuiTheme({ palette: { type: "light", primary: green } });

const Content = withStyles(style, { name: "Content" })(
  ({ classes, appointmentData, ...restProps }) => (
    <AppointmentTooltip.Content
      {...restProps}
      appointmentData={appointmentData}
    >
      <GridContainer className={`${classes.mrAuto} ${classes.mlAuto}`}>
        <GridItem xs={2} className={classes.textCenter}>
          <Room className={classes.icon} />
        </GridItem>
        <GridItem xs={10} style={{ paddingLeft: "0" }}>
          <span>{appointmentData.location}</span>
        </GridItem>
      </GridContainer>
      <GridContainer className={`${classes.mrAuto} ${classes.mlAuto}`}>
        <GridItem xs={2} className={classes.textCenter}>
          <SubjectIcon className={classes.icon} />
        </GridItem>
        <GridItem xs={10} style={{ paddingLeft: "0" }}>
          <span>{appointmentData.description}</span>
        </GridItem>
      </GridContainer>
    </AppointmentTooltip.Content>
  )
);

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
      <div className={classes.section} {...rest}>
        <h2
          className={classes.title}
          style={{ color: "black", textAlign: "center" }}
        >
          Main Schedule
        </h2>
        <h5 className={`${classes.textCenter} ${classes.title}`}>
          Click an event for more info! If you have any questions, ask our
          volunteers!
        </h5>
        <div id="tables">
          <GridContainer>
            <GridItem xs={10} className={`${classes.mrAuto} ${classes.mlAuto}`}>
              <MuiThemeProvider theme={theme}>
                <Paper>
                  <Scheduler data={data}>
                    <ViewState currentDate="2020-02-22" />
                    <DayView
                      startDayHour={7.5}
                      endDayHour={22}
                      cellDuration={30}
                    />
                    <Appointments />
                    <AppointmentTooltip
                      showCloseButton
                      contentComponent={Content}
                    />
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
