import React from "react";
import PropTypes from "prop-types";

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
  const { classes, ...rest } = props;
  return (
    <div className={classes.services} {...rest}>
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
                Source:{" "}
                <a href="https://www.areavibes.com/waco-tx/crime/ ">(1)</a>
              </span>
            }
            icon={Gesture}
            iconColor="rose"
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}

SectionPrompts.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(servicesStyle)(SectionPrompts);
