import { createStackNavigator } from "@react-navigation/stack";
import GalaxyScreen from "../screens/GalaxyScreen";
import SolarSystemScreen from "../screens/SolarSystemScreen";

const Stack = createStackNavigator();

function MapNavigator() {
  return (
    <Stack.Navigator initialRouteName="Galaxies">
      <Stack.Screen name="Galaxies" component={GalaxyScreen} />
      <Stack.Screen name="SolarSystems" component={SolarSystemScreen} />
    </Stack.Navigator>
  );
}

export default MapNavigator;
