import React from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import { WIDTH } from "../../constants/styles";
import { VStack, Text, HStack } from "native-base";
import BlurViewCard from "../basic/BlurViewCard";
import { BlurView } from "expo-blur";

export const SLIDER_WIDTH = WIDTH;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        source={{ uri: item.imgUrl }}
        style={[StyleSheet.absoluteFill, styles.image]}
      />
      <VStack style={[styles.containerBottom]}>
        <BlurView intensity={20} style={styles.blurView}>
          <Text style={styles.header}>{item.title}</Text>
          <Text style={styles.body}>{item.body}</Text>
          <HStack>
            {item.stats.map((stat, index) => (
              <VStack flex={1} mt={2} key={index}>
                <Text style={styles.header}>{stat.title}</Text>
                <Text style={styles.body}>{stat.body}</Text>
              </VStack>
            ))}
          </HStack>
        </BlurView>
      </VStack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "white",
    overflow: "hidden",
    borderRadius: 20,
    width: ITEM_WIDTH,
    height: 250,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  containerBottom: {
    height: 250,
    overflow: "hidden",
    borderRadius: 20,
    width: ITEM_WIDTH,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  blurView: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: ITEM_WIDTH,
    height: 300,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  body: {
    fontSize: 13,
    textAlign: "center",
  },
});

export default CarouselCardItem;
