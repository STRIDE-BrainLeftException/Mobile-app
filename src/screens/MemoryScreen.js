import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { useNavigation } from "@react-navigation/native";
import { View as MView } from "moti";
import { PLANETS } from "../utils/data";
import EfficientBlurViewCard from "../components/basic/EfficientBlurViewCard";
import { Text } from "native-base";
import BlurViewCard from "../components/basic/BlurViewCard";
import ZoomedCard from "../components/ZoomCard";

const MAP_HEIGHT = 1000;
const MAP_WIDTH = 1000;

const cardDataArray = [
  {
    img_path: require("../assets/images/My_Activity/Memories/Memory_Tile_1.png"),
    name: "Pyramids",
    sub_title: "Unknown Structures",
    date: "May, 2157",
    planet_time: "Earth time",
  },
  {
    img_path: require("../assets/images/My_Activity/Memories/Memory_Tile_2.png"),
    name: "Pyramids",
    sub_title: "Unknown Structures",
    date: "May, 2157",
    planet_time: "Earth time",
  },
  {
    img_path: require("../assets/images/My_Activity/Memories/Memory_Tile_3.png"),
    name: "Pyramids",
    sub_title: "Unknown Structures",
    date: "May, 2157",
    planet_time: "Earth time",
  },
  {
    img_path: require("../assets/images/My_Activity/Memories/Memory_Tile_4.png"),
    name: "Pyramids",
    sub_title: "Unknown Structures",
    date: "May, 2157",
    planet_time: "Earth time",
  },
  {
    img_path: require("../assets/images/My_Activity/Memories/Memory_Tile_5.png"),
    name: "Pyramids",
    sub_title: "Unknown Structures",
    date: "May, 2157",
    planet_time: "Earth time",
  },
  {
    img_path: require("../assets/images/My_Activity/Memories/Memory_Tile_6.png"),
    name: "Pyramids",
    sub_title: "Unknown Structures",
    date: "May, 2157",
    planet_time: "Earth time",
  },
  {
    img_path: require("../assets/images/My_Activity/Memories/Memory_Tile_7.png"),
    name: "Pyramids",
    sub_title: "Unknown Structures",
    date: "May, 2157",
    planet_time: "Earth time",
  },
  {
    img_path: require("../assets/images/My_Activity/Memories/Memory_Tile_8.png"),
    name: "Pyramids",
    sub_title: "Unknown Structures",
    date: "May, 2157",
    planet_time: "Earth time",
  },
  {
    img_path: require("../assets/images/My_Activity/Memories/Memory_Tile_9.png"),
    name: "Pyramids",
    sub_title: "Unknown Structures",
    date: "May, 2157",
    planet_time: "Earth time",
  },
  {
    img_path: require("../assets/images/My_Activity/Memories/Memory_Tile_10.png"),
    name: "Pyramids",
    sub_title: "Unknown Structures",
    date: "May, 2157",
    planet_time: "Earth time",
  },
  {
    img_path: require("../assets/images/My_Activity/Memories/Memory_Tile_11.png"),
    name: "Pyramids",
    sub_title: "Unknown Structures",
    date: "May, 2157",
    planet_time: "Earth time",
  },
  {
    img_path: require("../assets/images/My_Activity/Memories/Memory_Tile_12.png"),
    name: "Pyramids",
    sub_title: "Unknown Structures",
    date: "May, 2157",
    planet_time: "Earth time",
  },
  {
    img_path: require("../assets/images/My_Activity/Memories/Memory_Tile_13.png"),
    name: "Pyramids",
    sub_title: "Unknown Structures",
    date: "May, 2157",
    planet_time: "Earth time",
  },
  {
    img_path: require("../assets/images/My_Activity/Memories/Memory_Tile_14.png"),
    name: "Pyramids",
    sub_title: "Unknown Structures",
    date: "May, 2157",
    planet_time: "Earth time",
  },
];

const MemoryCard = ({ cardDescription, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(cardDescription)}>
      <View style={styles.imageContainer}>
        <ImageBackground
          alt={" "}
          source={cardDescription.img_path}
          style={styles.image}
        >
          <View style={styles.textContainer}>
            <Text style={styles.title}>{cardDescription.name}</Text>
            <Text style={styles.subTitle}>{cardDescription.sub_title}</Text>
            <View style={styles.subTextContainer}>
              <Text style={styles.date}>{cardDescription.date}</Text>
              <View style={{ width: 10 }} />
              <Text style={styles.planetTime}>
                {cardDescription.planet_time}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const CustomMemoryGrid = ({ cardDataArray, onCardPress }) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const panGestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = translateX.value;
      ctx.startY = translateY.value;
    },
    onActive: (event, ctx) => {
      // Allow diagonal and vertical movement by considering both translationX and translationY
      translateX.value = ctx.startX + event.translationX;
      translateY.value = ctx.startY + event.translationY;
    },
    onEnd: () => {
      // Ensure the screen doesn't go beyond the bounds
      translateX.value = withSpring(translateX.value, {
        damping: 2,
        stiffness: 80,
      });
      translateY.value = withSpring(translateY.value, {
        damping: 2,
        stiffness: 80,
      });
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });

  // Split the cardDataArray into rows of 3 and 4
  const chunkedData = [];
  for (let i = 0; i < cardDataArray.length; i += 7) {
    const row = cardDataArray.slice(i, i + 3);
    chunkedData.push(row);
    if (i + 3 < cardDataArray.length) {
      const row2 = cardDataArray.slice(i + 3, i + 7);
      chunkedData.push(row2);
    }
  }

  return (
    <GestureHandlerRootView>
      <PanGestureHandler onGestureEvent={panGestureHandler}>
        <Animated.View style={[styles.container, animatedStyle]}>
          {chunkedData.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {row.map((card, cardIndex) => (
                <MemoryCard
                  key={cardIndex}
                  cardDescription={card}
                  onPress={onCardPress}
                />
              ))}
            </View>
          ))}
        </Animated.View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

const MemoryScreen = () => {
  const [zoomedCard, setZoomedCard] = useState(null);

  const onCardPress = (cardData) => {
    // Set the zoomed card when a card is pressed
    console.log("Zoomed card:", cardData); // Add this line
    setZoomedCard(cardData);
  };

  const onBackgroundPress = () => {
    // Reset the zoomed card when the background is pressed
    setZoomedCard(null);
  };

  return (
    <ImageBackground
      source={require("../assets/images/Booking_BG.png")}
      // source={require("../assets/images/Booking_BG.png")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container_}>
        {/* <Text style={{ color: "black" }}>Memory Screen</Text>
        <MemoryCard {...cardDataArray[0]} /> */}
        {/* <CustomMemoryGrid cardDataArray={cardDataArray} /> */}
        <CustomMemoryGrid
          cardDataArray={cardDataArray}
          onCardPress={onCardPress}
        />
        {zoomedCard && (
          <ZoomedCard
            cardData={zoomedCard}
            onBackgroundPress={onBackgroundPress}
          />
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container_: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 174,
    height: 248,
    borderRadius: 18,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  imageContainer: {
    borderWidth: 0,
    borderColor: "red",
  },
  textContainer: {
    flex: 1,
    // justifyContent: "flex-end",
    position: "relative",
    top: 155,
    alignItems: "center",
  },
  subTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    color: "rgba(255, 255, 255, 1)",
    fontWeight: 500,
    fontSize: 24,
    lineHeight: 26.4,
  },
  subTitle: {
    color: "rgba(255, 255, 255, 1)",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 15.38,
  },
  date: {
    color: "rgba(255, 255, 255, 1)",
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 12.82,
  },
  planetTime: {
    color: "rgba(255, 255, 255, 0.5)",
    fontWeight: 400,
    fontSize: 8,
    lineHeight: 10.26,
    alignSelf: "center",
  },
  container: {
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 16, // Adjust the margin as needed
  },
  zoomedContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  zoomedCard: {
    width: 300, // Adjust the size as needed
    height: 400, // Adjust the size as needed
    borderRadius: 18,
    elevation: 5, // Add elevation for shadow (Android)
  },
});

export default MemoryScreen;
