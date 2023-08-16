import React from "react";
import { View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarouselItem";

const data = [
  {
    title: "Aenean leo",
    body: "Ut tincidunt tincidunt ",
    imgUrl: "https://picsum.photos/id/11/200/300",
    stats : [{title: 123, body: 'fndsf'},{title: "1M+", body: 'fdkldsf'},{title: 232, body: 'fbdsafbd'}]
  },
  {
    title: "In turpis",
    body: "Aenean ut eros et",
    imgUrl: "https://picsum.photos/id/10/200/300",
    stats : [{title: 123, body: 'fndsf'},{title: "1M+", body: 'fdkldsf'},{title: 232, body: 'fbdsafbd'}]
  },
  {
    title: "Lorem Ipsum",
    body: "Phasellus ullamcorper",
    imgUrl: "https://picsum.photos/id/12/200/300",
    stats : [{title: 123, body: 'fndsf'},{title: "1M+", body: 'fdkldsf'},{title: 232, body: 'fbdsafbd'}]
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
