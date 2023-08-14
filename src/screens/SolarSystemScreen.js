import React from "react";
import MapComponent from "../components/MapComponent";

const SolarSystemScreen = (props) => {
  return <MapComponent {...props} type={"systems"} />;
};

export default SolarSystemScreen;
