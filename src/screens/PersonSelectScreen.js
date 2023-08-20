import { View, Text } from "native-base";
import { UiButton } from "../components/basic/UiButton";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import PassengerTypeCard from "../components/basic/PassengerTypeCard";
import { StyleSheet } from "react-native";
import { ImageBackground } from "react-native";
import { HEIGHT, WIDTH } from "../constants/styles";
import { Image } from "react-native";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { BlurView } from "expo-blur";
const speciesList = [
  {
    img: require("./../assets/images/Booking_Process/No_of_Passengers_Screen/grown-human-img.png"),
    species: "Grown-Human",
    ageGroup: "Above 20 Years",
    homePlanet: "Earth,Sector-8,Milky-Way",
  },
  {
    img: require("./../assets/images/Booking_Process/No_of_Passengers_Screen/young-human-img.png"),
    species: "Young-Human",
    ageGroup: "Below 20 Years",
    homePlanet: "Earth,Sector-8,Milky-Way",
  },
  {
    img: require("./../assets/images/Booking_Process/No_of_Passengers_Screen/cyborg-img.png"),
    species: "Cyborg",
    ageGroup: "No Restriction",
    homePlanet: "Earth,Sector-8,Milky-Way",
  },
  {
    img: require("./../assets/images/Booking_Process/No_of_Passengers_Screen/grown-human-img.png"),
    species: "Brannigan-Adult",
    ageGroup: "Above 50 Years",
    homePlanet: "Bira 65,Sector-9,Andromeda",
  },
  {
    img: require("./../assets/images/Booking_Process/No_of_Passengers_Screen/grown-human-img.png"),
    species: "Brannigan-Young",
    ageGroup: "Below 50 Years",
    homePlanet: "Bira 65,Sector-9,Andromeda",
  },
];
//Number of cabins is given as input from cabin select page
//User can select only upto number of cabins
const PersonSelectScreen = ({
  transportationMode = "Hyper Stride",
  shipName = "Star Dust C90",
}) => {
  //number of tickets available
  const numberOfCabins = 3;
  const [available, setAvailable] = useState(numberOfCabins);
  const [values, setValues] = useState({
    "Grown-Human": 0,
    "Young-Human": 0,
    Cyborg: 0,
    "Brannigan-Adult": 0,
    "Brannigan-Young": 0,
  });

  const navigation = useNavigation();

  const changeVal = (species, newVal) => {
    const newDict = values;
    newDict[species] = newVal;
    const sumVals = Object.values(newDict).reduce(
      (accumulator, currentValue) => {
        return accumulator + currentValue;
      },
      0
    );
    setAvailable(numberOfCabins - sumVals);
    setValues(newDict);
  };

  const pressContinue = () => {
    navigation.navigate("PackageSelect");
  };

  return (
    <View flex={1} alignItems={"center"} justifyContent={"center"}>
      <ImageBackground
        source={require("../assets/images/Booking_BG.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.blurViewContainer} tint={"dark"} />
        <View
          style={{
            backgroundColor: "transparent",
            height: HEIGHT * 0.3,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Image
            alt={" "}
            source={require("../assets/images/Booking_Process/No_of_Passengers_Screen/passengers-img.png")}
            style={styles.image}
          />
        </View>
        <ScrollView>
          <View style={[styles.textBox]}>
            <Text style={{ color: "rgba(61, 197, 255, 1)" }}>
              {transportationMode}
            </Text>
          </View>

          <View style={{ height: 10 }} />

          <Text
            style={{
              fontSize: 32,
              lineHeight: 35.2,
              fontWeight: 700,
              alignSelf: "center",
            }}
          >
            {shipName}
          </Text>

          <Text
            style={{
              fontSize: 12,
              lineHeight: 15.38,
              fontWeight: 400,
              alignSelf: "center",
            }}
          >
            Luxury Crusader with {transportationMode}
          </Text>

          <View style={{ height: 10 }} />

          <Text
            style={{
              fontSize: 20,
              lineHeight: 22,
              fontWeight: 400,
              alignSelf: "center",
            }}
          >
            Select Ticket Types
          </Text>
          <Text
            style={{
              fontSize: 12,
              lineHeight: 15.38,
              fontWeight: 400,
              alignSelf: "center",
            }}
          >
            (You Have Chosen{" "}
            <Text
              style={{
                fontSize: 12,
                lineHeight: 15.38,
                fontWeight: 800,
                alignSelf: "center",
              }}
            >
              {numberOfCabins}
            </Text>{" "}
            Seats)
          </Text>
          <View style={{ height: 20 }} />
          {speciesList.map((data) => {
            return (
              <View alignItems={"center"}>
                <PassengerTypeCard
                  img={data.img}
                  ageGroup={data.ageGroup}
                  species={data.species}
                  homePlanet={data.homePlanet}
                  maxVal={available + values[data.species]}
                  valueChange={changeVal}
                />
                <View height={5} />
              </View>
            );
          })}
          <View
            style={{
              alignItems: "center",
              paddingTop: 10,
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                justifyContent: "center",

                borderRadius: 26,
                overflow: "hidden",
                alignItems: "center",
              }}
              onPress={() => {
                // if (available > 0) {
                pressContinue();
                // }
              }}
            >
              <BlurView
                style={{
                  padding: 12,
                  width: WIDTH * 0.6,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 18, color: "#fff", padding: 4 }}>
                  Continue
                </Text>
              </BlurView>
            </TouchableOpacity>
          </View>

          <View style={{ height: 50 }} />
        </ScrollView>

        {/* <UiButton
        onPress={() => {
          navigation.navigate("PackageSelect");
        }}
      >
        <Text>Continue</Text>
      </UiButton> */}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  blurViewContainer: {
    backgroundColor: "rgba(0,0,0,0.2)",
    position: "absolute",
    top: HEIGHT * 0.25,
    // bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: HEIGHT,
    // borderBottomEndRadius:0,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    // height: "80%",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  image: {
    width: 294,
    height: 234,
    borderRadius: 51,
  },
  container: {
    flex: 1,
    // top: 100,
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
  },
  textBox: {
    borderColor: "rgba(61, 197, 255, 1)",
    paddingHorizontal: 10,
    alignSelf: "center",
    borderRadius: 10,
    borderWidth: 0.9,
  },
});

export default PersonSelectScreen;
