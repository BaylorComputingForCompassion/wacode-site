import React from "react";
import PropTypes from "prop-types";
import { TwitterTimelineEmbed } from "react-twitter-embed";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

// Sections
import SectionPrompts from "./Sections/SectionPrompts";
import SectionLocation from "./Sections/SectionLocation";
import SectionMainSchedule from "./Sections/SectionMainSchedule";
import SectionSponsors from "./Sections/SectionSponsors";

// Links
import { TwitterLink } from "constants.js";

// Styles
import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";
import MainFooter from "components/Footer/MainFooter";
import MainHeader from "components/Header/MainHeader";
import HeaderLinksLive from "components/Header/HeaderLinksLive";

const IconStyle = { marginRight: "10px" };

class LivePage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <MainHeader {...rest}>
          <HeaderLinksLive />
        </MainHeader>
        <Parallax image={require("assets/img/tech_background.png")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12}>
                <h2 className={classes.title}>Welcome to Wacode!</h2>
                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="wacodeteam"
                  options={{
                    width: "100%",
                    height: "50vh"
                  }}
                  theme="light"
                />
                <Button
                  color="info"
                  href={TwitterLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter" style={IconStyle} />
                  Follow Us!
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={`${classes.main} ${classes.mainRaised}`}>
          <div className={classes.container}>
            <SectionLocation id="venue" />
            <SectionMainSchedule id="schedule" />
            <SectionPrompts id="prompts" />
            <SectionSponsors id="sponsors" />
          </div>
        </div>
        <MainFooter />
      </div>
    );
  }
}

LivePage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(landingPageStyle)(LivePage);
