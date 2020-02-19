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
  MailToLink
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
        style={{ backgroundImage: `url(${Background})` }}
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
          <div className={classes.container}>
            <GridContainer className={classes.gridContainer}>
              <GridItem sm={12} md={6} lg={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={Code}
                  title="What is a hackathon?"
                  description={
                    <p>
                      A hackathon is best described as an &quot;invention
                      marathon.&quot; A more well-known concept that is similar
                      that of a start-up competition. Anyone who has an interest
                      in innovation can attend to learn, build &amp; share their
                      creations over the course of an entire day in a relaxed
                      and welcoming atmosphere. You don&apos;t have to be a
                      great coder to do well at a hackathon.
                    </p>
                  }
                  iconColor="info"
                />
              </GridItem>
              <GridItem sm={12} md={6} lg={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={SupervisedUserCircle}
                  title="Who can attend Wacode?"
                  description={
                    <p>
                      Any community resident or university student over the age
                      of 18 can participate, regardless of area of study,
                      background, or skill level. While this event is not an
                      official MLH sponsored event, we will be requiring all
                      attendants to abide by the{" "}
                      <a
                        href={CodeOfConductLink}
                        target={"_blank"}
                        rel="noopener noreferrer"
                      >
                        <span style={LinkStyle}>MLH Code of Conduct.</span>
                      </a>{" "}
                      The venue does not allow pets of any kind.
                    </p>
                  }
                  iconColor="danger"
                />
              </GridItem>
              <GridItem sm={12} md={6} lg={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={AttachMoney}
                  title="Will Wacode cost me anything?"
                  description={
                    <p>
                      Admission to Wacode is completely free for all attendees.
                      Food and drinks are provided by us through our generous
                      sponsors &amp; community partners (there will be vegan and
                      vegetarian options available). Shirts, swag, and any of
                      the activities hosted at the event are also open to all at
                      no cost.
                    </p>
                  }
                  iconColor="primary"
                />
              </GridItem>
              <GridItem sm={12} md={6} lg={4} className={classes.gridItem}>
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
              <GridItem sm={12} md={6} lg={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={Work}
                  title="What should I plan on bringing?"
                  description={
                    <p>
                      You should bring your computer, chargers, and any other
                      hardware or software you plan on using. WiFi and outlets
                      will be provided but it doesn&apos;t hurt to bring an
                      extra power strip. Wouldn&apos;t be bad idea to bring a
                      resume to show off to recruiters during the event!
                    </p>
                  }
                />
              </GridItem>
              <GridItem sm={12} md={6} lg={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={Face}
                  title="What if I don’t have a team?"
                  description={
                    <p>
                      Register anyway! If you want to compete by yourself that’s
                      fine, or you want a team but don’t have one, we can help
                      match you with some people the day of the event!
                    </p>
                  }
                />
              </GridItem>
              <GridItem sm={12} md={6} lg={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={Assignment}
                  title="When does registration close?"
                  description={
                    <p>
                      We strongly encourage you to register as early as possible
                      to reserve your shirt and food. All food and swag these
                      will be given out on a first-come-first-serve basis on the
                      day of, prioritizing those who have already registered
                      online. Registration for Wacode Spring 2020 will be open
                      on February 1st at 9:00am.
                    </p>
                  }
                />
              </GridItem>
              <GridItem sm={12} md={6} lg={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={AccessTime}
                  title="What if I can't stay the whole day?"
                  description={
                    <p>
                      It is NOT required to stay at the venue all day. Come for
                      an hour! Come for 12! There is no time requirement for
                      those wanting to participate. To be eligible for prizes
                      you must attend at least one workshop, and also be present
                      at the kickoff ceremony and closing remarks, as well as
                      for the judging period (8:00-9:00pm)
                    </p>
                  }
                />
              </GridItem>
              <GridItem sm={12} md={6} lg={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={Dashboard}
                  title="What to do if my question wasn't answered?"
                  description={
                    <p>
                      Hey, we&apos;re here to help! Email us at
                      <a
                        href={MailToLink}
                        target={"_blank"}
                        rel="noopener noreferrer"
                      >
                        <span style={LinkStyle}>&nbsp;Team@Wacode.org</span>
                      </a>
                      &nbsp;or reach out to us via&nbsp;
                      <a
                        href={InstagramLink}
                        target={"_blank"}
                        rel="noopener noreferrer"
                      >
                        <span style={LinkStyle}>Instagram</span>
                      </a>
                      ,&nbsp;
                      <a
                        href={FacebookLink}
                        target={"_blank"}
                        rel="noopener noreferrer"
                      >
                        <span style={LinkStyle}>Facebook</span>
                      </a>
                      ,&nbsp;or&nbsp;
                      <a
                        href={TwitterLink}
                        target={"_blank"}
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
  classes: PropTypes.object.isRequired
};

export default withStyles(featuresStyle)(SectionFAQ);
