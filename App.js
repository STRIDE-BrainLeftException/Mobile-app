import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { LogBox, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
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
import PostCheckoutScreen from "./src/screens/PostCheckout";
import NumericInput from "./src/components/numeric/NumericInput";
import PassengerTypeCard from "./src/components/basic/PassengerTypeCard";
import PersonSelectScreen from "./src/screens/PersonSelectScreen";
import BiometricLogIn from "./src/screens/BiometricLogIn";
import LoggedIn from "./src/screens/LoggedIn";
import { ImageBackground } from "react-native";
import bg from "./src/assets/images/Booking_BG.png";
import CancelFlow from "./src/screens/CancelFlow";
import SelectPackage from "./src/screens/SelectPackage";
import Checkout from "./src/screens/Checkout";
import { UiButton } from "./src/components/basic/UiButton";
import MotionTypeScreen from "./src/screens/MotionType";
import { createStoreHook, Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";

const Stack = createStackNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

function RootStack() {
  //Temporary------------------------
  const [val, setVal] = useState(6);
  ///////////////////////////////////
  return (
    <ImageBackground style={{ flex: 1 }} source={bg}>
      <Stack.Navigator
        initialRouteName="onBoarding"
        // initialRouteName="LuxuryTest"
        // initialRouteName="LoggedIn"
        // initialRouteName="checkoutTest"
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
        <Stack.Screen
          name="LuxuryTest"
          component={SelectPackage}
          options={{ animationEnabled: false }}
        />
        <Stack.Screen
          name="checkoutTest"
          component={Checkout}
          options={{ animationEnabled: false }}
        />
        <Stack.Screen
          name="motionTypeTest"
          component={MotionTypeScreen}
          options={{ animationEnabled: false }}
        />
      </Stack.Navigator>
    </ImageBackground>

    // <View alignItems={"center"}>
    //   <PersonSelectScreen numberOfCabins={5} />
    // </View>
  );
}

export default function App() {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(appReducer, applyMiddleware(sagaMiddleware));
  LogBox.ignoreAllLogs();

  sagaMiddleware.run(rootSaga);

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer theme={navTheme}>
        <Provider store={store}>
          <RootStack />
        </Provider>
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
