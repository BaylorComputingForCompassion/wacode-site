import React from "react";
import PropTypes from "prop-types";
import {
  Scheduler,
  DayView,
  Appointments,
  AppointmentTooltip
} from "@devexpress/dx-react-scheduler-material-ui";
import { ViewState } from "@devexpress/dx-react-scheduler";

// @material-ui/core components
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

// @material-ui/icons
import Room from "@material-ui/icons/Room";
import SubjectIcon from "@material-ui/icons/Subject";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

// Links & Data
import { appointments } from "./data";

// Styles
import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx";
const Theme = createMuiTheme({ palette: { type: "light", primary: green } });

const Content = withStyles(productStyle, { name: "Content" })(
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
      <div className={`${classes.section} cd-section`} {...rest}>
        <h2 className={classes.title}>Main Schedule</h2>
        <GridContainer justify="center">
          <GridItem xs={10}>
            <h5 className={classes.title}>
              Click an event for more info! If you have any questions, ask our
              volunteers!
            </h5>
            <br />
          </GridItem>
          <GridItem xs={10} className={`${classes.mrAuto} ${classes.mlAuto}`}>
            <MuiThemeProvider theme={Theme}>
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
    );
  }
}

SectionMainSchedule.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(productStyle)(SectionMainSchedule);
