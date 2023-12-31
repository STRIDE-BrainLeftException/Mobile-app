import React, { useCallback, useMemo, useRef } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  Text,
  ChevronLeftIcon,
  IconButton,
  ChevronRightIcon,
} from "native-base";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { BlurView } from "expo-blur";
import { UiButton } from "./basic/UiButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  BLUEVIEW_BORDER_COLOR,
  BLURVIEW_BORDER_WIDTH,
  efficientBlurViewStyles,
  BOTTOM_TAB_BAR_HEIGHT,
  BORDER_RADIUS,
} from "../utils/constants";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { AnimatePresence, Image as MImage } from "moti";
import { SHIPS } from "../utils/data";

const ShipViewComponent = ({ shipData, handleShipSelection }) => {
  const navigation = useNavigation();

  const allShips = SHIPS;

  const shipTypeStyle =
    shipData.type === "HyperStride" ? styles.shipType[0] : styles.shipType[1];

  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["60%", "100%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  const route = useRoute();

  const data = route?.params?.data;
  console.log("SHIPSELECT data", { data });

  _renderItem = ({ item, index }) => {
    return (
      <View style={[styles.slide, efficientBlurViewStyles]}>
        <Image style={styles.slideImg} source={item} />
      </View>
    );
  };

  return (
    <View style={styles.root}>
      <AnimatePresence>
        {allShips.map((ship) => (
          <View key={ship.id}>
            {ship.id == shipData.id && (
              <MImage
                key={ship.id}
                source={ship.image}
                style={styles.shipImage}
                from={{ translateX: -400, opacity: 0 }}
                animate={{ translateX: 0, opacity: 1 }}
                exit={{ translateX: 400, opacity: 0 }}
              />
            )}
          </View>
        ))}
      </AnimatePresence>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backgroundStyle={{ backgroundColor: "transparent" }}
        backgroundComponent={({ style }) => (
          <View style={[styles.contentContainer, style]}>
            <BlurView
              intensity={50}
              tint="dark"
              style={[
                { flex: 1, width: "100%", borderRadius: BORDER_RADIUS },
                style,
              ]}
            />
          </View>
        )}
      >
        <View style={styles.shipHeader}>
          <Text style={shipTypeStyle}>{shipData.type}</Text>
          <View style={styles.shipTitleContainer}>
            <IconButton
              onPress={handleShipSelection.previous}
              icon={<ChevronLeftIcon color={"rgb(255,255,255)"} size={"xl"} />}
            />
            <Text style={styles.shipTitle}>{shipData.title}</Text>
            <IconButton
              onPress={handleShipSelection.next}
              icon={<ChevronRightIcon color={"rgb(255,255,255)"} size={"xl"} />}
            />
          </View>
        </View>
        <BottomSheetScrollView
          contentContainerStyle={{
            display: "flex",
            alignItems: "center",
            marginHorizontal: "5%",
            paddingBottom: 100,
          }}
        >
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
          {/* <UiButton
            onPress={() => {
              navigation.navigate("CabinSelect");
            }}
            style={{ marginTop: 20 }}
          >
            <Text>Continue</Text>
          </UiButton> */}

          <UiButton
            label={"Continue"}
            onTap={() => {
              navigation.navigate("CabinSelect", {
                data: { ...data, shipData },
              });
            }}
          />
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  slideImg: {
    width: 180,
    height: 180,
    resizeMode: "cover",
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
    // marginLeft: 10,
    lineHeight: 30,
  },
  shipHeader: {
    // zIndex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // position: "absolute",
    // top: "82%",
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
    lineHeight: 30,
  },
  shipStatFooter: {
    color: "#1dbbff",
    fontSize: 10,
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
    marginTop: -50,
    // position: "relative",
    // zIndex: 1,
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
  shipSelectButtons: {
    paddingHorizontal: 20,
    fontSize: 30,
    color: "white",
    lineHeight: 30,
  },
  shipTitle: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
    lineHeight: 40,
    marginTop: 5,
  },
  blurView: {
    alignItems: "center",
    paddingTop: "30%",
  },
  blurViewContainer: {
    color: "white",
    marginHorizontal: "6%",
    // position: "absolute",
    // top: "77%",
    width: "100%",
    borderRadius: 20,
    overflow: "hidden",
    alignSelf: "center",
  },
});

export default ShipViewComponent;
