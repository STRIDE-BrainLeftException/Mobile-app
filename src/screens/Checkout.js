import React, {
  useRef,
  useMemo,
  useCallback,
  useEffect,
  useState,
} from "react";
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
import { useRoute } from "@react-navigation/native";

const Checkout = () => {
  const [shipData, setShipData] = useState();

  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["100%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  const route = useRoute();
  const data = route?.params?.data;
  useEffect(() => {
    setShipData(data);
    console.log("CHECKOUT data", { data });
  }, [data]);

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
            <CheckoutDetailsCard
              planetName={shipData?.planetData.stationName}
              galaxyName={shipData?.planetData.subStationName}
              description={shipData?.planetData.content}
            />
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
                  {shipData?.shipData?.type}
                </Text>
              </View>
            </View>
            <ShipCheckouts
              name={shipData?.shipData?.title}
              quantity={shipData?.selectedSeats?.length}
              description={`\u2022 ${shipData?.stationData?.stationName} \n\u2022 ${shipData?.selectedDeck?.deck_name} \n\u2022 ${shipData?.package?.pkg} \n\u2022 Food grade : BBB `}
              price="100Ñ"
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
