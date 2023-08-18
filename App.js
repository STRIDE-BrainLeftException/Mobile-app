import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MapNavigator from "./src/navigators/MapNavigator";
import OnBoardingNavigator from "./src/navigators/OnBoardingNavigator";
import { NativeBaseProvider } from "native-base";
import HomeScreen from "./src/screens/HomeScreen";
import { theme } from "./src/utils/theme";
import HomeTabs from "./src/navigators/HomeTabs";
import ShipSelectionScreen from "./src/screens/ShipSelectionScreen";

const Stack = createStackNavigator();

function RootStack() {
  return (
    // <Stack.Navigator initialRouteName="Home">
    //   <Stack.Screen
    //     name="Home"
    //     component={HomeTabs}
    //     options={{ headerShown: false }}
    //   />
    //   <Stack.Screen
    //     name="Map"
    //     component={MapNavigator}
    //     options={{ headerShown: false }}
    //   />
    //   <Stack.Screen
    //     name="onBoarding"
    //     component={OnBoardingNavigator}
    //     options={{ headerShown: false }}
    //   />
    // </Stack.Navigator>
    <BiometricLogIn />
  );
}

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
      <StatusBar style="light" />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
