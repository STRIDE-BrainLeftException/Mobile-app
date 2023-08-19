import * as React from "react";
import { View, useWindowDimensions, Text, ImageBackground } from "react-native";
import { TabView, SceneMap, TabBar, TabBarItem } from "react-native-tab-view";
import MapNavigator from "./MapNavigator";
import HomeScreen from "../screens/HomeScreen";
import BlurViewCard from "../components/basic/BlurViewCard";
import { BlurView } from "expo-blur";

import HomeIcon from "../assets/icons/app-bar-new/home_icon_default.png";
import HomeIconActive from "../assets/icons/app-bar-new/home_icon_active.png";
import RideIcon from "../assets/icons/app-bar-new/ride_icon_default.png";
import RideIconActive from "../assets/icons/app-bar-new/ride_icon_active.png";

import { Image } from "moti";
import { BOTTOM_TAB_BAR_HEIGHT } from "../utils/constants";
import MotionTypeScreen from "../screens/MotionType";
import PlanetSelectedScreen from "../screens/PlanetSelectedScreen";
import BookingNavigator from "./BookingNavigator";

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);

// const renderScene = SceneMap({
//   home: HomeScreen,
//   second: SecondRoute,
//   second2: MotionTypeScreen,
//   map2: SecondRoute,
//   map: MapNavigator,
// });
const renderScene = SceneMap({
  home: HomeScreen,
  second: PlanetSelectedScreen,
  second2: SecondRoute,
  map2: SecondRoute,
  map: MapNavigator,
});

export default function HomeTabs() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home" },
    { key: "map2", title: "Map" },
    { key: "map", title: "Map" },
    { key: "second2", title: "Second" },
    { key: "second", title: "Second" },
  ]);

  const renderScene = ({ route, jumpTo }) => {
    if (Math.abs(index - routes.indexOf(route)) > 2) {
      return <View />;
    }
    switch (route.key) {
      case "home":
        return <HomeScreen jumpTo={jumpTo} />;
      case "second":
        return <PlanetSelectedScreen jumpTo={jumpTo} />;
      case "second2":
        return <MotionTypeScreen jumpTo={jumpTo} />;
      case "map2":
        return <SecondRoute jumpTo={jumpTo} />;
      case "map":
        return <BookingNavigator jumpTo={jumpTo} />;
    }
  };

  const renderIcon = ({ route, focused, color }) => {
    const routes = {
      home: { active: HomeIconActive, default: HomeIcon },
      map: { active: RideIconActive, default: RideIcon },
      map2: { active: RideIconActive, default: RideIcon },
      second: { active: HomeIconActive, default: HomeIcon },
      second2: { active: HomeIconActive, default: HomeIcon },
    };
    return (
      <Image
        alt={" "}
        source={
          focused ? routes[route.key]["active"] : routes[route.key]["default"]
        }
        style={{ height: 30, width: 30 }}
        // color={color}
      />
    );
  };

  const renderTabBar = (props) => (
    <>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 20,
          right: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          overflow: "hidden",
          borderWidth: 1.5,
          borderColor: "rgba(255,255,255,0.1)",
          borderBottomWidth: 0,
          backgroundColor: "rgba(0, 0, 0, 0.521)",
          filter: "blur(10px)",
          backdropFilter: "invert(10px)",
          height: BOTTOM_TAB_BAR_HEIGHT,
        }}
      />
      <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: "white" }}
        style={{
          backgroundColor: "transparent",
          justifyContent: "space-between",
          position: "absolute",
          bottom: 0,
          left: 20,
          right: 20,
          // height: BOTTOM_TAB_BAR_HEIGHT + 70,
          // backgroundColor: "red",
          justifyContent: "flex-end",
        }}
        contentContainerStyle={{ height: BOTTOM_TAB_BAR_HEIGHT + 20 }}
        pressOpacity={0}
        pressColor="transparent"
        renderLabel={(props) => <View />}
        renderTabBarItem={(props) => {
          if (props.route.key == "map") {
            return (
              <View
                style={{
                  width: props.defaultTabWidth,
                  alignItems: "center",
                  justifyContent: "center",
                  left: 0,
                  right: 0,
                  height: 70,
                  transform: [{ translateY: 0 }],
                }}
              >
                <View
                  style={{
                    borderRadius: 50,
                    overflow: "hidden",
                  }}
                >
                  <BlurView
                    style={{
                      alignItems: "center",
                      backgroundColor: "rgba(0,0,50,0.5)",
                    }}

                    // tint="dark"
                  >
                    <TabBarItem
                      {...props}
                      style={{
                        width: 70,
                        // position: "absolute",
                        height: 70,
                        // borderRadius: 70,
                        // backgroundColor: "red",
                        // backgroundColor: "transparent",
                        // bottom: 50,
                      }}
                    />
                  </BlurView>
                </View>
              </View>
            );
          }
          return (
            <TabBarItem
              {...props}
              height={BOTTOM_TAB_BAR_HEIGHT + 30}
              style={{
                justifyContent: "flex-end",
                backgroundColor: "transparent",
              }}
            />
          );
        }}
        renderIcon={renderIcon}
      />
    </>
  );

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../assets/images/Booking_BG.png")}
    >
      <TabView
        swipeEnabled={false}
        tabBarPosition="bottom"
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        lazy={true}
        renderTabBar={renderTabBar}
        renderLazyPlaceholder={() => (
          <View>
            <Text>lazy</Text>
          </View>
        )}
      />
    </ImageBackground>
  );
}
