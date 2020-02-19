import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import withStyles from "@material-ui/core/styles/withStyles";

// Core Components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

// Sections for this page
import SectionFAQ from "./Sections/SectionFAQ.jsx";
import SectionAboutUs from "./Sections/SectionAboutUs";
import SectionTeam from "./Sections/SectionTeam";
import SectionSponsors from "./Sections/SectionSponsors";

// Links
import {
  MailToLink,
  TwitterLink,
  C4CWebsiteLink,
  RegistrationLink,
  LandingBackground
} from "constants.js";

// Styles
import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";
const LinkStyle = { color: "#3EAD7B" };
const IconStyle = { marginRight: "10px" };
const TeamMargin = { marginTop: "-150px" };

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
          changeColorOnScroll={{ height: 300, color: "primary" }}
          {...rest}
        />
        <Parallax image={LandingBackground} filter={"dark"}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={8}>
                <h1 className={classes.title}>Welcome to Wacode</h1>
                <h4>
                  Registration is now open for&nbsp;
                  <a href={C4CWebsiteLink}>
                    <span style={LinkStyle}>Baylor C4C&apos;s</span>
                  </a>
                  &nbsp;12-hour hackathon happening&nbsp;
                  <strong>8am - 9pm on Saturday, February 22nd, 2020</strong> at
                  Baylor University! Schedule, prompt, and prize announcements
                  coming soon!
                </h4>
              </GridItem>
              <GridItem xs={12} sm={8}>
                <Button
                  href={RegistrationLink}
                  target={"_blank"}
                  rel="noopener noreferrer"
                  color="danger"
                >
                  <i className="fa fa-id-badge" style={IconStyle} />
                  Register Now!
                </Button>
                &nbsp;
                <Button
                  href={TwitterLink}
                  target={"_blank"}
                  rel="noopener noreferrer"
                  color="info"
                >
                  <i className="fab fa-twitter" style={IconStyle} />
                  Stay in the loop!
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={`${classes.main} ${classes.mainRaised}`}>
          <div className={classes.container}>
            <SectionAboutUs id="about" />
            <SectionTeam style={TeamMargin} id="team" />
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
                    <a href={C4CWebsiteLink} className={classes.block}>
                      Computing for Compassion
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()} , made with ❤️ by&nbsp;
                <a href={MailToLink} style={LinkStyle}>
                  The Wacode Team
                </a>
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
