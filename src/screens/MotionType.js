import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import BlurViewCard from "../components/basic/BlurViewCard";
import { Text, StatusBar, Image, FlatList } from "react-native";

const cardDataArray = [
  {
    image_path: require("../assets/images/Booking_Process/Jump_Type_Screen/hyperStride-img.png"),
    title: "HyperStride",
    superScript: "TM",
    description: "Fastest Possible way to travel intergalactic",
    price: "899",
  },
  {
    image_path: require("../assets/images/Booking_Process/Jump_Type_Screen/cosmoV-img.png"),
    title: "CosmoV",
    superScript: "TM",
    description:
      "Enjoy luxurious tours across the galaxy abroad our Intergalactic cruise ships",
    price: "645",
  },
  {
    image_path: require("../assets/images/Booking_Process/Jump_Type_Screen/hibe-img.png"),
    title: "Hibe 2.0",
    superScript: "",
    description:
      "Travel to the furthest frontiers abroad our latest cryo-hybernation capsules",
    price: "399",
  },
  {
    image_path: require("../assets/images/Booking_Process/Jump_Type_Screen/general-ships-img.png"),
    title: "CosmoV",
    superScript: "TM",
    description:
      "Enjoy luxurious tours across the galaxy abroad our Intergalactic cruise ships",
    price: "645",
  },
  {
    image_path: require("../assets/images/Booking_Process/Jump_Type_Screen/general-ships-img.png"),
    title: "CosmoV",
    superScript: "TM",
    description:
      "Enjoy luxurious tours across the galaxy abroad our Intergalactic cruise ships",
    price: "645",
  },
];

const renderItem = ({ item }) => (
  <BlurViewCardConents
    image_path={item.image_path}
    title={item.title}
    superScript={item.superScript}
    description={item.description}
    price={item.price}
  />
);

const Separator = () => <View style={styles.separator} />;

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

const DescriptionText = ({ description }) => {
  return (
    <Text style={{ fontSize: 11, lineHeight: 18, color: "#EEEEEE", flex: 1 }}>
      {description}
    </Text>
  );
};

const BlurViewCardConents = ({
  image_path,
  title,
  superScript,
  description,
  price,
}) => {
  return (
    <BlurViewCard>
      <View style={styles.container}>
        <CustomImage source={image_path} />

        <TitleText title={title} superScript={superScript} />
        <DescriptionText description={description} />

        <Text style={styles.bottomText}>Starting from</Text>
        <Text style={styles.priceText}>{price}Ñ</Text>
      </View>
    </BlurViewCard>
  );
};

const MotionTypeScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/images/Booking_BG.png")}
      style={styles.backgroundImage}
    >
      <StatusBar barStyle="light-content" />

      <FlatList
        data={cardDataArray}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={Separator}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 10, // Adjust the height to your desired spacing
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
    color: "#4E96EA",
  },
});

export default MotionTypeScreen;
