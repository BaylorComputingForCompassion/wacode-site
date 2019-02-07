import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Muted from "components/Typography/Muted.jsx";

import teamsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.jsx";

import mario from "assets/img/mario_profile.jpeg";
import brandon from "assets/img/brandon_profile.jpeg";
import miranda from "assets/img/miranda_profile.jpeg";
import scotty from "assets/img/placeholder.jpg";

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
              md={8}
              className={`${classes.mlAuto} ${classes.mrAuto} ${
                classes.textCenter
              }`}
            >
              <h2 className={classes.title}>Meet The Team</h2>
              <h5 className={classes.description}>
                Baylor Computer Science, Business, and Engineering Students, as
                well as Waco Residents whose sole mission is to establish
                something great for you.
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={6} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.linkedin.com/in/mariolopezarturo/">
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
                    <h6 className={classes.cardCategory}>
                      Co-Founder & President
                    </h6>
                  </Muted>
                  <p className={classes.description}>
                    Baylor Computer Science Junior, Software Engineer, Meeting
                    Maniac.
                  </p>
                </CardBody>
                <CardFooter profile className={classes.justifyContent}>
                  <Button
                    href="mailto:Mario_Lopez@Baylor.edu"
                    justIcon
                    simple
                    color="github"
                    className={classes.btn}
                  >
                    <i className="fas fa-envelope" />
                  </Button>
                  <Button
                    href="https://www.linkedin.com/in/mariolopezarturo/"
                    justIcon
                    simple
                    color="linkedin"
                    className={classes.btn}
                  >
                    <i className="fab fa-linkedin" />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="#scotty" onClick={e => e.preventDefault()}>
                    <img
                      src={scotty}
                      alt="Scotty Profile"
                      className={classes.img}
                    />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Scotty Shaw</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>
                      Co-Founder & Hackathon Mentor
                    </h6>
                  </Muted>
                  <p className={classes.description}>
                    Tried and True Wacoan. Hackathon Guru. Mr.
                    Plan-for-the-best.
                  </p>
                </CardBody>
                <CardFooter profile className={classes.justifyContent}>
                  <Button
                    href="mailto:ScottyShaw1@Gmail.com"
                    justIcon
                    simple
                    color="github"
                    className={classes.btn}
                  >
                    <i className="fas fa-envelope" />
                  </Button>
                  <Button
                    href="#scotty_profile"
                    justIcon
                    simple
                    color="linkedin"
                    className={classes.btn}
                  >
                    <i className="fab fa-linkedin" />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.linkedin.com/in/miranda-montroy-78107117b/">
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
                    Baylor Computer Science Freshman. Short but savage.
                    Let&apos;s talk!
                  </p>
                </CardBody>
                <CardFooter profile className={classes.justifyContent}>
                  <Button
                    href="mailto:Miranda_Montroy1@Baylor.edu"
                    justIcon
                    simple
                    color="github"
                    className={classes.btn}
                  >
                    <i className="fas fa-envelope" />
                  </Button>
                  <Button
                    href="https://www.linkedin.com/in/miranda-montroy-78107117b/"
                    justIcon
                    simple
                    color="linkedin"
                    className={classes.btn}
                  >
                    <i className="fab fa-linkedin" />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.linkedin.com/in/brandonmmork/">
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
                    <h6 className={classes.cardCategory}>
                      Vice President & Logistics Coordinator
                    </h6>
                  </Muted>
                  <p className={classes.description}>
                    Baylor Computer Science Junior. Right-hand man. Sends emails
                    at 2am.
                  </p>
                </CardBody>
                <CardFooter profile plain className={classes.justifyContent}>
                  <Button
                    href="mailto:Brandon_Mork@Baylor.edu"
                    justIcon
                    simple
                    color="github"
                    className={classes.btn}
                  >
                    <i className="fas fa-envelope" />
                  </Button>
                  <Button
                    href="https://www.linkedin.com/in/brandonmmork/"
                    justIcon
                    simple
                    color="linkedin"
                    className={classes.btn}
                  >
                    <i className="fab fa-linkedin" />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

export default withStyles(teamsStyle)(SectionTeam);
