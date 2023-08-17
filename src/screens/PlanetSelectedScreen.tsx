import React, { useRef, useMemo, useCallback, useState } from "react";
import { ImageBackground } from "react-native";
import { View, Text, StyleSheet, Image } from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { BlurView } from "expo-blur";
import {
  BLUEVIEW_BORDER_COLOR,
  BLURVIEW_BORDER_WIDTH,
  BORDER_RADIUS,
  HEIGHT,
  WIDTH,
} from "../utils/constants";
import PlanetStationsView from "../components/PlanetStationsView";
import { position } from "native-base/lib/typescript/theme/styled-system";
import BlurViewCard from "../components/basic/BlurViewCard";

const planetArrayData = [
  {
    stationName: "Volrizen 30A",
    subStationName: "Albaraexperia | 3000LY",
    content:
      "Ancient forests, teeming waters, and untamed coasts host creatures reminiscent of Earth's past. Earthian settlers have established Darwin City and the Vincian Colony, while the Veridian Outpost braves uncharted frontiers. Now a magnet for intergalactic travelers, this world's mysteries and beauty enthrall those who journey from the stars.",
  },
];

const whereToGoArrayData = [
  {
    image_path: require("../assets/images/Booking_Process/Planet_Details_Screen/where_to_go/img.png"),
  },
  {
    image_path: require("../assets/images/Booking_Process/Planet_Details_Screen/where_to_go/img-1.png"),
  },
  {
    image_path: require("../assets/images/Booking_Process/Planet_Details_Screen/where_to_go/img-2.png"),
  },
  {
    image_path: require("../assets/images/Booking_Process/Planet_Details_Screen/where_to_go/img-3.png"),
  },
  {
    image_path: require("../assets/images/Booking_Process/Planet_Details_Screen/where to go/img-4.png"),
  },
  {
    image_path: require("../assets/images/Booking_Process/Planet_Details_Screen/where to go/img-5.png"),
  },
];

const TitleContainer = ({ stationName, subStationName, content }) => {
  return (
    <View style={{ flex: 1, width: "80%", alignSelf: "center" }}>
      <Text
        style={{
          fontSize: 32,
          lineHeight: 35.2,
          color: "rgba(255, 255, 255, 1)",
          alignSelf: "center",
        }}
      >
        {stationName}
      </Text>

      <Text
        style={{
          fontSize: 12,
          lineHeight: 15.38,
          color: "rgba(235, 235, 245, 1)",
          alignSelf: "center",
        }}
      >
        {subStationName}
      </Text>

      <View style={{ height: 5 }} />

      <Text
        style={{
          fontSize: 10,
          lineHeight: 12.82,
          color: "rgba(185, 234, 255, 1)",
          alignSelf: "center",
          textAlign: "center",
        }}
      >
        {content}
      </Text>

      <View style={{ height: 10 }} />

      <Text
        style={{
          fontSize: 20,
          lineHeight: 22,
          color: "rgba(255, 255, 255, 1)",
          textAlign: "left",
        }}
      >
        Where to Go
      </Text>
    </View>
  );
};

const CustomImage = ({ source }) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={source} style={styles.image} />
    </View>
  );
};

const PopularDestinationSection = ({  }) => {
  return (
    <BlurViewCard containerStyle={styles.cardContainer}>
      <CustomImage source={whereToGoArrayData[0].image_path} />
    </BlurViewCard>
  );
};

const PlanetSelectedScreen = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [selectedStation, setSelectedStation] = useState();

  // variables
  const snapPoints = useMemo(() => ["60%", "100%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    // console.log("handleSheetChanges", index);
  }, []);

  const stations = [
    { id: 1, name: "Station 1", degree: 90 },
    { id: 2, name: "Station 2", degree: 270 },
    { id: 3, name: "Station 3", degree: 20 },
    // { id: 4, name: "Station 3", degree: 180 },
  ];

  return (
    <ImageBackground
      source={require("../assets/images/Booking_BG.png")}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <View style={{ position: "relative", marginTop: 50 }}>
        <PlanetStationsView
          stations={stations}
          selectedStation={selectedStation}
          setSelectedStation={setSelectedStation}
        />
      </View>
      <BottomSheet
        handleIndicatorStyle={{ backgroundColor: "white", width: 60 }}
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        style={{ backgroundColor: "transparent" }}
        // containerStyle={{backgroundColor: 'red'}}
        backgroundStyle={{ backgroundColor: "transparent" }}
        backgroundComponent={({ style }) => (
          <View style={[styles.contentContainer, style]}>
            <BlurView
              intensity={15}
              style={[
                { flex: 1, width: "100%", borderRadius: BORDER_RADIUS },
                style,
              ]}
            />
          </View>
        )}
      >
        <BottomSheetScrollView>
          {/* {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9.1].map((i) => {
            return (
              <View key={i} style={{ height: 200, width: "90%" }}>
                <Text>{i}</Text>
              </View>
            );
          })} */}
          {/* <BlurView style={{ flex: 1, width: "100%" }}> */}
          {/* <Text>Awesome 🎉</Text> */}
          <TitleContainer
            stationName={planetArrayData[0].stationName}
            subStationName={planetArrayData[0].subStationName}
            content={planetArrayData[0].content}
          />
          <PopularDestinationSection />
        </BottomSheetScrollView>
        {/* </BlurView> */}
      </BottomSheet>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  contentContainer: {
    borderWidth: BLURVIEW_BORDER_WIDTH,
    borderColor: BLUEVIEW_BORDER_COLOR,
    borderRadius: BORDER_RADIUS,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    alignItems: "center",
    backgroundColor: "transparent",
  },
  imageContainer: {
    width: "100%",
  },
  image:{

  },
  cardContainer:{
    width: "90%",
    height: 200,
  }
});

export default PlanetSelectedScreen;
