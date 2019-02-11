import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import workStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/workStyle.jsx";

class SectionWork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      org_name: "",
      name: "",
      message: ""
    };
  }
  setMessage(e) {
    this.setState = {
      message: e.valueOf()
    };
  }
  setOrgName(e) {
    this.setState = {
      org_name: e.target.org_name.valueOf()
    };
  }
  setName(e) {
    this.setState = {
      name: e.valueOf()
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={8} md={8}>
            <h2 className={classes.title}>Work with us</h2>
            <h4 className={classes.description}>
              Wacode is looking for sponsors and community partners. We want to
              find business and organizations who believe and support our
              mission of bringing technology to our local community, and
              providing a platform for our flourishing tech community.
            </h4>
            <form>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Your organization"
                    id="org_name"
                    onChange={this.setOrgName}
                    value={this.state.org_name}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Your Name"
                    id="name"
                    onChange={this.setName}
                    value={this.state.name}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: this.setName(this.valueOf())
                    }}
                  />
                </GridItem>
                <CustomInput
                  labelText="Your Message"
                  id="message"
                  value={this.state.message}
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textArea
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5,
                    onChange: this.setMessage(this.valueOf())
                  }}
                />
                <GridItem
                  xs={12}
                  sm={4}
                  md={4}
                  className={`${classes.mrAuto} ${classes.mlAuto}`}
                >
                  <Button
                    href={`mailto:Wacode.Team@Gmail.com?subject=Wacode Sponsorship Inquiry&body=My name is ${this.state.name.valueOf()} with ${this.state.org_name.valueOf()} and we'd like to help out.%0A%0A ${this.state.message.valueOf()}`}
                    color="primary"
                  >
                    Send Message
                  </Button>
                </GridItem>
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(workStyle)(SectionWork);
