import React, { useRef, useMemo, useCallback, useState } from "react";
import { ImageBackground } from "react-native";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
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
    desitination_name: "Lißa Dune Racing",
  },
  {
    image_path: require("../assets/images/Booking_Process/Planet_Details_Screen/where_to_go/img-1.png"),
    desitination_name: "Hapez Plant Museum",
  },
  {
    image_path: require("../assets/images/Booking_Process/Planet_Details_Screen/where_to_go/img-2.png"),
    destination_name: "Horizon City Tower",
  },
  {
    image_path: require("../assets/images/Booking_Process/Planet_Details_Screen/where_to_go/img-3.png"),
    destination_name: "Signal Tower of yore",
  },
  {
    image_path: require("../assets/images/Booking_Process/Planet_Details_Screen/where_to_go/img-4.png"),
    destination_name: "Kriptony Dreamer",
  },
  {
    image_path: require("../assets/images/Booking_Process/Planet_Details_Screen/where_to_go/img-5.png"),
    destination_name: "Aplha Moon Watching",
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
      <View style={{ height: 20 }} />
    </View>
  );
};

const CustomImage = ({ source }) => {
  return <Image source={source} style={styles.image} />;
};

const PopularDestinationSection = ({ image_path, destination_name }) => {
  return (
    <View style={styles.container_where_to_image}>
      <BlurView style={styles.blurView}>
        <CustomImage source={image_path} />
        <View style={{ height: 5 }}></View>
        <Text
          style={{
            color: "rgba(255, 255, 255, 1)",
            fontSize: 11.71,
            textAlign: "center",
          }}
        >
          {destination_name}
        </Text>
      </BlurView>
    </View>
  );
};

const Planet_Details_Section = ({}) => {
  const renderItem = ({ item }) => (
    <PopularDestinationSection
      image_path={item.image_path}
      destination_name={item.desitination_name}
    />
  );

  const Separator = ({ }) => (
    <View style={{width:10}} />
  );
  

  return (
    <BottomSheetScrollView>
      <TitleContainer
        stationName={planetArrayData[0].stationName}
        subStationName={planetArrayData[0].subStationName}
        content={planetArrayData[0].content}
      />
      <View style={{ flexDirection: "row" }}>
        <FlatList
          data={whereToGoArrayData}
          renderItem={renderItem}
          keyExtractor={(item) => item.destination_name}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContent}
          ItemSeparatorComponent={Separator}
        />
      </View>
    </BottomSheetScrollView>
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
        {/* <BottomSheetScrollView> */}
        {/* {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9.1].map((i) => {
            return (
              <View key={i} style={{ height: 200, width: "90%" }}>
                <Text>{i}</Text>
              </View>
            );
          })} */}
        {/* <BlurView style={{ flex: 1, width: "100%" }}> */}
        {/* <Text>Awesome 🎉</Text> */}
        {/* </BottomSheetScrollView> */}
        {/* </BlurView> */}

        <Planet_Details_Section />
      </BottomSheet>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  blurView: {
    width: "100%",
    alignItems: "center",
    paddingTop: 20,
    height: "100%",
    borderRadius: 20,
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  container_where_to_image: {
    overflow: "hidden",
    borderRadius: 20,
    width: 175,
    height: 195,
    backgroundColor: "transparent",
    borderColor: "rgba(255,255,255,0.5)",
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
  image: {
    borderRadius: 10,
  },
  cardContainer: {
    width: "40%",
    position: "relative",
    // alignSelf: "left",
    // padding:10,
    // marginRight:10,
    // alignSelf: "left",
    // height: 200,
  },
  flatListContent: {
    paddingHorizontal: 10, // Adjust horizontal padding to control spacing
  },
});

export default PlanetSelectedScreen;
