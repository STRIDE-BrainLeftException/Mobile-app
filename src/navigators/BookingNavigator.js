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
import Checkout from "../screens/Checkout";
import { NavigationHeader } from "../components/basic/Header";
import { SafeAreaView } from "react-native-safe-area-context";

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

function BookingNavigator({ jumpTo }) {
  const CustomHeader = (props) => {
    const mapping = {
      StationSelect: "Select station",
      DateSelect: "Select Date",
      MotionSelect: "Select motion type",
      CarrierSelect: "Select carrier",
      CabinSelect: "Select seats",
      PersonSelect: "Select ticket",
      PackageSelect: "Select package",
      Checkout: "Checkout",
    };
    return <NavigationHeader props={props} mapping={mapping} />;
  };

  return (
    <View
      style={{ flex: 1, paddingTop: 20 }}
      source={require("../assets/images/Booking_BG.png")}
    >
      {/* <SafeAreaView style={{ flex: 1 }}> */}
      <Stack.Navigator
        initialRouteName="Map"
        screenOptions={{
          // headerMode: "screen",
          cardStyle: { backgroundColor: "transparent" },
          header: CustomHeader,
        }}
      >
        <Stack.Screen
          name="Map"
          // component={MapNavigator}
          options={{ headerShown: false }}
        >
          {(props) => <MapNavigator {...props} jumpTo={jumpTo} />}
        </Stack.Screen>
        <Stack.Screen name="StationSelect" component={PlanetSelectedScreen} />
        <Stack.Screen name="DateSelect" component={DateSelectScreen} />
        <Stack.Screen name="MotionSelect" component={MotionTypeScreen} />
        <Stack.Screen name="CarrierSelect" component={ShipSelectionScreen} />
        <Stack.Screen name="CabinSelect" component={CabinSelectScreen} />
        <Stack.Screen name="PersonSelect" component={PersonSelectScreen} />
        <Stack.Screen name="PackageSelect" component={SelectPackage} />
        <Stack.Screen name="Checkout" component={Checkout} />
        {/* booking details */}
      </Stack.Navigator>
      {/* </SafeAreaView> */}
    </View>
  );
}

export default BookingNavigator;
