import {
  title,
  mrAuto,
  mlAuto,
  grayColor
} from "assets/jss/material-kit-pro-react.jsx";

const productStyle = {
  mrAuto,
  mlAuto,
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  description: {
    color: grayColor[0]
  },
  apptContentIcon: {
    display: "flex",
    color: "rgba(0, 0, 0, 0.54)"
  },
  apptRow: {
    marginBottom: "12px",
  }
};

export default productStyle;
