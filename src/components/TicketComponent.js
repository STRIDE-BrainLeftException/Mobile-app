import { BlurView } from "expo-blur";
import React from "react";
import { StyleSheet, View } from "react-native";
import Logo from "./basic/Logo";
import { WIDTH } from "../utils/constants";
import { Text } from "react-native";

const Ticket = ({
  ticketId,
  destPlanet,
  destStation,
  destGalaxy,
  sourceStation,
  date,
  quantity,
  packageType,
}) => {
  return (
    <View style={styles.ticketRoot}>
      <BlurView style={styles.ticketHeader}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "5%",
            marginHorizontal: "10%",
          }}
        >
          <Text style={{ color: "#b5c0c9", fontSize: 12 }}>{ticketId}</Text>
          <Logo logoPaddingX={0} logoPt={0} size={WIDTH / 6} />
        </View>
        <View style={{ marginLeft: "10%" }}>
          <Text style={{ color: "white", fontSize: 25 }}>{destPlanet}</Text>
          <Text style={{ color: "#b5c0c9", fontSize: 15 }}>{destStation}</Text>
          <Text style={{ color: "#b5c0c9", fontSize: 12, marginTop: "4%" }}>
            From {sourceStation}
          </Text>
          <Text style={{ color: "#b5c0c9", fontSize: 12 }}>{date}</Text>
        </View>
      </BlurView>
      <BlurView style={styles.ticketFooter}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: "10%",
            marginTop: "2%",
          }}
        >
          <Text style={{ color: "white", fontSize: 12 }}>{packageType}</Text>
          <Text style={{ color: "white", fontSize: 12 }}>QTY: {quantity}</Text>
        </View>
      </BlurView>
      <BlurView style={styles.ticketMid}></BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  ticketRoot: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "30%",
  },
  ticketHeader: {
    width: "60%",
    height: "55%",
    borderRadius: 20,
    marginTop: "6%",
    overflow: "hidden",
  },
  ticketFooter: {
    width: "60%",
    height: "34%",
    borderRadius: 20,
    marginTop: "3%",
    overflow: "hidden",
  },
  ticketMid: {
    width: "50%",
    height: "5%",
    position: "absolute",
    top: "64%",
  },
});

export default Ticket;
