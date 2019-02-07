import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Code from "@material-ui/icons/Code";
import FormatPaint from "@material-ui/icons/FormatPaint";
import Dashboard from "@material-ui/icons/Dashboard";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
import AccessTime from "@material-ui/icons/AccessTime";
import AttachMoney from "@material-ui/icons/AttachMoney";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.jsx";

import bg from "assets/img/tech_background.png";

function SectionFAQ({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div className="cd-section" {...rest}>
      <div
        className={classes.features5}
        style={{ backgroundImage: `url(${bg})` }}
      >
        <GridContainer>
          <GridItem
            xs={12}
            sm={8}
            md={8}
            className={`${classes.mlAuto} ${classes.mrAuto} ${
              classes.textCenter
            }`}
          >
            <h2 className={classes.title}>Frequently Asked Questions</h2>
          </GridItem>
          <div className={classes.container}>
            <GridContainer className={classes.gridContainer}>
              <GridItem xs={12} md={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={Code}
                  title="What is a hackathon?"
                  description={
                    <p>
                      A hackathon is best described as an &quot;invention
                      marathon.&quot; Anyone who has an interest in technology
                      attends one to learn, build & share their creations over
                      the course of an entire day in a relaxed and welcoming
                      atmosphere.
                    </p>
                  }
                  iconColor="info"
                />
              </GridItem>
              <GridItem xs={12} md={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={FormatPaint}
                  title="Who can attend Wacode?"
                  description={
                    <p>
                      Any community resident or university student over the age
                      of 18 can participate, regardless of area of study,
                      background, or skill level. While this event is not an
                      official MLH sponsored event, we will be requiring all
                      attendants to abide by the{" "}
                      <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">
                        <span style={{ color: "#3EAD7B" }}>
                          MLH Code of Conduct.
                        </span>
                      </a>
                    </p>
                  }
                  iconColor="danger"
                />
              </GridItem>
              <GridItem xs={12} md={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={Dashboard}
                  title="Will Wacode cost me anything?"
                  description={
                    <p>
                      Admission to Wacode is completely free for all attendees.
                      Food and drinks are provided by us through our generous
                      sponsors & community partners.
                    </p>
                  }
                  iconColor="primary"
                />
              </GridItem>
            </GridContainer>
            <GridContainer className={classes.gridContainer}>
              <GridItem xs={12} md={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={ViewCarousel}
                  title="Are teams allowed?"
                  description={
                    <p>
                      We encourage everyone to work with a team! Teams may
                      contain up to 5 people. If you don&apos;t have one before
                      coming to Wacode, no worries! We will have a team-building
                      session at the beginning of the hacking period.
                    </p>
                  }
                />
              </GridItem>
              <GridItem xs={12} md={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={AccessTime}
                  title="What should I plan on bringing?"
                  description={
                    <p>
                      You should bring your computer, chargers, and any other
                      hardware or software you plan on using. WiFi and outlets
                      will be provided but it doesn&apos;t hurt to bring an
                      extra power strip.
                    </p>
                  }
                />
              </GridItem>
              <GridItem xs={12} md={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={AttachMoney}
                  title="What to do if my question wasn't answered?"
                  description={
                    <p>
                      Hey, we&apos;re here to help! Email us at
                      Wacode.Team@Gmail.com or reach out to Computing for
                      Compassion via{" "}
                      <a href="https://www.instagram.com/baylorc4c/">
                        <span style={{ color: "#3EAD7B" }}>Instagram</span>
                      </a>
                    </p>
                  }
                />
              </GridItem>
            </GridContainer>
          </div>
        </GridContainer>
      </div>
    </div>
  );
}

export default withStyles(featuresStyle)(SectionFAQ);
