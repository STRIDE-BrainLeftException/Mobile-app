import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import { Text } from "native-base";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { BlurView } from "expo-blur";
import { UiButton } from "./basic/UiButton";
import { useNavigation } from "@react-navigation/native";
import { efficientBlurViewStyles } from "../utils/constants";

const ShipViewComponent = ({ shipData, handleShipSelection }) => {
  const navigation = useNavigation();

  const shipTypeStyle =
    shipData.type === "HyperStride" ? styles.shipType[0] : styles.shipType[1];

  _renderItem = ({ item, index }) => {
    return (
      <View style={[styles.slide, efficientBlurViewStyles]}>
        <Image style={styles.slideImg} source={item} />
      </View>
    );
  };

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
      <View
        style={[
          styles.blurViewContainer,
          { backgroundColor: "rgba(0,0,0,0.2)" },
          styles.blurView,
        ]}
      >
        {/* <BlurView style={styles.blurView} tint="dark" intensity={50}> */}
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
        <Text style={styles.shipVisArchTitle}>Visual Archive</Text>
        <Carousel
          layout={"default"}
          ref={(c) => {
            this._carousel = c;
          }}
          data={shipData.visualArchive}
          renderItem={this._renderItem}
          sliderWidth={1000}
          itemWidth={200}
        />
        <UiButton
          onPress={() => {
            navigation.navigate("CabinSelect");
          }}
        >
          <Text>Continue</Text>
        </UiButton>
        <Text>{`\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`}</Text>
        <Text>{`\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`}</Text>
        {/* </BlurView> */}
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
  slideImg: {
    width: 180,
    height: 180,
  },
  slide: {
    padding: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  shipVisArchTitle: {
    color: "white",
    fontSize: 25,
    alignSelf: "flex-start",
    marginVertical: 10,
    marginLeft: 10,
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
    paddingTop: "30%",
  },
  blurViewContainer: {
    color: "white",
    marginHorizontal: "6%",
    position: "absolute",
    top: "75%",
    width: "100%",
    borderRadius: 20,
    overflow: "hidden",
    alignSelf: "center",
  },
});

export default ShipViewComponent;
