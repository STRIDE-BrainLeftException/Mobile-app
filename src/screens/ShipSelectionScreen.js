import React, { useState } from "react";
import { View, StyleSheet, ImageBackground, StatusBar } from "react-native";
import ShipViewComponent from "../components/ShipViewComponent";

const shipData = [
  {
    title: "Star Dust C90",
    type: "HyperStride",
    engine: "Hyper Thrusters | 34LYpK",
    description:
      "Lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "899Ñ",
    passengers: "200",
    arrivalTime: "3 days",
    image: require("../assets/images/Booking_Process/Ship_Selection_Screen_1/Star-dust-ship-img.png"),
    visualArchive: [
      require("../assets/images/Booking_Process/Ship_Selection_Screen_1/img-1.png"),
      require("../assets/images/Booking_Process/Ship_Selection_Screen_1/img-2.png"),
      require("../assets/images/Booking_Process/Ship_Selection_Screen_1/img-3.png"),
    ],
  },
  {
    title: "Exploriz 69",
    type: "Hib 2.0",
    engine: "Hi-Nova Thrusters | 16LYpK",
    description:
      "Lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "648Ñ",
    passengers: "600",
    arrivalTime: "761 days",
    image: require("../assets/images/Booking_Process/Ship_Selection_Screen_2/exploeriz-ship-img.png"),
    visualArchive: [
      require("../assets/images/Booking_Process/Ship_Selection_Screen_2/img-1.png"),
      require("../assets/images/Booking_Process/Ship_Selection_Screen_2/img-2.png"),
      require("../assets/images/Booking_Process/Ship_Selection_Screen_2/img-3.png"),
    ],
  },
];

const ShipSelectionScreen = () => {
  const [selectedShipID, setSelectedShipID] = useState(0);

  const handleShipSelection = {
    next: () => {
      if (selectedShipID < shipData.length - 1) {
        setSelectedShipID(selectedShipID + 1);
      } else {
        setSelectedShipID(0);
      }
    },

    previous: () => {
      if (selectedShipID > 0) {
        setSelectedShipID(selectedShipID - 1);
      } else {
        setSelectedShipID(shipData.length - 1);
      }
    },
  };

  return (
    <ImageBackground
      source={require("../assets/images/Booking_BG.png")}
      style={styles.backgroundImage}
    >
      <StatusBar />
      <ShipViewComponent
        shipData={shipData[selectedShipID]}
        handleShipSelection={handleShipSelection}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
});

export default ShipSelectionScreen;
