import React from "react";
import { View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarouselItem";

const data = [
  {
    title: "Futuorama",
    body: "Inter-Galactic Musical Fest ",
    img: require("./../../assets/images/HomeScreen/Events_Carousel/Featured_Card_2.png"),
    stats: [
      { title: 123, body: "Earth Days More" },
      { title: "23M+", body: "Interested" },
      { title: 9, body: "Direct Ships From Here" },
    ],
  },
  {
    title: "Planazario",
    body: "Galactic Flora Unveiled",
    img: require("./../../assets/images/HomeScreen/Events_Carousel/Featured_Card_3.png"),
    stats: [
      { title: 12, body: "Earth Days More" },
      { title: "3.8M+", body: "Interested" },
      { title: 1, body: "Direct Ships From Here" },
    ],
  },
  {
    title: "Azual Festival",
    body: "Leap Festival at Sky South Temple",
    img: require("./../../assets/images/HomeScreen/Events_Carousel/Featured_Card_4.png"),
    stats: [
      { title: 412, body: "Earth Days More" },
      { title: "49K+", body: "Interested" },
      { title: 2, body: "Direct Ships From Here" },
    ],
  },
  {
    title: "ExhiNora",
    body: "Verdigongberg Seasonal Events",
    img: require("./../../assets/images/HomeScreen/Events_Carousel/Featured_Card_5.png"),
    stats: [
      { title: 156, body: "Earth Days More" },
      { title: "8.8M+", body: "Interested" },
      { title: 5, body: "Direct Ships From Here" },
    ],
  },
  {
    title: "Algizer",
    body: "Kryton 23 Cultural Festival",
    img: require("./../../assets/images/HomeScreen/Events_Carousel/Featured_Card_1.png"),
    stats: [
      { title: 212, body: "Earth Days More" },
      { title: "4.5K+", body: "Interested" },
      { title: 1, body: "Direct Ships From Here" },
    ],
  },
];

const CarouselCards = () => {
  const isCarousel = React.useRef(null);

  return (
    <View>
      <Carousel
        // layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        enableSnap={true}
        loop={true}
        autoplay={true}
        autoplayDuration={3000}
        // inactiveSlideShift={0}
        // useScrollView={true}
      />
    </View>
  );
};

export default CarouselCards;
