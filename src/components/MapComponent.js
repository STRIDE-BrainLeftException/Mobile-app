import React from "react";
import { View, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

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

  const type = props.type;

  const navigation = useNavigation();

  const _points = [
    {
      id: 1,
      x: 200,
      y: 250,
      size: 200,
    },
    {
      id: 2,
      x: -250,
      y: -150,
      size: 200,
    },
    {
      id: 3,
      x: 200,
      y: -250,
      size: 200,
    },
    { id: 4, x: -150, y: 200, size: 200 },
    { id: 5, x: 0, y: 0, size: 200 },
  ];

  const points = _points.map((p) => ({
    ...p,
    view: () => {
      return (
        <TouchableOpacity
          onPress={() => {
            console.log("check", {type})
            if (type == "galaxies") {
              console.log({ type });
              navigation.navigate("SolarSystems", { item: p });
            }
          }}
          style={[
            styles.square,
            {
              height: p.size,
              width: p.size,
              margin: Math.round(Math.random() * 10 + 10),
              backgroundColor: "#00ff00",
              position: "absolute",
              top: convertToDistanceFromEdge(p).x,
              left: convertToDistanceFromEdge(p).y,
            },
          ]}
        >
        </TouchableOpacity>
      );
    },
  }));

  function distance(p, point) {
    return Math.sqrt(Math.pow(point.x - p.x, 2) + Math.pow(point.y - p.y, 2));
  }

  const point = { x: 100, y: 200 };

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
    <View style={styles.container}>
      <View
        style={[
          styles.dropzone,
          {
            top: 0,
            height: 200,
            width: "100%",
            position: "absolute",
          },
        ]}
      ></View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  dropzone: {
    backgroundColor: "rgba(0, 0, 256, 0.5)",
  },
  square: {
    borderRadius: 15,
    backgroundColor: "red",
  },
});

export default MapComponent;
