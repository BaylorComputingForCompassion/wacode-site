import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Code from "@material-ui/icons/Code";
import Work from "@material-ui/icons/Work";
import Dashboard from "@material-ui/icons/Dashboard";
import AccessTime from "@material-ui/icons/AccessTime";
import Assignment from "@material-ui/icons/Assignment";
import AttachMoney from "@material-ui/icons/AttachMoney";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
import SupervisedUserCircle from "@material-ui/icons/SupervisedUserCircle";

// Core Components
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

// Assets
import Background from "assets/img/tech_background.png";

// Links
import {
  CodeOfConductLink,
  InstagramLink,
  FacebookLink,
  TwitterLink,
  MailToLink,
} from "constants.js";

// Styles
import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.jsx";
const LinkStyle = { color: "#3EAD7B" };

function SectionFAQ({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div className="cd-section" {...rest}>
      <div
        className={classes.features5}
        style={{ backgroundImage: `url(${Background})`, padding: "20px" }}
      >
        <GridContainer>
          <GridItem
            xs={12}
            sm={12}
            md={8}
            className={`${classes.mlAuto} ${classes.mrAuto} ${classes.textCenter}`}
          >
            <h2 className={classes.title}>Rules &amp; FAQs</h2>
          </GridItem>
          <div className={`${classes.container}`} style={{ padding: 0 }}>
            <GridContainer className={classes.gridContainer}>
              <GridItem sm={12} md={6} lg={4} className={classes.gridItem}>
                <InfoArea
                  style={{ padding: 0 }}
                  vertical
                  className={classes.infoArea5}
                  icon={Code}
                  title="What is a hackathon?"
                  description={
                    <p>
                      A hackathon is best described as an &quot;invention
                      marathon.&quot; Anyone who has an interest in innovation
                      can attend to learn, build &amp; share their creations
                      over the course of an entire day in a relaxed welcoming
                      atmosphere. You don&apos;t have to be a great great coder
                      to do well at a hackathon and have fun!
                    </p>
                  }
                  iconColor="info"
                />
              </GridItem>
              <GridItem sm={12} md={6} lg={4} className={classes.gridItem}>
                <InfoArea
                  style={{ padding: 0 }}
                  vertical
                  className={classes.infoArea5}
                  icon={SupervisedUserCircle}
                  title="Who can attend Wacode?"
                  description={
                    <p>
                      Any student can participate, regardless of area of study,
                      background, or skill level. Participants can refer to the
                      &nbsp;
                      <a
                        href={CodeOfConductLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span style={LinkStyle}>MLH Code of Conduct</span>
                      </a>{" "}
                      for more information. &nbsp;The venue does not allow pets
                      of any kind.
                    </p>
                  }
                  iconColor="danger"
                />
              </GridItem>
              <GridItem sm={12} md={6} lg={4} className={classes.gridItem}>
                <InfoArea
                  style={{ padding: 0 }}
                  vertical
                  className={classes.infoArea5}
                  icon={AttachMoney}
                  title="Will Wacode cost me anything?"
                  description={
                    <p>
                      Wacode is completely free for all participants! This
                      includes the event itself as well as any activities and
                      workshops that are part of it!
                    </p>
                  }
                  iconColor="primary"
                />
              </GridItem>
              <GridItem sm={12} md={6} lg={4} className={classes.gridItem}>
                <InfoArea
                  style={{ padding: 0 }}
                  vertical
                  className={classes.infoArea5}
                  icon={ViewCarousel}
                  title="Are teams allowed?"
                  description={
                    <p>
                      We encourage everyone to work with a team! Teams may
                      contain up to 5 people. Don&apos;t worry if you don&apos;t
                      have one before coming to Wacode! We will have a
                      team-building session at the beginning of the hacking
                      period.
                    </p>
                  }
                />
              </GridItem>
              <GridItem sm={12} md={6} lg={4} className={classes.gridItem}>
                <InfoArea
                  style={{ padding: 0 }}
                  vertical
                  className={classes.infoArea5}
                  icon={Work}
                  title="What do I need to participate?"
                  description={
                    <p>
                      All you need is your computer, a WiFi connection, and any
                      other hardware or software you plan on using. Please also
                      have a microphone and optionally a camera prepared in
                      order talk to your teammates and the event staff. It also
                      wouldn&apos;t be bad idea to have a resume prepared to
                      show off to recruiters during the event!
                    </p>
                  }
                />
              </GridItem>
              <GridItem sm={12} md={6} lg={4} className={classes.gridItem}>
                <InfoArea
                  style={{ padding: 0 }}
                  vertical
                  className={classes.infoArea5}
                  icon={Face}
                  title="What if I don’t have a team?"
                  description={
                    <p>
                      Register anyway! You can choose to compete by yourself or
                      you can attend the team-building session at the beginning
                      of the event to find some teammates!
                    </p>
                  }
                />
              </GridItem>
              <GridItem sm={12} md={6} lg={4} className={classes.gridItem}>
                <InfoArea
                  style={{ padding: 0 }}
                  vertical
                  className={classes.infoArea5}
                  icon={Assignment}
                  title="When does registration open?"
                  description={
                    <p>
                      We strongly encourage you to register as early as possible
                      to reserve your spot! Registration for Wacode Spring 2021
                      will open on February 1st at 9:00am.
                    </p>
                  }
                />
              </GridItem>
              <GridItem sm={12} md={6} lg={4} className={classes.gridItem}>
                <InfoArea
                  style={{ padding: 0 }}
                  vertical
                  className={classes.infoArea5}
                  icon={AccessTime}
                  title="What if I can't stay the whole day?"
                  description={
                    <p>
                      It is NOT required to stay in the Discord all day. Come
                      for an hour! Come for 12! However, to be eligible for
                      prizes, you must be present at the kickoff ceremony, the
                      judging period, and closing ceremony (see the schedule for
                      more details).
                    </p>
                  }
                />
              </GridItem>
              <GridItem sm={12} md={6} lg={4} className={classes.gridItem}>
                <InfoArea
                  style={{ padding: 0 }}
                  vertical
                  className={classes.infoArea5}
                  icon={Dashboard}
                  title="What to do if my question wasn't answered?"
                  description={
                    <p>
                      Hey, we&apos;re here to help! Email us at
                      <a
                        href={MailToLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span style={LinkStyle}>
                          &nbsp;Wacode.Team@gmail.com
                        </span>
                      </a>
                      &nbsp;or reach out to us via&nbsp;
                      <a
                        href={InstagramLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span style={LinkStyle}>Instagram</span>
                      </a>
                      ,&nbsp;
                      <a
                        href={FacebookLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span style={LinkStyle}>Facebook</span>
                      </a>
                      ,&nbsp;or&nbsp;
                      <a
                        href={TwitterLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span style={LinkStyle}>Twitter</span>
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

SectionFAQ.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles({
  ...featuresStyle,
})(SectionFAQ);
