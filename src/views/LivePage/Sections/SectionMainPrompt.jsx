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
    <div className="cd-section" {...rest} style={{ marginTop: "-100px" }}>
      <div className={classes.blog}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem className={`${classes.mlAuto} ${classes.mrAuto}`}>
              <h2 className={classes.title}>American Airlines Challenge⁽²⁾</h2>
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
                        style={{ color: "#3EAD7B" }}
                      >
                        {" "}
                        click here!{" "}
                      </a>
                      .{" "}
                      <b>

                      </b>
                    </p>
                    <p className={classes.author}>
                      <b>Max Team Size: </b> 5 Participants
                      <br />
                      <b>Grand Prize:</b>
                      &nbsp;
                      <a
                        style={{ color: "#3EAD7B" }}
                        href="https://github.com/AmericanAirlines/AA-Mock-Engine/wiki/Wacode-2019#prizes"
                        target={"_blank"}
                      >
                        30,000 AAdvantage Miles Per Team Member (enough for a
                        Member (enough for a round trip economy ticket to any
                        any domestic city where American flies, including Hawaii
                        Alaska!)
                      </a>
                      ⁱ
                    </p>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
          </GridContainer>
          <p className={classes.description}>
            ⁱNominal service fee for booking travel is not included. Miles must
            must be redeemed in the MileSAAver category of service to obtain
            tickets to the regions mentioned above.
            <br />
            ²Judging criteria and challenge requirements are solely up to
            American Airlines representatives; this is separate from the Wacode
            challenge stated above. You can only submit one project per
            challenge.
          </p>
        </div>
      </div>
    </div>
  );
}

export default withStyles(blogsStyle)(SectionMainPrompt);
