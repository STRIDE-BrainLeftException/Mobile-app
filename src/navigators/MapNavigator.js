import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import GalaxyScreen from "../screens/GalaxyScreen";
import SolarSystemScreen from "../screens/SolarSystemScreen";
import PlanetScreen from "../screens/PlanetScreen";
import { Animated, Button, Text } from "react-native";
import { View } from "native-base";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Header } from "../components/basic/Header";
import CancelFlow from "../screens/CancelFlow";

const Stack = createStackNavigator();

const forSlide = ({
  current,
  next,
  inverted,
  layouts: { screen },
  ...rest
}) => {
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
                -200, // Focused, but offscreen in the beginning
                0, // Fully focused
                200, // Fully unfocused
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

function MapNavigator({ jumpTo }) {
  const navigation = useNavigation();
  const route = useRoute();
  const state = navigation.getState();

  const CustomHeader = ({ route, ...props }) => {
    // console.log({ route });
    const name = route.name;
    const title =
      name == "Galaxies"
        ? "Select galaxy"
        : name == "SolarSystems"
        ? "Select system"
        : name == "Planets"
        ? "Select planet"
        : "Error 404";
    return (
      <Header
        title={title}
        onBackPress={
          name == "Galaxies"
            ? () => {
                jumpTo("home");
              }
            : null
        }
        rightIconButton={<CancelFlow jumpTo={jumpTo} />}
      />
    );
  };

  return (
    <View style={{ paddingTop: 20, flex: 1 }}>
      <Stack.Navigator
        initialRouteName="Galaxies"
        screenOptions={{
          headerShown: true,
          header: CustomHeader,
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
