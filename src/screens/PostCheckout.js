import { BlurView } from "expo-blur";
import React, { useRef, useCallback, useMemo } from "react";
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { BORDER_RADIUS } from "../utils/constants";
import Ticket from "../components/TicketComponent";
import ShipCheckouts from "../components/ShipCheckouts";
import PaymentDetailsCard from "../components/PaymentDetailsCard";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

const PostCheckoutScreen = () => {
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["100%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
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
          <Ticket
            ticketId={"#8902Z"}
            destPlanet={"Volrizen 30A"}
            destStation={"Alderine"}
            sourceStation={"Earth (Station X)"}
            date={"12th July 2160"}
            quantity={2}
            packageType={"Atisuiah"}
          />
          <Text
            style={{
              alignSelf: "center",
              marginTop: "5%",
              color: "white",
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            {"Volrizen 30A"}
          </Text>
          <Text
            style={{
              alignSelf: "center",
              color: "white",
              fontSize: 10,
            }}
          >
            Albarexperia | 3000LY
          </Text>
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
            description={`\u2022 Upper deck \n\u2022 Keypium package \n \u2022 Food grade : BBB`}
            price="100Ñ"
          />
          <ShipCheckouts
            name="Ship 123"
            seatID="123"
            description={`\u2022 Upper deck \n\u2022 Kaypium package \n \u2022 Food grade : AAA`}
            price="399Ñ"
          />
          <PaymentDetailsCard disablePay={true} />
          <View style={{ paddingBottom: 70 }} />
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default PostCheckoutScreen;
