import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import MapNavigator from "./src/navigators/MapNavigator";
import OnBoardingNavigator from "./src/navigators/OnBoardingNavigator";
import { NativeBaseProvider } from "native-base";
import HomeScreen from "./src/screens/HomeScreen";
import { theme } from "./src/utils/theme";
import HomeTabs from "./src/navigators/HomeTabs";
import BookingNavigator from "./src/navigators/BookingNavigator";
import ShipSelectionScreen from "./src/screens/ShipSelectionScreen";

const Stack = createStackNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="onBoarding">
      <Stack.Screen
        name="Home"
        component={HomeTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Booking"
        component={BookingNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="onBoarding"
        component={OnBoardingNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer theme={navTheme}>
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
