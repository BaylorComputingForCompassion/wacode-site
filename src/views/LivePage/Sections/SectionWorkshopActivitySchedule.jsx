import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";

import style from "assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.jsx";

class SectionWorkshopActivitySchedule extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div
        {...rest}
        className="cd-section"
        id="contentAreas"
        style={{ paddingBottom: "4vh" }}
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
                Workshop & Activity Schedule
              </h2>
              <br />
              <Table
                striped
                tableHead={[
                  "Event Name",
                  "Host",
                  "Start Time",
                  "End Time",
                  "Location",
                  "Notes"
                ]}
                tableData={[
                  [
                    "Intro to React Workshop",
                    "John Kahn, American Airlines",
                    "9:30am",
                    "10:30am",
                    "Workshop Room (Cashion 501)",
                    "Build reactive web apps! Great learning opportunity to get you off the ground for the competition."
                  ],
                  [
                    "Intro to Functional Programming",
                    "Tyler Hartwig, Pariveda Solutions",
                    "11:30am",
                    "12:20pm",
                    "Workshop Room (Cashion 501)",
                    "Functional programming? Come and learn this programming paradigm using pure functions and immutable values."
                  ],
                  [
                    "Introduction to iOS",
                    "Scotty Shaw, Tech Tree Root",
                    "12:30pm",
                    "1:20pm",
                    "Workshop Room (Cashion 501)",
                    "A taste of mobile development! Come and learn a bit about developing apps for iPhones and iPads."
                  ],
                  [
                    "Intro to Serverless Framework",
                    "Mason Everett, Credera",
                    "1:30pm",
                    "2:20pm",
                    "Workshop Room (Cashion 501)",
                    "Learn about serverless framework and how to use it to scale your apps!"
                  ],
                  [
                    "Introduction to APIs with Google Maps",
                    "Zach Eisenhauer, Agglo",
                    "2:30pm",
                    "3:30pm",
                    "Workshop Room (Cashion 501)",
                    "What is an API? How can you use them to integrate cool services into your apps? Come and check it out!"
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

export default withStyles(style)(SectionWorkshopActivitySchedule);
