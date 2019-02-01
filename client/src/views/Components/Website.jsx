/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Hidden from "@material-ui/core/Hidden";

// core components
import Heading from "components/Heading/Heading.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import websiteStyle from "assets/jss/material-dashboard-pro-react/views/websiteStyle";

/* Link we're going to be displaying in our iframe */
const WebsiteLink = "INSERT WEBSITE LINK HERE";

function Website({ ...props }) {
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>

        {/* Title above iframe */}
        <Heading
          textAlign="center"
          title="Embedded Website Example"
          category={
            <span>
              Handcrafted by our friends from{" "}
              <a target="_blank" href={WebsiteLink}>
                AdAstra
              </a>
            </span>
          }
        />

        {/* Styled card containing iframe (website) */}
        {/* One issue I've noticed with iframe is you usually can't embed */}
        {/* page if you're not under the same domain; example won't work. */}
        <Card plain>
          <CardBody plain>
            <Hidden only={["sm", "xs"]} implementation="css">
              <iframe
                className={props.classes.iframe}
                src={WebsiteLink}
                title="Website iframe"
              >
                <p>Your browser does not support iframes.</p>
              </iframe>
            </Hidden>
            <Hidden only={["lg", "md"]} implementation="css">
              <GridItem xs={12} sm={12} md={6}>
                <h5>
                  The website is visible on desktop mode. To see an example embedded website, check them out there.
                  <a
                    href={WebsiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Website Link
                  </a>
                </h5>
              </GridItem>
            </Hidden>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

Website.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(websiteStyle)(Website);
