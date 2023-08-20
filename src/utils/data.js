import * as Application from "expo-application";
import { Platform } from "react-native";

export const getUniqueId = async () => {
  if (Platform.OS == "ios") {
    const id = await Application.getIosIdForVendorAsync();
    return id;
  } else if (Platform.OS == "android") {
    return Application.androidId;
  } else {
    return Math.random();
  }
};

export const PLANETS = [
  {
    id: 1,
    name: "Volrizen 30A",
    image: require("../assets/images/SearchScreen/planets/planet_1.png"),
    x: 200,
    y: 250,
    size: 200,
  },
  {
    id: 2,
    name: "Kelton Q",
    image: require("../assets/images/SearchScreen/planets/planet_3.png"),
    x: -250,
    y: -150,
    size: 200,
  },
  {
    id: 3,
    name: "Aldari",
    image: require("../assets/images/SearchScreen/planets/planet_4.png"),
    x: 200,
    y: -250,
    size: 200,
  },
  {
    id: 4,
    name: "Wuxon",
    image: require("../assets/images/SearchScreen/planets/planet_5.png"),
    x: -150,
    y: 200,
    size: 200,
  },
  {
    id: 5,
    name: "Nueo",
    image: require("../assets/images/SearchScreen/planets/planet_6.png"),
    x: 0,
    y: 0,
    size: 200,
  },
];
