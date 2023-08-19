import { View, Text } from "native-base";
import { UiButton } from "../components/basic/UiButton";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import PassengerTypeCard from "../components/basic/PassengerTypeCard";

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
const PersonSelectScreen = ({ numberOfCabins }) => {
  //number of tickets available
  const [available, setAvailable] = useState(numberOfCabins);
  const [values, setValues] = useState({
    "Grown-Human": 0,
    "Young-Human": 0,
    Cyborg: 0,
    "Brannigan-Adult": 0,
    "Brannigan-Young": 0,
  });

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

  const navigation = useNavigation();
  return (
    <View flex={1} alignItems={"center"} justifyContent={"center"}>
      {speciesList.map((data) => {
        return (
          <PassengerTypeCard
            img={data.img}
            ageGroup={data.ageGroup}
            species={data.species}
            homePlanet={data.homePlanet}
            maxVal={available + values[data.species]}
            valueChange={changeVal}
          />
        );
      })}
      {/* <UiButton
        onPress={() => {
          navigation.navigate("PackageSelect");
        }}
      >
        <Text>Continue</Text>
      </UiButton> */}
    </View>
  );
};

export default PersonSelectScreen;
