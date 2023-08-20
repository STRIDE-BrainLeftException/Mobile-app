import React, { FC, useState } from "react";
import { BlurView } from "expo-blur";
import { HStack, InfoIcon, Text, VStack, View } from "native-base";
import { Image, StyleSheet } from "react-native";
import EfficientBlurViewCard from "./EfficientBlurViewCard";
import { Button } from "native-base";

const styles = StyleSheet.create({
  container: { alignItems: "center" },
  image: { width: 90, height: 90, borderRadius: 20 },
  speciesText: { fontSize: 16, paddingBottom: 5 },
  description: { fontSize: 9, lineHeight: 10 },
  button: {
    borderRadius: 15,
    width: 30,
    height: 30,
  },
});
const PackageBlurViewCard = ({
  img,
  pkg = "Krypium",
  description = "Gourmet food, top health care,pet-friendly, Galaxicony access, language training.",
  onPress,
}) => {
  const onInfoPress = () => {
    onPress(true);
  };

  return (
    <EfficientBlurViewCard
      children={
        <HStack style={styles.container} space={3}>
          <Image source={img} style={styles.image}></Image>
          <VStack width="50%">
            <Text style={styles.speciesText}>{pkg}</Text>

            <Text style={styles.description}>{description}</Text>
          </VStack>

          <Button rounded style={styles.button} onPress={onInfoPress}>
            <InfoIcon size={4} />
          </Button>
        </HStack>
      }
      containerStyle={{
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
      }}
    ></EfficientBlurViewCard>
  );
};

export default PackageBlurViewCard;
