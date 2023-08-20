import React, { useState } from "react";
import { View, StyleSheet, ImageBackground, StatusBar } from "react-native";
import ShipViewComponent from "../components/ShipViewComponent";
import { SHIPS } from "../utils/data";

const shipData = SHIPS

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
    <View
      source={require("../assets/images/Booking_BG.png")}
      style={styles.backgroundImage}
    >
      <StatusBar />
      <ShipViewComponent
        shipData={shipData[selectedShipID]}
        handleShipSelection={handleShipSelection}
        allShips={shipData}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
});

export default ShipSelectionScreen;
