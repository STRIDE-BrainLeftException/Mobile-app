import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import GalaxyScreen from "../screens/GalaxyScreen";
import SolarSystemScreen from "../screens/SolarSystemScreen";
import PlanetScreen from "../screens/PlanetScreen";
import { Animated, Button, Text } from "react-native";
import { View } from "native-base";
import { useNavigation } from "@react-navigation/native";

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
          translateX: Animated.multiply(
            progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [
                -400, // Focused, but offscreen in the beginning
                0, // Fully focused
                400, // Fully unfocused
              ],
              extrapolate: "clamp",
            }),
            inverted
          ),
          
        },
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
  const navigation = useNavigation();

  return (
    <View style={{ paddingTop: 20, flex: 1 }}>
      <Button
        title="back"
        style={{ padding: 50 }}
        onPress={() => navigation.goBack()}
      />
      <Stack.Navigator
        initialRouteName="Galaxies"
        screenOptions={{
          headerShown: false,
          // presentation: "modal",
          // ...TransitionPresets.SlideFromRightIOS,
          cardStyleInterpolator: forSlide,
        }}
      >
        <Stack.Screen name="Galaxies" component={GalaxyScreen} />
        <Stack.Screen name="SolarSystems" component={SolarSystemScreen} />
        <Stack.Screen name="Planets" component={PlanetScreen} />
      </Stack.Navigator>
    </View>
  );
}

export default MapNavigator;
