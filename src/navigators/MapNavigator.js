import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import GalaxyScreen from "../screens/GalaxyScreen";
import SolarSystemScreen from "../screens/SolarSystemScreen";
import PlanetScreen from "../screens/PlanetScreen";
import { Animated } from "react-native";
import Calender from '../screens/Calender';
import SelectPackage from '../screens/SelectPackage';

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

function MapNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Galaxies"
      screenOptions={{
        // presentation: "modal",
        // ...TransitionPresets.SlideFromRightIOS,
        cardStyleInterpolator: forSlide,
      }}
    >
      <Stack.Screen name="SelectPackage" component={SelectPackage} />
      <Stack.Screen name="Calender" component={Calender} />
      <Stack.Screen name="Galaxies" component={GalaxyScreen} />
      <Stack.Screen name="SolarSystems" component={SolarSystemScreen} />
      <Stack.Screen name="Planets" component={PlanetScreen} />
    </Stack.Navigator>
  );
}

export default MapNavigator;
