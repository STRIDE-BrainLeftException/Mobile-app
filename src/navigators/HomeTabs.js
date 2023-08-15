import * as React from "react";
import { View, useWindowDimensions, Text } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import MapNavigator from "./MapNavigator";

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);

const renderScene = SceneMap({
  home: MapNavigator,
  second: SecondRoute,
});

export default function HomeTabs() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home" },
    { key: "second", title: "Second" },
  ]);

  return (
    <TabView
      swipeEnabled={false}
      tabBarPosition="bottom"
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      lazy={true}
      renderLazyPlaceholder={() => (
        <View>
          <Text>lazy</Text>
        </View>
      )}
    />
  );
}
