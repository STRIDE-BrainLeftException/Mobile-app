import { View, Text } from "native-base";
import { UiButton } from "../components/basic/UiButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ImageBackground,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import BlurViewCard from "../components/basic/BlurViewCard";
import BookingSeats from "../components/SeatSelection";
import React, { useState } from "react";
import { HEIGHT } from "../utils/constants";

const BookingPageData = [
  {
    cabinImagePath: require("../assets/images/Booking_Process/Book_Seats_Screen/seats-img.png"),
    motionType: "HyperStride",
    shipName: "Star Dust C90",
    shipDescription: "Luxury Crusader with ",
    deck: [
      {
        deck_name: "Upper Deck",
        deck_seats: [
          ["*", "A", "A", "N", "N", "*"],
          ["*", "A", "A", "A", "A", "*"],
        ],
        deck_id: 0,
      },
      {
        deck_name: "Level 02",
        deck_seats: [
          ["*", "A", "A", "A", "A", "N", "*"],
          ["A", "A", "A", "N", "N", "A", "A"],
          ["N", "A", "A", "N", "N", "A", "A"],
          ["*", "A", "N", "A", "A", "A", "*"],
        ],
        deck_id: 1,
      },
      {
        deck_name: "Level 01",
        deck_seats: [
          ["*", "A", "A", "A", "A", "N", "*"],
          ["A", "N", "A", "A", "A", "N", "N"],
          ["A", "N", "A", "A", "A", "N", "N"],
          ["*", "A", "A", "A", "A", "N", "*"],
        ],
        deck_id: 2,
      },
      {
        deck_name: "Lower Deck",
        deck_seats: [
          ["*", "A", "A", "N", "N", "*"],
          ["*", "A", "A", "A", "A", "*"],
        ],
        deck_id: 3,
      },
    ],
  },
];

const DeckBtn = ({ deckname, onPress }) => {
  return <UiButton onTap={onPress} label={deckname} />;
};

// console.log(BookingPageData[0].deck[0].deck_seats);

const CabinBookingComponents = ({ bookingdata }) => {
  const [showDeckButtons, setShowDeckButtons] = useState(true);
  const [selectedDeck, setSelectedDeck] = useState(null);

  const route = useRoute();

  const data = route?.params?.data;
  console.log("CABINSELECT data", { data });

  const renderDeck = ({ item }) => {
    return (
      <DeckBtn
        deckname={item.deck_name}
        onPress={() => {
          console.log(`Pressed deck: ${item.deck_name}`);
          setShowDeckButtons(false);
          setSelectedDeck(item);
        }}
      />
    );
  };

  const handleBackToDeckButtons = () => {
    setShowDeckButtons(true);
    setSelectedDeck(null);
  };

  return (
    <ImageBackground
      source={require("../assets/images/Booking_BG.png")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.blurViewContainer} tint={"dark"} />
        <View style={{ height: HEIGHT * 0.3, justifyContent: "flex-end" }}>
          <Image
            alt={" "}
            source={bookingdata[0].cabinImagePath}
            style={styles.image}
          />
        </View>
        {/* <BlurViewCard
          containerStyle={{
            ...styles.blurViewContainer,
            height: HEIGHT * 0.6,
          }}
          tint={"dark"}
        > */}
        <ScrollView contentContainerStyle={{ paddingHorizontal: 70 }}>
          <View
            style={[
              styles.textBox,
              data.shipData.type === "HyperStride"
                ? { borderColor: "#3dc5ff" }
                : { borderColor: "#3eff3c" },
            ]}
          >
            <Text
              style={
                data.shipData.type === "HyperStride"
                  ? { color: "#3dc5ff" }
                  : { color: "#3eff3c" }
              }
            >
              {data.shipData.type}
            </Text>
          </View>

          <View style={{ height: 10 }} />

          <Text
            style={{
              fontSize: 32,
              lineHeight: 35.2,
              fontWeight: 700,
              alignSelf: "center",
            }}
          >
            {data.shipData.title}
          </Text>

          <Text
            style={{
              fontSize: 12,
              lineHeight: 15.38,
              fontWeight: 400,
              alignSelf: "center",
            }}
          >
            {bookingdata[0].shipDescription + data.shipData.type}
          </Text>

          <View style={{ height: 40 }} />

          <Text
            style={{
              fontSize: 20,
              lineHeight: 22,
              fontWeight: 400,
              alignSelf: "center",
            }}
          >
            Select Seating / Cabin
          </Text>

          <View style={{ height: 50 }} />

          {showDeckButtons ? (
            <FlatList
              data={bookingdata[0].deck}
              renderItem={renderDeck}
              keyExtractor={(item) => item.deck_id.toString()}
              ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
            />
          ) : null}

          {/* {selectedDeck && !showDeckButtons ? (
          <BookingSeats deckSeats={selectedDeck.deck_seats} />
        ) : null} */}

          {selectedDeck && !showDeckButtons ? (
            <React.Fragment>
              <BookingSeats
                deckSeats={selectedDeck.deck_seats}
                selectedDeck={selectedDeck}
              />
            </React.Fragment>
          ) : null}

          <View style={{ height: 50 }} />

          <Text
            style={{
              fontSize: 10,
              lineHeight: 12.82,
              fontWeight: 400,
              alignSelf: "center",
            }}
          >
            *A Cabin can fit up to 12 Travellers
          </Text>
          <View style={{ height: 40 }} />
        </ScrollView>
        {/* </BlurViewCard> */}
      </View>
    </ImageBackground>
  );
};

const CabinSelectScreen = () => {
  const navigation = useNavigation();
  return (
    <CabinBookingComponents bookingdata={BookingPageData} />
    // <View flex={1} alignItems={"center"} justifyContent={"center"}>
    // {/* <UiButton
    //   onPress={() => {
    //     navigation.navigate("PersonSelect");
    //   }}
    // >
    //   <Text>Continue</Text>
    // </UiButton> */}
    // </View>
  );
};

const styles = StyleSheet.create({
  blurViewContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "absolute",
    top: HEIGHT * 0.25,
    // bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: HEIGHT,
    // borderBottomEndRadius:0,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    // height: "80%",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },

  container: {
    flex: 1,
    // top: 100,
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    width: "100%",
  },
  bigContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.3)", // Semi-transparent white background
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  textBox: {
    paddingHorizontal: 10,
    alignSelf: "center",
    borderRadius: 10,
    borderWidth: 0.9,
  },
  image: {
    width: 294,
    height: 234,
    borderRadius: 51,
  },
  backButton: {
    marginTop: 10,
    color: "white",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});

export default CabinSelectScreen;
