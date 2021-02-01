import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// Core Components
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

// Sections for this page
import SectionTeam from "./Sections/SectionTeam";
import SectionFAQ from "./Sections/SectionFAQ.jsx";
import SectionAboutUs from "./Sections/SectionAboutUs";
import SectionSponsors from "./Sections/SectionSponsors";

// Links
import {
  TwitterLink,
  C4CWebsiteLink,
  RegistrationLink,
  LandingBackground,
  DiscordLink,
} from "constants.js";

// Styles
import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";
import MainFooter from "components/Footer/MainFooter";
import MainHeader from "components/Header/MainHeader";
import { green } from "@material-ui/core/colors";
const TeamMargin = { marginTop: "-150px" };
const IconStyle = { marginRight: "10px" };
const LinkStyle = { color: "#3EAD7B" };

class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.changeBannerPos = this.changeBannerPos.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;

    window.addEventListener("scroll", this.changeBannerPos);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeBannerPos);
  }

  changeBannerPos() {
    const { classes } = this.props;

    if (window.pageYOffset > 300) {
      document
        .getElementsByClassName("banner")[0]
        .classList.remove(classes.bannerNotScrolled);
      document
        .getElementsByClassName("banner")[0]
        .classList.add(classes.bannerScrolled);
    } else {
      document
        .getElementsByClassName("banner")[0]
        .classList.add(classes.bannerNotScrolled);
      document
        .getElementsByClassName("banner")[0]
        .classList.remove(classes.bannerScrolled);
    }
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <MainHeader {...rest}>
          <HeaderLinks />
        </MainHeader>
        <Parallax image={LandingBackground} filter="dark">
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={8}>
                <h1 className={classes.title}>Welcome to Wacode!</h1>
                <h4>
                  Pre-registration is now open for&nbsp;
                  <a href={C4CWebsiteLink}>
                    <span style={LinkStyle}>
                      Computing For Compassion&apos;s
                    </span>
                  </a>{" "}
                  <strong>virtual</strong> 24-hour hackathon happening beginning
                  at <strong>11am CST on Saturday, February 27th, 2021</strong>{" "}
                  at Baylor University! Schedule, prompt, and prize
                  announcements coming soon!
                </h4>
              </GridItem>
              <GridItem xs={12} sm={8}>
                <Button
                  href={RegistrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="danger"
                >
                  <i className="fa fa-id-badge" style={IconStyle} />
                  Register Now!
                </Button>
                &nbsp;
                <Button
                  href={DiscordLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="info"
                  className={classes.discordButton}
                  style={{ backgroundColor: "#7289DA" }}
                >
                  <i className="fab fa-discord" style={IconStyle} />
                  Join our Discord!
                </Button>
                &nbsp;
                <Button
                  href={TwitterLink}
                  target="_blank"
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
        <MainFooter />
        <div
          className={`${classes.banner} ${classes.bannerNotScrolled} banner`}
        >
          Registration is now open for Wacode 2021! Click{" "}
          <a href={RegistrationLink}>here</a> to register!
        </div>
      </div>
    );
  }
}

LandingPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles({
  ...landingPageStyle,
  discordButton: {
    boxShadow:
      "0 2px 2px 0 rgb(114 137 218 / 14%), 0 3px 1px -2px rgb(114 137 218 / 20%), 0 1px 5px 0 rgb(114 137 218 / 12%)",
    "&:hover": {
      boxShadow:
        "0 14px 26px 0 rgb(114 137 218 / 14%), 0 4px 23px 0px rgb(114 137 218 / 20%), 0 8px 10px 5px rgb(114 137 218 / 12%)",
    },
  },
  banner: {
    width: "100%",
    height: "50px",
    lineHeight: "50px",
    backgroundColor: green["700"],
    color: "white",
    textAlign: "center",
    left: 0,
    position: "fixed",
    zIndex: 100,
    transition: "0.5s all",
  },
  bannerNotScrolled: {
    top: "100px",
  },
  bannerScrolled: {
    top: "70px",
  },
})(LandingPage);
