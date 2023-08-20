import React from "react";
import { Text } from "react-native";
const CheckoutDetailsCard = ({ planetName, galaxyName, description }) => {
  return (
    <Text
      style={{
        color: "white",
        textAlign: "center",
        paddingHorizontal: 20,
      }}
    >
      <Text
        style={{
          fontSize: 32,
          fontWeight: "bold",
        }}
      >
        {planetName + "\n"}
      </Text>

      <Text
        style={{
          fontSize: 12,
        }}
      >
        {galaxyName + "\n"}
      </Text>
      <Text
        style={{
          fontSize: 12,
          color: "#3DC5FF",
        }}
      >
        {description + "\n"}
      </Text>
    </Text>
  );
};

export default CheckoutDetailsCard;
