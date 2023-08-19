import { BlurView } from "expo-blur";
import React from "react";
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Ticket from "../components/TicketComponent";

const PostCheckoutScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/images/Booking_BG.png")}
      style={styles.backgroundImage}
    >
      <StatusBar />
      <BlurView intensity={10} style={styles.blurView}>
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
        {/* Insert from checkout screen */}
      </BlurView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  blurView: {
    position: "absolute ",
    top: "15%",
    height: "100%",
    borderRadius: 30,
    overflow: "hidden",
  },
});

export default PostCheckoutScreen;
