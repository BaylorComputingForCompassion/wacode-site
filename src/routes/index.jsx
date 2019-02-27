import LandingPage from "views/LandingPage/LandingPage.jsx";
import LivePage from "views/LivePage/LivePage.jsx";

var indexRoutes = [
  { path: "/", name: "LandingPage", component: LandingPage },
  { path: "/live", name: "LivePage", component: LivePage }
];

export default indexRoutes;
