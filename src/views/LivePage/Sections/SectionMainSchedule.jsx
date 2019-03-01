import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";

import style from "assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.jsx";

class SectionMainSchedule extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
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
              xs={12}
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
              <Table
                striped
                tableHead={[
                  "Event Name",
                  "Start Time",
                  "End Time",
                  "Location",
                  "Notes"
                ]}
                tableData={[
                  [
                    "Sign-in",
                    "8:15am",
                    "8:45am",
                    "Cashion Academic Center Lobby",
                    "Participants will be able to sign in throughout the day; don't worry if you overslept!"
                  ],
                  [
                    "Wacode Kickoff Presentation",
                    "9:00am",
                    "9:15am",
                    "Bessie Blume Conference Center (Cashion 5th floor)",
                    "Participants will be introduced to our prompts, and also a few words from our sponsors, partners, and team leaders."
                  ],
                  [
                    "Brunch Served",
                    "10:30am",
                    "11:30am",
                    "Cashion Academic Center Lobby",
                    "Make your way to the lobby and have some free brunch on us."
                  ],
                  [
                    "Dinner Served",
                    "4:00pm",
                    "5:00pm",
                    "Cashion Academic Center Lobby",
                    "Take a break and get your last full meal in before the end of the event!"
                  ],
                  [
                    "Hackathon Submissions Last Call",
                    "7:45pm",
                    "8:10pm",
                    "Bessie Blume Conference Center (Cashion 5th floor)",
                    "Participants are encouraged to package up their products and make any finishing touches to their presentations (if they have one)."
                  ],
                  [
                    "Hackathon Judging",
                    "8:15pm",
                    "8:45pm",
                    "Bessie Blume Conference Center (Cashion 5th floor)",
                    "Judges will go around to assess the awesome creations! We take into account technical aptitude, creativity, and (potential) real-world impact."
                  ],
                  [
                    "Awards Ceremony & Prize Distributions",
                    "9:00pm",
                    "9:15pm",
                    "Bessie Blume Conference Center (Cashion 5th floor)",
                    "Hackathon winners will be announced and prizes will be distributed accordingly."
                  ],
                  [
                    "Closing Remarks",
                    "9:15pm",
                    "9:20pm",
                    "Bessie Blume Conference Center (Cashion 5th floor)",
                    "Event leaders will say a final word and conclude the first ever Wacode event! Thanks for coming!"
                  ]
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(style)(SectionMainSchedule);
