import LandingPage from "views/LandingPage/LandingPage.jsx";
import LivePage from "views/LivePage/LivePage.jsx";

var indexRoutes = [
  { path: "/live", name: "LivePage", component: LivePage },
  { path: "/", name: "LandingPage", component: LandingPage },
];

export default indexRoutes;
