import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { View as MView } from "moti";
import { PLANETS } from "../utils/data";

const MAP_HEIGHT = 1000;
const MAP_WIDTH = 1000;

const convertToDistanceFromEdge = (p) => {
  return {
    x: MAP_HEIGHT / 2 + p.x - p.size / 2,
    y: MAP_WIDTH / 2 + p.y - p.size / 2,
  };
};

const MapComponent = (props) => {
  // We created two shared value for our moveable box x and y value
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  // const scale = useSharedValue(1);

  const type = props.type;

  const navigation = useNavigation();

  const types = {
    galaxies: [
      {
        id: 2,
        image: require("../assets/images/SearchScreen/galaxies/galaxy-1.png"),
        x: -250,
        y: -150,
        size: 200,
      },
      {
        id: 3,
        image: require("../assets/images/SearchScreen/galaxies/galaxy-4.png"),
        x: 200,
        y: -250,
        size: 200,
      },
      {
        id: 4,
        image: require("../assets/images/SearchScreen/galaxies/galaxy-3.png"),
        x: -150,
        y: 200,
        size: 200,
      },
      {
        id: 5,
        image: require("../assets/images/SearchScreen/galaxies/galaxy-2.png"),
        x: 0,
        y: 0,
        size: 200,
      },
    ],
    systems: [
      {
        id: 2,
        image: require("../assets/images/SearchScreen/planetory_systems/planetorySys_1.png"),
        x: -250,
        y: -150,
        size: 200,
      },
      {
        id: 3,
        image: require("../assets/images/SearchScreen/planetory_systems/planetorySys_4.png"),
        x: 200,
        y: -250,
        size: 200,
      },
      {
        id: 4,
        image: require("../assets/images/SearchScreen/planetory_systems/planetorySys_2.png"),
        x: -150,
        y: 200,
        size: 200,
      },
      {
        id: 5,
        image: require("../assets/images/SearchScreen/planetory_systems/planetorySys_3.png"),
        x: 0,
        y: 0,
        size: 200,
      },
    ],
    planets: PLANETS,
  };

  const _points = types[type];

  const points = _points.map((p) => ({
    ...p,
    view: () => {
      return (
        <MView
          key={p.id}
          style={{
            height: p.size,
            width: p.size,
            margin: Math.round(Math.random() * 10 + 10),
            // backgroundColor: "#00ff00",
            position: "absolute",
            bottom: convertToDistanceFromEdge(p).y,
            right: convertToDistanceFromEdge(p).x,
          }}
          from={{
            scale: 1,
            // translateX: -p.y,
            // translateY: -p.x,
          }}
          animate={{
            scale: 1,
            // translateX: 0,
            // translateY: 0
          }}
          exit={{
            scale: 1,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              if (translateY.value == -p.x && translateX.value == -p.y) {
                setTimeout(() => {
                  if (type == "galaxies") {
                    navigation.navigate("SolarSystems", { item: p });
                  }
                  if (type == "systems") {
                    navigation.navigate("Planets");
                  }
                  if (type == "planets") {
                    navigation.navigate("StationSelect", { planet: p });
                  }
                }, 10);
              } else {
                translateY.value = withSpring(
                  type == "planets" ? p.y - 200 : p.y
                );
                translateX.value = withSpring(p.x);
                setTimeout(() => {
                  if (type == "galaxies") {
                    navigation.navigate("SolarSystems", { item: p });
                  }
                  if (type == "systems") {
                    navigation.navigate("Planets");
                  }
                  if (type == "planets") {
                    navigation.navigate("StationSelect", { planet: p });
                  }
                }, 10);
              }
            }}
            // style={[styles.square, { height: p.size, width: p.size }]}
          >
            <Image
              style={{ height: p.size, width: p.size, resizeMode: "contain" }}
              source={p.image}
            />
          </TouchableOpacity>
        </MView>
      );
    },
  }));

  function distance(p, point) {
    return Math.sqrt(Math.pow(point.x - p.x, 2) + Math.pow(point.y - p.y, 2));
  }

  const getClosest = (point) => {
    var closest = points.reduce((a, b) =>
      distance(a, point) < distance(b, point) ? a : b
    );
    // console.log({ closest, point });
    translateX.value = withSpring(closest.x);
    translateY.value = withSpring(closest.y);
    // return closest;
  };

  React.useEffect(() => {
    // const closest = getClosest();
    // console.log({ closest });
  }, []);

  /*
    Also we have PanGestureHandler event for our moveable box .as you can see here onEnd event we are comparing event.absoluteY value.
    if the value
    */
  const panGestureEvent = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY;
    },
    onEnd: (event, context) => {
      runOnJS(getClosest)({ x: translateX.value, y: translateY.value });
      if (event.absoluteY > 150) {
        // withSpring animation our moveable box will move originial coordinate more user friendly.
        // translateX.value = withSpring(0);
        // translateY.value = withSpring(0);
      }
    },
  });
  // When shared value changes. animated style update the values accordingly that.
  const rStyle = useAnimatedStyle(() => {
    return {
      // scale: scale.value,
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  return (
    <MView style={styles.container} from={{ scale: 0 }} animate={{ scale: 1 }}>
      {/* <View
        style={[
          styles.dropzone,
          {
            top: 0,
            height: 200,
            width: '100%',
            position: 'absolute',
          },
        ]}
      ></View> */}
      <PanGestureHandler onGestureEvent={panGestureEvent}>
        <Animated.View
          style={[
            styles.square,
            { height: MAP_HEIGHT, width: MAP_WIDTH },
            rStyle,
          ]}
        >
          {points.map((point, index) => (
            <point.view key={index} />
          ))}
        </Animated.View>
      </PanGestureHandler>
    </MView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  dropzone: {
    backgroundColor: "rgba(0, 0, 123, 0.5)",
  },
  square: {
    borderRadius: 15,
    // backgroundColor: "red",
  },
});

export default MapComponent;
