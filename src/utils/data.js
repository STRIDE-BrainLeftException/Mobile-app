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
    name: "fndpaf",
    image: require("../assets/images/SearchScreen/planets/planet_1.png"),
    x: 200,
    y: 250,
    size: 200,
  },
  {
    id: 2,
    name: "fndpaf",
    image: require("../assets/images/SearchScreen/planets/planet_3.png"),
    x: -250,
    y: -150,
    size: 200,
  },
  {
    id: 3,
    name: "fndpaf",
    image: require("../assets/images/SearchScreen/planets/planet_4.png"),
    x: 200,
    y: -250,
    size: 200,
  },
  {
    id: 4,
    name: "fndpaf",
    image: require("../assets/images/SearchScreen/planets/planet_5.png"),
    x: -150,
    y: 200,
    size: 200,
  },
  {
    id: 5,
    name: "fndpaf",
    image: require("../assets/images/SearchScreen/planets/planet_6.png"),
    x: 0,
    y: 0,
    size: 200,
  },
];

export const SHIPS = [
  {
    id:1,
    title: "Star Dust C90",
    type: "HyperStride",
    engine: "Hyper Thrusters | 34LYpK",
    description:
      "Lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "899Ñ",
    passengers: "200",
    arrivalTime: "3 days",
    image: require("../assets/images/Booking_Process/Ship_Selection_Screen_1/Star-dust-ship-img.png"),
    visualArchive: [
      require("../assets/images/Booking_Process/Ship_Selection_Screen_1/img-1.png"),
      require("../assets/images/Booking_Process/Ship_Selection_Screen_1/img-2.png"),
      require("../assets/images/Booking_Process/Ship_Selection_Screen_1/img-3.png"),
    ],
  },
  {
    id: 2,
    title: "Exploriz 69",
    type: "Hib 2.0",
    engine: "Hi-Nova Thrusters | 16LYpK",
    description:
      "Lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "648Ñ",
    passengers: "600",
    arrivalTime: "761 days",
    image: require("../assets/images/Booking_Process/Ship_Selection_Screen_2/exploeriz-ship-img.png"),
    visualArchive: [
      require("../assets/images/Booking_Process/Ship_Selection_Screen_2/img-1.png"),
      require("../assets/images/Booking_Process/Ship_Selection_Screen_2/img-2.png"),
      require("../assets/images/Booking_Process/Ship_Selection_Screen_2/img-3.png"),
    ],
  },
];
