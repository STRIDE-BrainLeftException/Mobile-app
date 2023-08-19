import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"; // Make sure to import from 'react-native'
import PackageBlurViewCard from "./basic/PackageBlurViewCard";
import { useNavigation } from "@react-navigation/native";

const PackageSelector = () => {
  const packages = [
    {
      image: require("../assets/images/Booking_Process/Package_Selection_Screen/krypium-img.png"),
      pkg: "Krypium",
      description:
        "Gourmet food, top health care,pet-friendly, Galaxicony access, language training.",
    },
    {
      image: require("../assets/images/Booking_Process/Package_Selection_Screen/krypium-img.png"),
      pkg: "Omium",
      description:
        "100+ food choices, health care, pet choice, Galaxicony discount, language training.",
    },
    {
      image: require("../assets/images/Booking_Process/Package_Selection_Screen/krypium-img.png"),
      pkg: "Terynium",
      description:
        "50+ food options, health care, pet space, Galaxicony offer, language discount.",
    },
    {
      image: require("../assets/images/Booking_Process/Package_Selection_Screen/krypium-img.png"),
      pkg: "Serynium",
      description: "Varied food, basic health care, worry-free explorations.",
    },
  ];

  const navigation = useNavigation();

  return (
    <View style={styles.pakageSelectorStyle}>
      {/* <Text>Testing the pakage selector card</Text> */}
      {packages.map((p) => (
        <TouchableOpacity
          key={p.pkg}
          onPress={() => {
            navigation.navigate("Checkout");
          }}
        >
          <PackageBlurViewCard
            image={p.image}
            pkg={p.pkg}
            description={p.description}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  pakageSelectorStyle: {
    width: "90%",
  },
});

export default PackageSelector;
