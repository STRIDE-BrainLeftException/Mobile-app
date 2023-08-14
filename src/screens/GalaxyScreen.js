import React from "react";
import MapComponent from "../components/MapComponent";

const GalaxyScreen = (props) => {
  return <MapComponent {...props} type={"galaxies"} />;
};

export default GalaxyScreen;
