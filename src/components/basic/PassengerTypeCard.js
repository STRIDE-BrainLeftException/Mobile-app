import React, { FC, useState } from "react";
import { BlurView } from "expo-blur";
import { HStack, Text, VStack, View } from "native-base";
import { Image, StyleSheet } from "react-native";
import EfficientBlurViewCard from "./EfficientBlurViewCard";
import NumericInput from "../numeric/NumericInput";

const styles = StyleSheet.create({
  container: { alignItems: "center" },
  image: { width: 90, height: 100, borderRadius: 20 },
  speciesText: { fontSize: 16, paddingBottom: 5 },
  description: { fontSize: 9, lineHeight: 10 },
});
const PassengerTypeCard = ({
  img = require("./../../assets/images/Booking_Process/No_of_Passengers_Screen/grown-human-img.png"),
  species = "Grown-Human",
  ageGroup = "Above 20 Years",
  homePlanet = "Earth,Sector-8,Milky-Way",
  maxVal = 1,
  valueChange,
}) => {
  const [val, setValue] = useState(0);

  const changeValues = (newNum) => {
    setValue(newNum);
    valueChange(species, newNum);
  };

  return (
    <EfficientBlurViewCard
      children={
        <HStack style={styles.container} space={3}>
          <Image source={img} style={styles.image}></Image>
          <VStack width="50%">
            <Text style={styles.speciesText}>{species}</Text>

            <Text
              style={styles.description}
            >{`Age - ${ageGroup}\n(${homePlanet})`}</Text>
          </VStack>

          <NumericInput value={val} onChange={changeValues} maxValue={maxVal} />
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

export default PassengerTypeCard;
