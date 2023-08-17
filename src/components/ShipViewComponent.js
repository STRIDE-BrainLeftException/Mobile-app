import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { BlurView } from "expo-blur";

const ShipViewComponent = ({ shipData, handleShipSelection }) => {
  console.log(shipData.image);

  const shipTypeStyle =
    shipData.type === "HyperStride" ? styles.shipType[0] : styles.shipType[1];

  return (
    <View style={styles.root}>
      <Image source={shipData.image} style={styles.shipImage} />
      <View style={styles.shipHeader}>
        <Text style={shipTypeStyle}>{shipData.type}</Text>
        <View style={styles.shipTitleContainer}>
          <TouchableOpacity onPress={handleShipSelection.previous}>
            <Text style={styles.shipSelectButtons}>{`<`}</Text>
          </TouchableOpacity>
          <Text style={styles.shipTitle}>{shipData.title}</Text>
          <TouchableOpacity onPress={handleShipSelection.next}>
            <Text style={styles.shipSelectButtons}>{`>`}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.blurViewContainer}>
        <BlurView style={styles.blurView} tint="dark" intensity={30}>
          <Text style={styles.shipEngine}>{shipData.engine}</Text>
          <Text style={styles.shipDescription}>{shipData.description}</Text>
          <View style={styles.shipStatsContainer}>
            <View style={styles.shipStatContainer}>
              <Text style={styles.shipStat}>{shipData.price}</Text>
              <Text style={styles.shipStatFooter}>Price</Text>
            </View>
            <View style={styles.shipStatContainer}>
              <Text style={styles.shipStat}>{shipData.passengers}</Text>
              <Text style={styles.shipStatFooter}>Passengers</Text>
            </View>
            <View style={styles.shipStatContainer}>
              <Text style={styles.shipStat}>{shipData.arrivalTime}</Text>
              <Text style={styles.shipStatFooter}>Expected Arrival Time</Text>
            </View>
          </View>
          <Carousel />
          <Text>{`\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`}</Text>
          <Text>{`\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`}</Text>
        </BlurView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  shipHeader: {
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    top: "85%",
  },
  shipType: [
    {
      color: "#3dc5ff",
      borderWidth: 1,
      borderRadius: 15,
      padding: 5,
      borderColor: "#3dc5ff",
    },
    {
      color: "#3eff3c",
      borderWidth: 1,
      borderRadius: 15,
      padding: 5,
      borderColor: "#3eff3c",
    },
  ],
  shipStatsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    marginTop: 15,
  },
  shipStatContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  shipStat: {
    color: "#1dbbff",
    fontSize: 25,
    fontWeight: "bold",
  },
  shipStatFooter: {
    color: "#1dbbff",
    fontSize: 8,
  },
  shipEngine: {
    color: "white",
    fontSize: 15,
  },
  shipDescription: {
    color: "#b9eaff",
    fontSize: 10,
    marginTop: 3,
  },
  shipTitleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  shipImage: {
    position: "relative",
    zIndex: 1,
  },
  shipSelectButtons: {
    paddingHorizontal: 20,
    fontSize: 30,
    color: "white",
  },
  shipTitle: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
  },
  blurView: {
    alignItems: "center",
    paddingTop: "20%",
  },
  blurViewContainer: {
    color: "white",
    paddingTop: "23%",
    paddingHorizontal: "6%",
    position: "absolute",
    top: "65%",
    width: "100%",
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0.1)",
    alignSelf: "center",
  },
});

export default ShipViewComponent;
