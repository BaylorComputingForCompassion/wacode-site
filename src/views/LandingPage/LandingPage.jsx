import React from "react";
import PropTypes from "prop-types";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

// Core Components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Button from "components/CustomButtons/Button.jsx";

// Styles
import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";

// Sections for this page
import SectionFAQ from "./Sections/SectionFAQ.jsx";
import SectionAboutUs from "./Sections/SectionAboutUs";
import SectionTeam from "./Sections/SectionTeam";
import SectionSponsors from "./Sections/SectionSponsors";

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
              <GridItem xs={12} sm={8} md={8}>
                <h1 className={classes.title}>Welcome to Wacode</h1>
                <h4>
                  More info coming soon on&nbsp;
                  <a href="http://computingforcompassion.org/">
                    <span style={{ color: "#3EAD7B" }}>Baylor C4C&apos;s</span>
                  </a>
                  &nbsp;12-hour hackathon happening&nbsp;
                  <strong>Saturday, February 22nd, 2020</strong> on Baylor
                  University&apos;s Campus.
                  <b>&nbsp;Registration opens TODAY (02/03) at 7:00pm.</b>
                </h4>
                <br />
                <Button
                  href="https://marioarturolopez.typeform.com/to/PL4xbs"
                  target={"_blank"}
                  rel="noopener noreferrer"
                  color="danger"
                  size="lg"
                >
                  <i
                    className="fa fa-id-badge"
                    style={{ marginRight: "10px" }}
                  />
                  Register Now!
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <SectionAboutUs id="about" />
            <SectionTeam style={{ marginTop: "-150px" }} id="team" />
            <SectionFAQ id="faq" />
            <SectionSponsors id="sponsors" />
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
                      Computing for Compassion
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()} , made with&nbsp;
                <Favorite className={classes.icon} /> by&nbsp;
                <a href="mailto:Wacode.Team@gmail.com">The Wacode Team</a>
              </div>
            </div>
          }
        />
      </div>
    );
  }
}

LandingPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(landingPageStyle)(LandingPage);
