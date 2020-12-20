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

// Styles
import teamsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.jsx";

// Team
import team from "../../team";
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
            {team.map((member, i) => (
              <GridItem key={i} xs={12} sm={6} md={4}>
                <Card profile plain>
                  <CardAvatar profile plain>
                    <a
                      href={member.linkedIn || member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={member.image}
                        alt={`${member.firstName}'s Profile`}
                        className={classes.img}
                      />
                    </a>
                  </CardAvatar>
                  <CardBody>
                    <h4 className={classes.cardTitle}>
                      {member.firstName} {member.lastName}
                    </h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>{member.title}</h6>
                    </Muted>
                    <p className={classes.description}>
                      {member.major} {member.class}
                    </p>
                  </CardBody>
                </Card>
              </GridItem>
            ))}
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

SectionTeam.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(teamsStyle)(SectionTeam);
