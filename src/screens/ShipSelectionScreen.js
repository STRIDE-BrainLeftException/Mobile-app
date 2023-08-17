import React from "react";
import { View, StyleSheet, ImageBackground, StatusBar } from "react-native";

const ShipSelectionScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/images/Booking_BG.png")}
      style={styles.backgroundImage}
    >
      <StatusBar />
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
