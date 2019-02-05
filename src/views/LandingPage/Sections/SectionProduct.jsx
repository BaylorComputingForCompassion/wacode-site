import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import Favorite from "@material-ui/icons/Favorite";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx";

class SectionProduct extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={8} md={8}>
            <h2 className={classes.title}>Let&apos;s talk tech</h2>
            <h5 className={classes.description}>
              The Wacode team wants participants (students, professionals, and
              anyone interested in learning about emerging technologies) to
              learn new skills and meet new people who are also interested in
              expanding their technical knowledge and growing as technical &
              entrepreneurial professionals. Members of this event will also be
              able to engage in a 12-hour hackathon that will take course during
              the event.
              <br />
              <br/>
              Sponsors will be able to connect with local talent through
              workshops and activities during the event; they will be able to
              host a booth and activities at the venue in order to engage with
              participants and provide them an opportunity to win prizes, gain
              technical mentorship, build a stronger professional network, and
              even invite qualified candidates to interview.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                title="Learn Modern Development Techniques"
                description="Bacon ipsum dolor amet dolore in pork ea picanha. Pork belly fugiat leberkas bresaola prosciutto aliqua hamburger rump brisket exercitation sed."
                icon={Code}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                title="Code For Good"
                description="Bacon ipsum dolor amet dolore corned beef null brisket pork belly tenderloin in pork ea picanha. Pork belly landjaeger consequat pig filet mignon fugiat leberkas bresaola prosciutto."
                icon={Favorite}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                title="Built Your Professional Network"
                description="Bacon ipsum dolor amet dolore corned beef nulla frankfurter tongue brisket pork belly tenderloin in pork ea picanha. Pork belly landjaeger consequat pig hamburger rump brisket exercitation sed."
                icon={Group}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(SectionProduct);
