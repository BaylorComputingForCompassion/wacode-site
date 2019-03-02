import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Info from "components/Typography/Info.jsx";

import blogsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx";

import AmericanAirlines from "assets/img/SponsorLogos/AmericanAirlines.png";

function SectionMainPrompt({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.blog}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              className={`${classes.mlAuto} ${classes.mrAuto}`}
            >
              <h2 className={classes.title}>
                American Airlines Challenge
              </h2>
              <br />
              <Card plain blog className={classes.card}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a
                        href="https://github.com/AmericanAirlines/AA-Mock-Engine/wiki/Wacode-2019#wacode-challenge"
                        target={"_blank"}
                      >
                        <img src={AmericanAirlines} alt="..." />
                      </a>
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <Info>
                      <h6 className={classes.cardCategory}>DESCRIPTION</h6>
                    </Info>
                    <h3 className={classes.cardTitle}>
                      <a
                        href="https://github.com/AmericanAirlines/AA-Mock-Engine/wiki/Wacode-2019#wacode-challenge"
                        target={"_blank"}
                      >
                        American Airlines supports our heroes, our well-being,
                        and our social good.
                      </a>
                    </h3>
                    <p className={classes.description1}>
                      Thousands of people fly American each and every day. This
                      awesome responsibility opens the door to incredible
                      opportunities to help one another. American is passionate
                      about giving back. For the specific prompt details &
                      judging criteria...
                      <a
                        href="https://github.com/AmericanAirlines/AA-Mock-Engine/wiki/Wacode-2019#wacode-challenge"
                        target={"_blank"}
                      >
                        {" "}
                        click here!{" "}
                      </a>
                    </p>
                    <p className={classes.author}>
                      <b>Max Team Size: </b> 5 Participants
                      <br />
                      <b>Grand Prize:</b> 30,000 AAdvantage Miles Per Team Member (enough for a
                      round trip economy ticket to any domestic city where
                      American flies, including Hawaii and Alaska!)
                    </p>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

export default withStyles(blogsStyle)(SectionMainPrompt);
