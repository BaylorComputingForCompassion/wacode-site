import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";

// @material-ui/icons
import PublicIcon from "@material-ui/icons/Public";
import PeopleIcon from "@material-ui/icons/People";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";

// Styles
import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx";

class SectionPrompts extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className={`${classes.section} cd-section`} {...rest}>
        <h2 className={classes.title}>Prompts</h2>
        <GridContainer justify="center">
          <GridItem xs={11}>
            <NavPills
              color="primary"
              horizontal={{
                tabsGrid: { xs: 12, sm: 3, md: 4 },
                contentGrid: { xs: 12, sm: 9, md: 8 }
              }}
              tabs={[
                {
                  tabButton: "Road Safety",
                  tabIcon: DirectionsCarIcon,
                  tabContent: (
                    <span style={{ color: "black", textAlign: "left" }}>
                      <p>
                        In 2013, low- and middle-income countries had higher
                        road traffic fatality rates per 100 000 population (24.1
                        and 18.4, respectively) compared to high-income
                        countries (9.2). The African region had the highest road
                        traffic fatality rate, at 26.6, while the European
                        region had the lowest rate, at 9.3.
                      </p>
                      <br />
                      <p>
                        Your task is to create a product that can help to make
                        the roads a safer place for drivers around the world.
                      </p>
                    </span>
                  )
                },
                {
                  tabButton: "Sustainability",
                  tabIcon: PublicIcon,
                  tabContent: (
                    <span style={{ color: "black", textAlign: "left" }}>
                      <p>
                        Sustainability in the environment is the defining issue
                        of our time and we are at a defining moment. From
                        shifting weather patterns that threaten food production,
                        to rising sea levels that increase the risk of
                        catastrophic flooding, the impacts of the lack of
                        environmental sustainability are global in scope and
                        unprecedented.
                      </p>
                      <br />
                      <p>
                        Your task is to create a product that can help promote,
                        create, or improve existing solutions for a more
                        environmentally sustainable society.
                      </p>
                    </span>
                  )
                },
                {
                  tabButton: "Violence Prevention",
                  tabIcon: PeopleIcon,
                  tabContent: (
                    <span style={{ color: "black", textAlign: "left" }}>
                      <p>
                        Homicide estimates: Globally, interpersonal violence
                        resulted in some 475 000 homicides in 2012 (overall rate
                        of 6.7 per 100 000 population), of which 60% were in
                        males aged 15-44 years, making homicide the third
                        leading cause of death for males in this age group. In
                        addition, of all adults, one in four report having been
                        physically abused as children; one in five women and one
                        in 10 men report having been sexually abused as
                        children; one in three women report having been victims
                        of physical and/or sexual intimate partner violence in
                        their lifetime, and one in 17 older people report being
                        abused in the past month.
                      </p>
                      <br />
                      <p>
                        Your task is to create a product that can help with
                        various violence reduction programs around our
                        community.
                      </p>
                    </span>
                  )
                }
              ]}
            />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

SectionPrompts.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(productStyle)(SectionPrompts);
