import React, { useRef, useMemo, useCallback } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";
import ShipCheckouts from "../components/ShipCheckouts";
import PaymentDetailsCard from "../components/PaymentDetailsCard";
import CheckoutDetailsCard from "../components/CheckoutDetailsCard";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { BlurView } from "expo-blur";
import { BORDER_RADIUS } from "../utils/constants";

const Checkout = () => {
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["100%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/Booking_BG.png")}
        style={styles.image}
      >
        {/* use to add header section*/}
        <View
          style={{
            height: "8%",
          }}
        ></View>
        <BottomSheet
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          backgroundStyle={{ backgroundColor: "transparent" }}
          backgroundComponent={({ style }) => (
            <View style={[styles.contentContainer, style]}>
              <BlurView
                intensity={80}
                tint="dark"
                style={[
                  { flex: 1, width: "100%", borderRadius: BORDER_RADIUS },
                  style,
                ]}
              />
            </View>
          )}
        >
          <BottomSheetScrollView>
            <CheckoutDetailsCard />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 20,
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 20,
                }}
              >
                Travel Mode
              </Text>
              <View
                style={{
                  paddingHorizontal: 5,
                  paddingVertical: 2,
                  borderBlockColor: "black",
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: "#3DC5FF",
                }}
              >
                <Text
                  style={{
                    color: "#3DC5FF",
                  }}
                >
                  HyperStride
                </Text>
              </View>
            </View>
            <ShipCheckouts
              name="NotAShip"
              seatID="12434"
              description={`\u2022 Upper deck \n\u2022 Keypium package \n\u2022 Food grade : BBB`}
              price="100Ñ"
            />
            <ShipCheckouts
              name="Ship 123"
              seatID="123"
              description={`\u2022 Upper deck \n\u2022 Kaypium package \n\u2022 Food grade : AAA`}
              price="399Ñ"
            />
            <PaymentDetailsCard />
            <View
              style={{
                paddingVertical: 40,
              }}
            />
          </BottomSheetScrollView>
        </BottomSheet>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  image: { width: "100%", height: "100%" },
  contentContainer: {
    borderRadius: 30,
    overflow: "hidden",
  },
  blurView: {
    position: "absolute ",
    flex: 1,
    borderRadius: 30,
    overflow: "hidden",
  },
});

export default Checkout;
