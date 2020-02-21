import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// Core Components
import Card from "components/Card/Card.jsx";
import Muted from "components/Typography/Muted.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

// Assets
import mario from "assets/img/mario_profile.jpeg";
import meghan from "assets/img/meghan_profile.jpeg";
import brandon from "assets/img/brandon_profile.jpeg";
import miranda from "assets/img/miranda_profile.jpeg";
import citlally from "assets/img/citlally_profile.jpg";
import billicarole from "assets/img/billicarole_profile.jpeg";

// Styles
import teamsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.jsx";

// LinkedIn Links
const MarioLinkedInLink = "https://www.linkedin.com/in/mariolopezarturo/";
const MeghanLinkedInLink = "https://www.linkedin.com/in/meghanbibb/";
const BrandonLinkedInLink = "https://www.linkedin.com/in/brandonmmork/";
const MirandaLinkedInLink = "https://www.linkedin.com/in/brandonmmork/";
const CitlallyLinkedInLink =
  "https://www.linkedin.com/in/citlally-ruiz-29429119a/";
const BillicaroleLinkedInLink =
  "https://www.linkedin.com/in/billicarole-evans/";

function SectionTeam({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.team}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              className={`${classes.mlAuto} ${classes.mrAuto} ${classes.textCenter}`}
            >
              <h2 className={classes.title}>Meet The Team</h2>
              <h5 className={classes.description}>
                Baylor Computer Science, Business, and Engineering Students
                working hard to make this event great!
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={6} md={4}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a
                    href={MarioLinkedInLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={mario}
                      alt="Mario Profile"
                      className={classes.img}
                    />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Mario Lopez Martinez</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>President</h6>
                  </Muted>
                  <p className={classes.description}>Computer Science Senior</p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={4}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a
                    href={BrandonLinkedInLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={brandon}
                      alt="Brandon Profile"
                      className={classes.img}
                    />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Brandon Mork</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>Vice President</h6>
                  </Muted>
                  <p className={classes.description}>Computer Science Senior</p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={4}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a
                    href={BillicaroleLinkedInLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={billicarole}
                      alt="Billicarole Profile"
                      className={classes.img}
                    />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Billicarole Evans</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>Treasurer</h6>
                  </Muted>
                  <p className={classes.description}>
                    Mechanical Engineering Senior
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={4}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a
                    href={MirandaLinkedInLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={miranda}
                      alt="Miranda Profile"
                      className={classes.img}
                    />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Miranda Montroy</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>
                      Community Outreach Coordinator
                    </h6>
                  </Muted>
                  <p className={classes.description}>
                    Management Information Systems Sophomore
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={4}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a
                    href={MeghanLinkedInLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={meghan}
                      alt="Meghan Profile"
                      className={classes.img}
                    />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Meghan Bibb</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>
                      Head of Philanthropy
                    </h6>
                  </Muted>
                  <p className={classes.description}>Computer Science Junior</p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={4}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a
                    href={CitlallyLinkedInLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={citlally}
                      alt="Citllaly Profile"
                      className={classes.img}
                    />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Citlally Ruiz</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>Head of Marketing</h6>
                  </Muted>
                  <p className={classes.description}>
                    Computer Science Freshman
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

SectionTeam.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(teamsStyle)(SectionTeam);
