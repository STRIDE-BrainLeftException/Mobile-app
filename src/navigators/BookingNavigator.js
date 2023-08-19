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
import CabinSelectScreen from "../screens/CabinSelectScreen";
import PersonSelectScreen from "../screens/PersonSelectScreen";

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
    <View
      style={{ flex: 1 }}
      source={require("../assets/images/Booking_BG.png")}
    >
      <Stack.Navigator
        initialRouteName="Map"
        screenOptions={{
          headerMode: "screen",
          headerShown: false,
          cardStyle: { backgroundColor: "transparent" },
        }}
      >
        <Stack.Screen name="Map" component={MapNavigator} />
        <Stack.Screen name="StationSelect" component={PlanetSelectedScreen} />
        <Stack.Screen name="DateSelect" component={DateSelectScreen} />
        <Stack.Screen name="MotionSelect" component={MotionTypeScreen} />
        <Stack.Screen name="CarrierSelect" component={ShipSelectionScreen} />
        <Stack.Screen name="CabinSelect" component={CabinSelectScreen} />
        <Stack.Screen name="PersonSelect" component={PersonSelectScreen} />
        <Stack.Screen name="PackageSelect" component={SelectPackage} />
        {/* add checkout */}
        {/* booking details */}
      </Stack.Navigator>
    </View>
  );
}

export default BookingNavigator;
