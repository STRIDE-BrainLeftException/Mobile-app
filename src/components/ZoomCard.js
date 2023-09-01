import React from "react";
import { View, StyleSheet, TouchableOpacity, ImageBackground, Text } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from "react-native-reanimated";

const ZoomedCard = ({ cardData, onBackgroundPress }) => {
  if (!cardData) {
    return null;
  }

  const scale = useSharedValue(1);

  // Animation configuration
  const animationConfig = {
    damping: 2,
    stiffness: 80,
  };

  // Animate the scale when the card is zoomed
  scale.value = withSpring(2, animationConfig);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <TouchableOpacity style={styles.zoomedContainer} onPress={onBackgroundPress}>
      <Animated.View style={[styles.zoomedCard, animatedStyle]}>
        {/* Render the zoomed card content here */}
        <ImageBackground source={cardData.img_path} style={styles.image}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{cardData.name}</Text>
            <Text style={styles.subTitle}>{cardData.sub_title}</Text>
            <View style={styles.subTextContainer}>
              <Text style={styles.date}>{cardData.date}</Text>
              <View style={{ width: 10 }} />
              <Text style={styles.planetTime}>{cardData.planet_time}</Text>
            </View>
          </View>
        </ImageBackground>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  zoomedContainer: {
    position: "absolute",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Add a semi-transparent background
  },
  zoomedCard: {
    width: 150,
    height: 200,
    borderRadius: 18,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 18,
  },
  textContainer: {
    flex: 1,
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
    fontWeight: "500",
    fontSize: 24,
    lineHeight: 26.4,
  },
  subTitle: {
    color: "rgba(255, 255, 255, 1)",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 15.38,
  },
  date: {
    color: "rgba(255, 255, 255, 1)",
    fontWeight: "400",
    fontSize: 10,
    lineHeight: 12.82,
  },
  planetTime: {
    color: "rgba(255, 255, 255, 0.5)",
    fontWeight: "400",
    fontSize: 8,
    lineHeight: 10.26,
    alignSelf: "center",
  },
});

export default ZoomedCard;
