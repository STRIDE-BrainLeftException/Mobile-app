import React from "react";
import { Image, View, Text } from "react-native";
import BlurViewCard from "../components/basic/BlurViewCard";
const ShipCheckouts = (data) => {
  return (
    <View
      style={{
        marginVertical: 10,
      }}>
      <BlurViewCard containerStyle={styles.blurCardStyles}>
        <View style={styles.cardContainer}>
          <Image
            source={require("../assets/images/Booking_Process/Check_out_Screen/ship.png")}
            style={styles.shipImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.shipName}>{data.name}</Text>
            <Text style={styles.seatID}>Seat ID : {data.seatID}</Text>
            <Text style={styles.seatDescription}>{data.description}</Text>
            <Text style={styles.rate}>
              Rate per person:
              <Text style={styles.price}>{data.price}</Text>
            </Text>
          </View>
        </View>
      </BlurViewCard>
    </View>
  );
};

const styles = {
  shipImage: {
    width: 149,
    height: 144,
    borderRadius: 20,
  },
  blurCardStyles: {
    width: 337,
    height: 185,
    flexDirection: "column",
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  textContainer: {
    paddingLeft: 20,
  },
  shipName: {
    fontSize: 20,
    color: "#FFFFFF",
  },
  seatID: {
    fontSize: 12,
    color: "#3DC5FF",
  },
  seatDescription: {
    fontSize: 12,
    color: "#FFFFFF",
    margin: 10,
  },
  rate: {
    fontSize: 10,
    color: "#FFFFFF",
    textAlign: "right",
  },
  price: {
    marginTop: 10,
    fontSize: 20,
    color: "#3DC5FF",
    fontWeight: "bold",
  },
};

export default ShipCheckouts;
