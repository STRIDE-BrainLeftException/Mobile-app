import {
  createStackNavigator,
  TransitionPresets,
  TransitionSpecs,
} from "@react-navigation/stack";
import GalaxyScreen from "../screens/GalaxyScreen";
import SolarSystemScreen from "../screens/SolarSystemScreen";
import PlanetScreen from "../screens/PlanetScreen";
import { Animated, ImageBackground } from "react-native";
import MapNavigator from "./MapNavigator";
import PlanetSelectedScreen from "../screens/PlanetSelectedScreen";
import MotionTypeScreen from "../screens/MotionType";
import DateSelectScreen from "../screens/Calendar";
import SelectPackage from "../screens/SelectPackage";
import ShipSelectionScreen from "../screens/ShipSelectionScreen";
import { View } from "native-base";
import CabinSelectScreen from "../screens/CabinSelectScreen";
import PersonSelectScreen from "../screens/PersonSelectScreen";
import Checkout from "../screens/Checkout";
import { NavigationHeader } from "../components/basic/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import PostCheckoutScreen from "../screens/PostCheckout";
import CancelFlow from "../screens/CancelFlow";
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
      transform: [
        {
          translateX: Animated.multiply(
            progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [
                screen.width, // Focused, but offscreen in the beginning
                0, // Fully focused
                -screen.width, // Fully unfocused
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

function BookingNavigator({ _jumpTo }) {
  const navigation = useNavigation();

  const jumpTo = (route) => {
    navigation.navigate("Galaxies");
    _jumpTo(route);
  };

  const CustomHeader = (props) => {
    const mapping = {
      StationSelect: "Select station",
      DateSelect: "Select Date",
      MotionSelect: "Select motion",
      CarrierSelect: "Select carrier",
      CabinSelect: "Select seats",
      PersonSelect: "Select ticket",
      PackageSelect: "Select package",
      Checkout: "Checkout",
      Confirmation: "Ride confirmed",
    };
    return (
      <NavigationHeader
        props={props}
        mapping={mapping}
        rightIconButton={<CancelFlow jumpTo={jumpTo} />}
      />
    );
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
          cardStyleInterpolator: forSlide,
        }}
      >
        <Stack.Screen
          name="Map"
          // component={MapNavigator}
          options={{
            headerShown: false,
            ...TransitionPresets.ScaleFromCenterAndroid,
          }}
        >
          {(props) => <MapNavigator {...props} jumpTo={jumpTo} />}
        </Stack.Screen>
        <Stack.Screen
          name="StationSelect"
          component={PlanetSelectedScreen}
          options={{
            ...TransitionPresets.ScaleFromCenterAndroid,
          }}
        />
        <Stack.Screen name="DateSelect" component={DateSelectScreen} />
        <Stack.Screen
          name="MotionSelect"
          component={MotionTypeScreen}
          options={{ headerTransparent: true }}
        />
        <Stack.Screen name="CarrierSelect" component={ShipSelectionScreen} />
        <Stack.Screen name="CabinSelect" component={CabinSelectScreen} />
        <Stack.Screen name="PersonSelect" component={PersonSelectScreen} />
        <Stack.Screen name="PackageSelect" component={SelectPackage} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="Confirmation">
          {(props) => <PostCheckoutScreen {...props} jumpTo={jumpTo} />}
        </Stack.Screen>
      </Stack.Navigator>
      {/* </SafeAreaView> */}
    </View>
  );
}

export default BookingNavigator;
