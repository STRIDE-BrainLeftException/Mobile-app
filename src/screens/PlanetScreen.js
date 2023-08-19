import React from "react";
import MapComponent from "../components/MapComponent";

const PlanetScreen = (props) => {
  return <MapComponent {...props} type={"planets"} />;
};

export default PlanetScreen;
