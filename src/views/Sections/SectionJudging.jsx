import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

import servicesStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/servicesStyle.jsx";

function SectionJudging(props) {
  const { classes, ...rest } = props;
  return (
    <div className={`${classes.services} cd-section`} {...rest}>
      <GridContainer>
        <GridItem
          xs={10}
          sm={8}
          className={`${classes.mlAuto} ${classes.mrAuto} ${classes.textCenter}`}
        >
          <h2 className={classes.title}>Judging Criteria</h2>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem
          sm={8}
          className={`${classes.mlAuto} ${classes.mrAuto} ${classes.textCenter}`}
        >
          <h3 className={classes.title}>What is an acceptable project?</h3>
          <p className={classes.description}>
            You can build an app, build a website, create a strategy or business
            plan (must provide detailed outline, consider
            implementation/operation), design a product. Final judging will
            consist of 2-3 minute presentation on your project. The presence of
            a “product” will increase your chances of scoring higher. By
            “product” we mean proper presentation (PowerPoint, Prezi, skit/play,
            etc.), website, mobile application, product prototype or design
            documents (it doesn’t need to be finished and/or working). We don’t
            need ALL of these, we simply ask that you show us at least one
            during our judging. Essentially, you should have something to show
            12-hours worth of work.
          </p>
        </GridItem>
        <GridItem
          sm={8}
          className={`${classes.mlAuto} ${classes.mrAuto} ${classes.textCenter}`}
        >
          <h3 className={classes.title}>Judging Criteria</h3>
          <p className={classes.description}>
            Impact: How well does the solution address the challenge or problem?
            <br />
            Innovation &amp; Creativity: How creative is the solution? Does it
            bring new ideas and approaches to solving the problem?
            <br />
            Sustainability: Is the solution sustainable within the context of
            the Waco community it’s aiming to impact?
            <br />
            Design: Is the solution well thought out and designed?
            <br />
            *Completeness of Solution: Is the solution finished? Does it work?
            Is there a roadmap for future enhancements?
          </p>
        </GridItem>
      </GridContainer>
    </div>
  );
}

SectionJudging.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(servicesStyle)(SectionJudging);
