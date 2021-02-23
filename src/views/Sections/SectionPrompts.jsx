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
                contentGrid: { xs: 12, sm: 9, md: 8 },
              }}
              tabs={[
                {
                  tabButton: "Mental Health",
                  tabIcon: DirectionsCarIcon,
                  tabContent: (
                    <span style={{ color: "black", textAlign: "left" }}>
                      <p>
                        Mental health is one of the most important concerns of
                        our generation. According to Mental Health America,
                      </p>
                      <ul>
                        <li style={{ fontSize: "14px" }}>
                          Nearly 1 in 5 American adults will have a diagnosable
                          mental health condition in any given year.
                        </li>
                        <li style={{ fontSize: "14px" }}>
                          46 percent of Americans will meet the criteria for a
                          diagnosable mental health condition sometime in their
                          life, and half of those people will develop conditions
                          by the age of 14.
                        </li>
                      </ul>
                      <p>
                        Create a solution that promotes the awareness of mental
                        health issues or aids people in their management of
                        their own mental health.
                      </p>
                    </span>
                  ),
                },
                {
                  tabButton: "Resource Scarcity",
                  tabIcon: PublicIcon,
                  tabContent: (
                    <span style={{ color: "black", textAlign: "left" }}>
                      <p>
                        Due to the COVID-19 pandemic, recent major winter
                        storms, and other natural disasters, many people have
                        been struggling to get food, water, medical care, labor,
                        vaccinations, and other resources for themselves and
                        their families.
                      </p>
                      <p>
                        Create a solution that helps families find the resources
                        that they need, promotes conservation of limited
                        resources, or assists in the allocation of these
                        resources.
                      </p>
                    </span>
                  ),
                },
                {
                  tabButton: "Accessibility",
                  tabIcon: PeopleIcon,
                  tabContent: (
                    <span style={{ color: "black", textAlign: "left" }}>
                      <p>
                        Even now in our highly innovative society, accessibility
                        is often put on the back burner, both in the virtual and
                        physical worlds. There are many types of disabilities,
                        each with their own specific needs for those afflicted
                        to function as well as possible in a society not always
                        able to properly support them. Indiana University lists
                        some of these to be vision, mobility, auditory,
                        neurological, cognitive, medical, and psychological
                        disabilities.
                      </p>
                      <p>
                        Create a solution that promotes, aids in, or expands
                        accessibility, either in the physical or digital world.
                      </p>
                    </span>
                  ),
                },
              ]}
            />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

SectionPrompts.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(productStyle)(SectionPrompts);
