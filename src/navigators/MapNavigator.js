import { createStackNavigator } from "@react-navigation/stack";
import GalaxyScreen from "../screens/GalaxyScreen";
import SolarSystemScreen from "../screens/SolarSystemScreen";

const Stack = createStackNavigator();

const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

function MapNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Galaxies"
      screenOptions={{ presentation: "transparentModal" }}
    >
      <Stack.Screen name="Galaxies" component={GalaxyScreen} />
      <Stack.Screen name="SolarSystems" component={SolarSystemScreen} />
    </Stack.Navigator>
  );
}

export default MapNavigator;
