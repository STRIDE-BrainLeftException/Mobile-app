import React from "react";
import { Text } from "react-native";
const CheckoutDetailsCard = () => {
  return (
    <Text
      style={{
        color: "white",
        textAlign: "center",
        paddingHorizontal: 20,
      }}>
      <Text
        style={{
          fontSize: 32,
          fontWeight: "bold",
        }}>
        Volrizen 30A{"\n"}
      </Text>

      <Text
        style={{
          fontSize: 12,
        }}>
        Albarexperia | 3000LY{"\n"}
      </Text>
      <Text
        style={{
          fontSize: 12,
          color: "#3DC5FF",
        }}>
        Ancient forests, teeming waters, and untamed coasts host creatures
        reminiscent of Earth's past.{"\n"}
      </Text>
    </Text>
  );
};

export default CheckoutDetailsCard;
