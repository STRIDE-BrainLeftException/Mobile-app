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
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9.1].map((i) => {
            return (
              <View key={i} style={{ height: 200, width: "90%" }}>
                <Text>{i}</Text>
              </View>
            );
          })}
          {/* <BlurView style={{ flex: 1, width: "100%" }}> */}
          <Text>Awesome 🎉</Text>
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
});

export default PlanetSelectedScreen;
