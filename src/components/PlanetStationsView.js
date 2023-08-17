import { Image, TouchableOpacity } from "react-native";
import { View } from "native-base";
import { WIDTH } from "../utils/constants";
import { View as MView, AnimatePresence } from "moti";

const PlanetStationsView = ({
  stations,
  selectedStation,
  setSelectedStation,
}) => {
  const points = stations;

  const PLANET_RADIUS = (WIDTH / 2) * 0.9;
  const DOT_SIZE = 20;

  const scale = selectedStation ? 1.5 : 1;
  const transform = selectedStation
    ? [
        {
          translateX:
            PLANET_RADIUS * Math.sin((selectedStation.degree / 180) * Math.PI),
          translateY:
            PLANET_RADIUS * Math.cos((selectedStation.degree / 180) * Math.PI),
        },
      ]
    : [{ translateX: 0, translateY: 0 }];

  return (
    <MView
      animate={{
        opacity: 1,
        // transform: transform,
        translateY: transform[0].translateY,
      }}
    //   transition={{type: "timing"}}
    >
      <MView
        from={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: scale,
          translateX: transform[0].translateX,
        //   translateY: 300,
        }}
        // transition={{type: "timing"}}
        exit={{
          opacity: 0,
          scale: 0.9,
        }}
        exitTransition={{
          type: "timing",
          duration: 2500,
        }}
      >
        <View
        // backgroundColor={"red.400"}
        >
          <TouchableOpacity
            onPress={() => {
              console.log("pressed");
              setSelectedStation(null);
            }}
          >
            <Image
              source={require("../assets/images/Booking_Process/planet.png")}
              style={{ height: WIDTH, width: WIDTH }}
            />
          </TouchableOpacity>
          {points.map((p) => {
            return (
              <TouchableOpacity
                key={p.id}
                onPress={() => {
                  console.log("station selected");
                  setSelectedStation(p);
                }}
                style={{
                  borderRadius: DOT_SIZE,
                  width: DOT_SIZE,
                  height: DOT_SIZE,
                  position: "absolute",
                  top:
                    WIDTH / 2 -
                    PLANET_RADIUS * Math.cos((p.degree / 180) * Math.PI) -
                    DOT_SIZE / 2,
                  left:
                    WIDTH / 2 -
                    PLANET_RADIUS * Math.sin((p.degree / 180) * Math.PI) -
                    DOT_SIZE / 2,
                  backgroundColor: "white",
                }}
              />
            );
          })}
        </View>
      </MView>
    </MView>
  );
};

export default PlanetStationsView;