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
import BiometricLogIn from "./src/screens/BiometricLogIn";
import LoggedIn from "./src/screens/LoggedIn";
import { ImageBackground } from "react-native";
import bg from "./src/assets/images/Booking_BG.png";

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
    <ImageBackground style={{ flex: 1 }} source={bg}>
      <Stack.Navigator
        // initialRouteName="LoggedIn"
        initialRouteName="onBoarding"
        // initialRouteName="LoggedIn"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "transparent" },
        }}
      >
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
        <Stack.Screen
          name="Login"
          component={BiometricLogIn}
          options={{ animationEnabled: false }}
        />
        <Stack.Screen
          name="LoggedIn"
          component={LoggedIn}
          options={{ animationEnabled: false }}
        />
      </Stack.Navigator>
    </ImageBackground>
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
