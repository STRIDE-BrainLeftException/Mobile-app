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
import Colors from "../utils/colors";

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
    description:
      "Ship across the universe and explore the marvels",
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

const Separator = ({seperatorStyle}) => <View style={[styles.separator, seperatorStyle]} />;

const CustomImage = ({ source }) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={source} style={styles.image} />
    </View>
  );
};

const TitleText = ({ title, superScript }) => {
  return (
    <View style={styles.titleContainer}>
      <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
        <Text style={{ fontSize: 24, lineHeight: 30, color: "#EEEEEE" }}>
          {title}
        </Text>
        <Text style={{ fontSize: 11, lineHeight: 18, color: "#EEEEEE" }}>
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
          color: "#EEEEEE",
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
          color: "#EEEEEE",
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
    <Text style={{ fontSize: 11, lineHeight: 18, color: "#EEEEEE", flex: 1 }}>
      {description}
    </Text>
  );
};

const SelectAndContinueBtn = ({ onPress }) => {
  return (
    // <BlurViewCard containerStyle={styles.buttonContainer}>
      <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Select & Continue</Text>
      </TouchableOpacity>
    // </BlurViewCard>
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
    <BlurViewCard containerStyle={[styles.cardContainer, isExpanded && styles.clikedCardContainer]}>
      <TouchableOpacity
        onPress={() => {
          // console.log("Card pressed for index:", index);
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
      </TouchableOpacity>
      {isExpanded && <HiddenText hidden_description={hidden_description} />}
      {isExpanded && <SelectAndContinueBtn onPress={handleButtonPress} />}
      {isExpanded && <Separator seperatorStyle={styles.customSeperatorStyle}/>}
    </BlurViewCard>
  );
};

const MotionTypeScreen = () => {
  const [expandedCardIndex, setExpandedCardIndex] = useState(-1); // Initialize with -1

  const toggleCardExpansion = (index) => {
    // console.log("Toggle function called for index:", index);
    if (expandedCardIndex === index) {
      // console.log("Collapsing card");
      setExpandedCardIndex(-1);
    } else {
      // console.log("Expanding card");
      setExpandedCardIndex(index);
      // console.log(index);
    }
  };

  const handleButtonPress = () => {
    // console.log("Button pressed!");
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
            isExpanded={expandedCardIndex === index} // Pass the isExpanded prop
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
  cardContainer:{
    width: "90%",
  },
  clikedCardContainer:{
    height: 400,
  },
  separator: {
    height: 10, // Adjust the height to your desired spacing
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
    resizeMode: "cover", // Make the image cover the entire screen
  },
  bottomText: {
    position: "absolute",
    bottom: 20, // Adjust this value to position vertically from the bottom
    right: 80, // Adjust this value to position horizontally from the right
    fontSize: 10, // Adjust the font size as needed
    color: "#D0D0D0",
  },
  priceText: {
    position: "absolute",
    bottom: 10,
    right: 10,
    fontSize: 25,
    color: Colors.buttonColor,
  },
  buttonContainer: {
    position: "relative",
    top:20,
    width: "50%", // Adjust the width as needed
    alignSelf: "center", // Center the contents horizontally
    // borderColor: "#527ffa",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    opacity: 0.5,
    borderColor: "rgba(151, 169, 246, 0.5)",
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    // backgroundColor: "blue",
  },
  buttonText: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    textAlign: "center"
  },
});

export default MotionTypeScreen;
