import React, { useState } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import BlurViewCard from "../components/basic/BlurViewCard";

import {
  Text,
  StatusBar,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { View as MView } from "moti";

import COLORS from "../utils/colors";

const cardDataArray = [
  {
    image_path: require("../assets/images/Booking_Process/Jump_Type_Screen/hyperStride-img.png"),
    title: "HyperStride",
    superScript: "TM",
    description: "Fastest Possible way to travel intergalactic",
    price: "899",
    hidden_description:
      "Pioneering intergalactic exploration with unparalleled speed and technology. Seamlessly traverse the cosmos, unlocking new frontiers and unraveling celestial mysteries. Elevate your journey, embrace the future of space travel.",
  },
  {
    image_path: require("../assets/images/Booking_Process/Jump_Type_Screen/cosmoV-img.png"),
    title: "CosmoV",
    superScript: "TM",
    description:
      "Enjoy luxurious tours across the galaxy abroad our Intergalactic cruise ships",
    price: "645",
    hidden_description:
      "Pioneering intergalactic exploration with unparalleled speed and technology. Seamlessly traverse the cosmos, unlocking new frontiers and unraveling celestial mysteries. Elevate your journey, embrace the future of space travel.",
  },
  {
    image_path: require("../assets/images/Booking_Process/Jump_Type_Screen/hibe-img.png"),
    title: "Hibe 2.0",
    superScript: "",
    description:
      "Travel to the furthest frontiers abroad our latest cryo-hybernation capsules",
    price: "399",
    hidden_description:
      "Pioneering intergalactic exploration with unparalleled speed and technology. Seamlessly traverse the cosmos, unlocking new frontiers and unraveling celestial mysteries. Elevate your journey, embrace the future of space travel.",
  },
  {
    image_path: require("../assets/images/Booking_Process/Jump_Type_Screen/general-ships-img.png"),
    title: "General Ships",
    superScript: "",
    description: "Ship across the universe and explore the marvels",
    price: "349",
    hidden_description:
      "Pioneering intergalactic exploration with unparalleled speed and technology. Seamlessly traverse the cosmos, unlocking new frontiers and unraveling celestial mysteries. Elevate your journey, embrace the future of space travel.",
  },
  {
    image_path: require("../assets/images/Booking_Process/Jump_Type_Screen/general-ships-img.png"),
    title: "CosmoV",
    superScript: "TM",
    description:
      "Enjoy luxurious tours across the galaxy abroad our Intergalactic cruise ships",
    price: "645",
    hidden_description:
      "Pioneering intergalactic exploration with unparalleled speed and technology. Seamlessly traverse the cosmos, unlocking new frontiers and unraveling celestial mysteries. Elevate your journey, embrace the future of space travel.",
  },
];

const CardItem = ({
  item,
  index,
  expandedCardIndex,
  toggleCardExpansion,
  handleButtonPress,
}) => {
  const isExpanded = expandedCardIndex === index;

  return (
    <BlurViewCardConents
      image_path={item.image_path}
      title={item.title}
      superScript={item.superScript}
      description={item.description}
      price={item.price}
      onPress={() => toggleCardExpansion(index)}
      hidden_description={item.hidden_description}
      toggleCardExpansion={toggleCardExpansion}
      isExpanded={isExpanded}
      index={index}
      handleButtonPress={handleButtonPress}
    >
      {isExpanded && (
        <div>
          <HiddenText hidden_description={item.hidden_description} />
          <SelectAndContinueBtn onPress={handleButtonPress} />
        </div>
      )}
    </BlurViewCardConents>
  );
};

const Separator = ({ seperatorStyle }) => (
  <View style={[styles.separator, seperatorStyle]} />
);

const CustomImage = ({ source }) => {
  return (
    <View style={styles.imageContainer}>
      <Image alt={' '} source={source} style={styles.image} />
    </View>
  );
};

const TitleText = ({ title, superScript }) => {
  return (
    <View style={styles.titleContainer}>
      <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
        <Text style={{ fontSize: 24, lineHeight: 30, color: COLORS.textColor }}>
          {title}
        </Text>
        <Text style={{ fontSize: 11, lineHeight: 18, color: COLORS.textColor }}>
          {superScript}
        </Text>
      </View>
    </View>
  );
};

const HiddenText = ({ hidden_description }) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          lineHeight: 30,
          color: COLORS.textColor,
          textAlign: "left",
          position: "relative",
          left: 20,
          bottom: 0,
        }}
      >
        Benefits
      </Text>
      <Text
        style={{
          fontSize: 11,
          lineHeight: 18,
          color: COLORS.textColor,
          textAlign: "left",
          left: 20,
          right: 20,
        }}
      >
        {hidden_description}
      </Text>
    </View>
  );
};

const DescriptionText = ({ description }) => {
  return (
    <Text
      style={{ fontSize: 11, lineHeight: 18, color: COLORS.textColor, flex: 1 }}
    >
      {description}
    </Text>
  );
};

const SelectAndContinueBtn = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>Select & Continue</Text>
    </TouchableOpacity>
  );
};

const BlurViewCardConents = ({
  image_path,
  title,
  superScript,
  description,
  price,
  hidden_description,
  onPress,
  isExpanded,
  index,
  toggleCardExpansion,
  handleButtonPress,
}) => {
  return (
    <MView
      delay={Math.round(Math.random() * 200)}
      from={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{ opacity: 0, scale: 0.5 }}
    >
      <BlurViewCard
        containerStyle={[
          styles.cardContainer,
          isExpanded && styles.clickedCardContainer,
        ]}
      >
        <TouchableOpacity
          onPress={() => {
            toggleCardExpansion(index);
          }}
        >
          <View style={styles.container}>
            <CustomImage source={image_path} />

            <TitleText title={title} superScript={superScript} />
            <DescriptionText description={description} />

            <Text style={styles.bottomText}>Starting from</Text>
            <Text style={styles.priceText}>{price}Ñ</Text>
          </View>

          {isExpanded && (
            <>
              <HiddenText hidden_description={hidden_description} />
              <SelectAndContinueBtn onPress={handleButtonPress} />
              <Separator seperatorStyle={styles.customSeperatorStyle} />
            </>
          )}
        </TouchableOpacity>
      </BlurViewCard>
    </MView>
  );
};

const MotionTypeScreen = ({ jumpTo }) => {
  const [expandedCardIndex, setExpandedCardIndex] = useState(-1);

  const toggleCardExpansion = (index) => {
    if (expandedCardIndex === index) {
      setExpandedCardIndex(-1);
    } else {
      setExpandedCardIndex(index);
    }
  };

  const handleButtonPress = () => {
    // Change it to the next screen
  };

  return (
    <ImageBackground
      source={require("../assets/images/bookingProcessBackground.png")}
      // source={require("../assets/images/Booking_BG.png")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" />

      <FlatList
        data={cardDataArray}
        renderItem={({ item, index }) => (
          <CardItem
            item={item}
            index={index}
            expandedCardIndex={expandedCardIndex}
            toggleCardExpansion={toggleCardExpansion}
            isExpanded={expandedCardIndex === index}
            onPress={() => toggleCardExpansion(index)}
            handleButtonPress={handleButtonPress}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={Separator}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "90%",
  },
  clickedCardContainer: {
    height: 400,
  },
  separator: {
    height: 10,
  },
  customSeperatorStyle: {
    height: 45,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  imageContainer: {
    borderRadius: 20,
    overflow: "hidden",
    marginRight: 15,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 10,
  },
  titleContainer: {
    position: "absolute",
    left: 175,
    bottom: 130,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  bottomText: {
    position: "absolute",
    bottom: 20,
    right: 80,
    fontSize: 10,
    color: COLORS.lightTextColor,
  },
  priceText: {
    position: "absolute",
    bottom: 10,
    right: 10,
    fontSize: 25,
    color: COLORS.buttonColor,
  },
  buttonContainer: {
    position: "relative",
    top: 20,
    width: "50%",
    alignSelf: "center",
    backgroundColor: COLORS.buttonBGColor,
    opacity: 0.5,
    borderColor: COLORS.buttonBorderColor,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },
  buttonText: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    textAlign: "center",
  },
});

export default MotionTypeScreen;
