import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import GalaxyScreen from "../screens/GalaxyScreen";
import SolarSystemScreen from "../screens/SolarSystemScreen";
import PlanetScreen from "../screens/PlanetScreen";
import { Animated } from "react-native";
import MapNavigator from "./MapNavigator";
import PlanetSelectedScreen from "../screens/PlanetSelectedScreen";
import MotionTypeScreen from "../screens/MotionType";

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
    <Stack.Navigator
      initialRouteName="Map"
      screenOptions={
        {
          //   cardStyleInterpolator: forSlide,
          headerShown: false
        }
      }
    >
      <Stack.Screen name="Map" component={MapNavigator} />
      <Stack.Screen name="StationSelect" component={PlanetSelectedScreen} />
      <Stack.Screen name="MotionSelect" component={MotionTypeScreen} />
      {/* <Stack.Screen name="DateSelect" component={} /> */}
    </Stack.Navigator>
  );
}

export default BookingNavigator;
