import React from "react";
import { View, StyleSheet, ImageBackground, StatusBar } from "react-native";
import ShipViewComponent from "../components/ShipViewComponent";

const shipData = [
  {
    title: "Star Dust C90",
    description:
      "Lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "899N",
    passengers: "200",
    arrivalTime: "3",
    image: require("../assets/images/Booking_Process/Ship_Selection_Screen_1/Star-dust-ship-img"),
    visualArchive: [
      "../assets/images/Booking_Process/Ship_Selection_Screen_1/img-1.png",
      "../assets/images/Booking_Process/Ship_Selection_Screen_1/img-2.png",
      "../assets/images/Booking_Process/Ship_Selection_Screen_1/img-3.png",
    ],
  },
  {
    title: "Exploriz 69",
    description:
      "Lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "899N",
  },
];

const ShipSelectionScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/images/Booking_BG.png")}
      style={styles.backgroundImage}
    >
      <StatusBar />
      <ShipViewComponent />
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
