import React, { useState } from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import GalaxyScreen from "../screens/GalaxyScreen";
import SolarSystemScreen from "../screens/SolarSystemScreen";
import FlightOptionPage from "../screens/FlightOptionPage";
import OnBoardingPage from "../components/OnBoardingPage";
import { useRoute } from "@react-navigation/native";
import { NavigationState } from "@react-navigation/native";
import { Text, View } from "native-base";
import { Button } from "react-native";
import { ONBOARDING_BOTTOM_COLOR } from "../utils/constants";
import PlaceholderImage from "../assets/images/bookingProcessBackground.png";

const Stack = createStackNavigator();

const screens = [
  { page: 1, image: PlaceholderImage, heading: "fndjipaf fdjif", description: "fdmjiafpd" },
  { page: 2, image: PlaceholderImage, heading: "fndjipaf fdjif", description: "fdmjiafpd" },
  { page: 3, image: PlaceholderImage, heading: "fndjipaf fdjif", description: "fdmjiafpd" },
  { page: 4, image: PlaceholderImage, heading: "fndjipaf fdjif", description: "fdmjiafpd" },
  { page: 5, image: PlaceholderImage, heading: "fndjipaf fdjif", description: "fdmjiafpd" },
];

function OnBoardingNavigator({ navigation }) {
  const [page, setPage] = useState(0);

  return (
    <>
      <Stack.Navigator
        initialRouteName={"page"}
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        <Stack.Screen name={"page"}>
          {(props) => (
            <FlightOptionPage
            key="page"
              {...props}
              item={{
                page: 1,
                image: PlaceholderImage,
                heading: "fndjipaf fdjif",
                description: "fdmjiafpd",
              }}
            />
          )}
        </Stack.Screen>
        {screens.map((s, index) => (
          <Stack.Screen key={index} name={String(s.page)}>
            {(props) => (
              <FlightOptionPage key={index} {...props} page={s.page} item={s} />
            )}
          </Stack.Screen>
        ))}
      </Stack.Navigator>
      <View backgroundColor={ONBOARDING_BOTTOM_COLOR}>
        <Button
          onPress={() => {
            const prev = Math.max(1, page - 1);
            navigation.navigate(String(prev));
            setPage(prev);
          }}
          title="prev"
        />
        <Button
          onPress={() => {
            const next = Math.min(page + 1, screens.length);
            navigation.navigate(String(next));
            setPage(next);
          }}
          title="next"
        />
      </View>
    </>
  );
}

export default OnBoardingNavigator;
