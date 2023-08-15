import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MapNavigator from './src/navigators/MapNavigator';
import OnBoardingNavigator from './src/navigators/OnBoardingNavigator';
import { NativeBaseProvider } from "native-base";

const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName='onBoarding'>
      <Stack.Screen
        name='Map'
        component={MapNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name='onBoarding' component={OnBoardingNavigator} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
