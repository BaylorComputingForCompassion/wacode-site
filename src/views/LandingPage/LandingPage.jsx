import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Button from "components/CustomButtons/Button.jsx";

import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";

// Sections for this page
import SectionProduct from "./Sections/SectionProduct.jsx";
import SectionWork from "./Sections/SectionWork.jsx";
import SectionFeatures from "../SectionsPage/Sections/SectionFeatures.jsx";
import SectionSchedule from "./Sections/SectionSchedule";

const dashboardRoutes = [];

class LandingPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Wacode: A Community Hackathon"
          links={<HeaderLinks dropdownHoverColor="info" />}
          fixed
          changeColorOnScroll={{
            height: 300,
            color: "primary"
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/waco_bg.jpg")} filter={"dark"}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6}>
                <h1 className={classes.title}>
                  Your potential.
                  <br />
                  Our passion.
                </h1>
                <h4>
                  Baylor Computing for Compassion wants to bring our community
                  together and promote technology through a day of collaboration
                  and sharing.
                  <br />
                  <br />
                  Register today for our 12-hour community hackathon happening
                  on Saturday, March 2nd, 2019 from 9:00am-9:00pm at the{" "}
                  <a href="https://www.baylor.edu/map/?c=BLUME">
                    <span style={{ color: "#3EAD7B" }}>
                      Bessie Blume Conference Center
                    </span>
                  </a>{" "}
                  on Baylor University&apos;s Campus.
                </h4>
                <br />
                {/* @TODO ADD TYPEFORM LINK*/}
                <Button
                  color="danger"
                  size="lg"
                  href="TYPEFORM LINK HERE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fa fa-id-badge"
                    style={{ marginRight: "10px" }}
                  />
                  Register
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <SectionProduct id="info" />
            <SectionFeatures id="faq" />
            <SectionSchedule id="schedule" />
            <SectionWork id="contact-us" />
          </div>
        </div>
        <Footer
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="http://computingforcompassion.org"
                      className={classes.block}
                    >
                      Baylor Computing for Compassion
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a href="/contact-us" className={classes.block}>
                      Contact Us
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a href="/about-us" className={classes.block}>
                      About us
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()} , made with{" "}
                <Favorite className={classes.icon} /> by{" "}
                <a href="/about-us">The Wacode Team</a>
              </div>
            </div>
          }
        />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
