import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Gesture from "@material-ui/icons/Gesture";
import FastFood from "@material-ui/icons/Fastfood";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import servicesStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/servicesStyle.jsx";

function SectionPrompts(props) {
  const { classes } = props;
  return (
    <div className={classes.services}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          xs={10}
          className={classNames(
            classes.mlAuto,
            classes.mrAuto,
            classes.textCenter
          )}
        >
          <h2 className={classes.title}>Wacode Challenge</h2>
          <h3 className={classes.description}>
            <b>First Place:</b> $50 Amazon Gift Card Per Team Member
            <br />
            <b>Runner Up:</b> $20 Amazon Gift Card Per Team Member
          </h3>
          <h2 className={classes.title}>Themes</h2>
          <h5 className={classes.description}>
            These optional tracks are meant to highlight some issues in our
            community C4C cares about. We have included some sources to provide
            more information. <b>Max team size is limited to 5.</b>
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer style={{ paddingLeft: "4vw", paddingRight: "4vw" }}>
        <GridItem sm={4} md={4}>
          <InfoArea
            title="1. Education"
            description={
              <span>
                <p>
                  In Waco TX, 70.1% of students are at risk of dropping out of
                  school, leading to an eventual official drop rate reaching
                  40%. Furthermore, 18.6% of students are bilingual and struggle
                  with the English language.{" "}
                </p>
                Sources:{" "}
                <a href="http://www.towncharts.com/Texas/Education/Waco-city-TX-Education-data.html">
                  (1)
                </a>
                , <a href="https://datausa.io/profile/geo/waco-tx/ ">(2)</a>
              </span>
            }
            icon="mode_edit"
            iconColor="rose"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="2. Food Insecurity"
            description={
              <span>
                <p>
                  One in four children in Waco do not have access to three
                  healthy meals a day, and 19% of people overall experience food
                  insecurity.{" "}
                </p>
                Sources:
                <a href="https://baylorlariat.com/2017/11/19/waco-children-struggle-with-homelessness-food-insecurity/">
                  (1)
                </a>
                ,
                <a href="https://www.wacotrib.com/news/education/texas-hunger-initiative-marks-years-of-fighting-food-insecurity/article_57fca5e4-aa81-5cc2-acf1-fbdb9f0552cc.html ">
                  (2)
                </a>
              </span>
            }
            icon={FastFood}
            iconColor="rose"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="3. At-risk-youth"
            description={
              <span>
                <p>
                  Overall, Waco has a higher crime rate than Texas and even the
                  national average.{" "}
                </p>
                Source: <a href="https://www.areavibes.com/waco-tx/crime/ ">(1)</a>
              </span>
            }
            icon={Gesture}
            iconColor="rose"
          />
        </GridItem>
        <GridItem
          md={8}
          sm={8}
          className={classNames(
            classes.mlAuto,
            classes.mrAuto,
            classes.textCenter
          )}
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
            12-hours worth of work. It is not required to make a submission as a
            team though if you do chose to do so, teams will be limited to 5
            individuals.
          </p>
        </GridItem>
        <GridItem
          md={8}
          sm={8}
          className={classNames(
            classes.mlAuto,
            classes.mrAuto,
            classes.textCenter
          )}
        >
          <h3 className={classes.title}>Judging Criteria</h3>
          <p className={classes.description}>
            Impact: How well does the solution address the challenge or problem?
            <br />
            Innovation & Creativity: How creative is the solution? Does it bring
            new ideas and approaches to solving the problem?
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

export default withStyles(servicesStyle)(SectionPrompts);
