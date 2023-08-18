import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import GalaxyScreen from "../screens/GalaxyScreen";
import SolarSystemScreen from "../screens/SolarSystemScreen";
import PlanetScreen from "../screens/PlanetScreen";
import { Animated, ImageBackground } from "react-native";
import MapNavigator from "./MapNavigator";
import PlanetSelectedScreen from "../screens/PlanetSelectedScreen";
import MotionTypeScreen from "../screens/MotionType";
import DateSelectScreen from "../screens/Calender";
import SelectPackage from "../screens/SelectPackage";
import ShipSelectionScreen from "../screens/ShipSelectionScreen";
import { View } from "native-base";

const Stack = createStackNavigator();

const forSlide = ({ current, next, inverted, layouts: { screen } }) => {
  const progress = Animated.add(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: "clamp",
    }),
    next
      ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: "clamp",
        })
      : 0
  );

  return {
    cardStyle: {
      opacity: Animated.multiply(
        progress.interpolate({
          inputRange: [0, 1, 2],
          outputRange: [
            0, // Focused, but offscreen in the beginning
            1, // Fully focused
            0, // Fully unfocused
          ],
          extrapolate: "clamp",
        }),
        inverted
      ),
      transform: [
        {
          scale: Animated.multiply(
            progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [
                0, // Focused, but offscreen in the beginning
                1, // Fully focused
                2, // Fully unfocused
              ],
              extrapolate: "clamp",
            }),
            inverted
          ),
        },
      ],
    },
  };
};

function BookingNavigator() {
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../assets/images/Booking_BG.png")}
    >
      <Stack.Navigator
        initialRouteName="Map"
        screenOptions={{
          //   cardStyleInterpolator: forSlide,
          headerMode: "screen",
          headerShown: false,
          cardStyle: { backgroundColor: "transparent"},
        }}
      >
        <Stack.Screen name="Map" component={MapNavigator} />
        <Stack.Screen name="StationSelect" component={PlanetSelectedScreen} />
        <Stack.Screen name="DateSelect" component={DateSelectScreen} />
        <Stack.Screen name="MotionSelect" component={MotionTypeScreen} />
        <Stack.Screen name="CarrierSelect" component={ShipSelectionScreen} />
        {/* add a cabin select */}
        {/* add person select */}
        <Stack.Screen name="PackageSelect" component={SelectPackage} />
        {/* add checkout */}
        {/* booking details */}
      </Stack.Navigator>
    </ImageBackground>
  );
}

export default BookingNavigator;
