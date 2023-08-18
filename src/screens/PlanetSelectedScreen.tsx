import React, { useRef, useMemo, useCallback, useState } from "react";
import { ImageBackground } from "react-native";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  FlatList,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { BlurView } from "expo-blur";
import Accordion from "react-native-collapsible/Accordion";
import BlurViewCard from "../components/basic/BlurViewCard";
import COLORS from "../utils/colors";

import {
  BLUEVIEW_BORDER_COLOR,
  BLURVIEW_BORDER_WIDTH,
  BORDER_RADIUS,
} from "../utils/constants";
import PlanetStationsView from "../components/PlanetStationsView";

const planetArrayData = [
  {
    stationName: "Volrizen 30A",
    subStationName: "Albaraexperia | 3000LY",
    content:
      "Ancient forests, teeming waters, and untamed coasts host creatures reminiscent of Earth's past. Earthian settlers have established Darwin City and the Vincian Colony, while the Veridian Outpost braves uncharted frontiers. Now a magnet for intergalactic travelers, this world's mysteries and beauty enthrall those who journey from the stars.",
  },
];

const stationDetailsArrayData = [
  {
    stationName: "Vanezia",
    subStationName: "Volrizen 30A  |  3000LY",
    content:
      "Nestled amidst breathtaking crystalline landscapes, Celestia Prime is a marvel of bioluminescent architecture and advanced technology.",
    textComponents: [
      {
        HighlightedText: "Climate",
        NormalText: "Harmanized",
      },
      {
        HighlightedText: "Air",
        NormalText: "Breathable",
      },
      {
        HighlightedText: "Warm",
        NormalText: "Temperature",
      },
    ],
  },
  {
    stationName: "Alderine",
    subStationName: "Volrizen 30A  |  3000LY",
    content:
      "Nestled amidst breathtaking crystalline landscapes, Celestia Prime is a marvel of bioluminescent architecture and advanced technology.",
    textComponents: [
      {
        HighlightedText: "Climate",
        NormalText: "Harmanized",
      },
      {
        HighlightedText: "Air",
        NormalText: "Breathable (L2)",
      },
      {
        HighlightedText: "Cold",
        NormalText: "Temperature",
      },
    ],
  },
  {
    stationName: "Alderine2",
    subStationName: "Volrizen 30A  |  3000LY",
    content:
      "Nestled amidst breathtaking crystalline landscapes, Celestia Prime is a marvel of bioluminescent architecture and advanced technology.",
    textComponents: [
      {
        HighlightedText: "Climate",
        NormalText: "Harmanized",
      },
      {
        HighlightedText: "Air",
        NormalText: "Breathable (L2)",
      },
      {
        HighlightedText: "Cold",
        NormalText: "Temperature",
      },
    ],
  },
];

const whereToGoArrayData = [
  {
    image_path: require("../assets/images/Booking_Process/Planet_Details_Screen/where_to_go/img.png"),
    destination_name: "Lißa Dune Racing",
    station_number: 1,
  },
  {
    image_path: require("../assets/images/Booking_Process/Planet_Details_Screen/where_to_go/img-1.png"),
    destination_name: "Hapez Plant Museum",
    station_number: 2,
  },
  {
    image_path: require("../assets/images/Booking_Process/Planet_Details_Screen/where_to_go/img-2.png"),
    destination_name: "Horizon City Tower",
    station_number: 3,
  },
  {
    image_path: require("../assets/images/Booking_Process/Planet_Details_Screen/where_to_go/img-3.png"),
    destination_name: "Signal Tower of yore",
    station_number: 2,
  },
  {
    image_path: require("../assets/images/Booking_Process/Planet_Details_Screen/where_to_go/img-4.png"),
    destination_name: "Kriptony Dreamer",
    station_number: 1,
  },
  {
    image_path: require("../assets/images/Booking_Process/Planet_Details_Screen/where_to_go/img-5.png"),
    destination_name: "Aplha Moon Watching",
    station_number: 1,
  },
];

const culturalDetailsArrayData = [
  {
    image_path: require("../assets/images/Booking_Process/Planet_Details_Screen/culutural_diversity/hobogarians-img.png"),
    title: "Hobogarians",
    description:
      "The native inhabitants of Volrizen, known for their captivating and developed culture.",
    hiddenDescription:
      "Residing amidst the tranquil aqua expanse, the Hobogarians have thrived through eons, forging a unique connection with their oceanic realm. With luminous bioluminescent patterns adorning their iridescent skin, they exude an ethereal beauty that mirrors the planet's enigmatic seas.",
    station_number: 1,
  },
  {
    image_path: require("../assets/images/Booking_Process/Planet_Details_Screen/culutural_diversity/noika-img.png"),
    title: "Noika",
    description:
      "Their main language is Noika. Noika contains 20 hand signals and 10 rhythmical claps.",
    hiddenDescription:
      "Sometimes they read their minds by holding their hands. Since humans can't read minds they learn the Noika language to communicate. Other than Noika there are about 100 languages but they consider noika as the main language",
    station_number: 2,
  },
  {
    image_path: require("../assets/images/Booking_Process/Planet_Details_Screen/culutural_diversity/Lumina-img.png"),
    title: "Lumina Spire",
    description: "A marvel of artistry and spiritual significance.",
    hiddenDescription:
      "Rising from the depths like a crystalline beacon, this tower is both an architectural wonder and a sacred sanctuary for the Hobogarian community. Named after the radiant Lumina blooms that grace Volrizen's underwater landscape, the Dreamcatcher Spire embodies the essence of the Hobogarians' spiritual connection to their aquatic realm.",
    station_number: 3,
  },
  {
    image_path: require("../assets/images/Booking_Process/Planet_Details_Screen/culutural_diversity/stancy-img.png"),
    title: "Stancy",
    description:
      "The predominant faith is Stansy. They originate from the stars.",
    hiddenDescription:
      "The main religion is stansy. They believe they are made from the stars because of that they pray for stars. There are about 50 other religions other than stansi.",
    station_number: 1,
  },
];

const TitleContainer = ({ stationName, subStationName, content }) => {
  return (
    <View style={{ flex: 1, width: "80%", alignSelf: "center" }}>
      <Text
        style={{
          fontSize: 32,
          lineHeight: 35.2,
          color: "rgba(255, 255, 255, 1)",
          alignSelf: "center",
        }}
      >
        {stationName}
      </Text>

      <Text
        style={{
          fontSize: 12,
          lineHeight: 15.38,
          color: "rgba(235, 235, 245, 1)",
          alignSelf: "center",
        }}
      >
        {subStationName}
      </Text>

      <View style={{ height: 5 }} />

      <Text
        style={{
          fontSize: 10,
          lineHeight: 12.82,
          color: "rgba(185, 234, 255, 1)",
          alignSelf: "center",
          textAlign: "center",
        }}
      >
        {content}
      </Text>

      <View style={{ height: 10 }} />

      <Text
        style={{
          fontSize: 20,
          lineHeight: 22,
          color: "rgba(255, 255, 255, 1)",
          textAlign: "left",
        }}
      >
        Where to Go
      </Text>
      <View style={{ height: 20 }} />
    </View>
  );
};

const PlanetSelectedTitleContainer = ({
  stationName,
  subStationName,
  content,
  textComponents,
}) => {
  const SmallTextComp = ({ HighlightedText, NormalText }) => (
    <View style={{ flexDirection: "column", alignItems: "center" }}>
      <Text
        style={{
          fontSize: 20,
          // lineHeight: 15.38,
          color: "rgba(29, 187, 255, 1)",
          textAlign: "left",
          fontWeight: "bold",
        }}
      >
        {HighlightedText}
      </Text>
      <Text
        style={{
          fontSize: 8,
          lineHeight: 15.38,
          color: "rgba(29, 187, 255, 1)",
          textAlign: "left",
        }}
      >
        {NormalText}
      </Text>
    </View>
  );

  return (
    <View style={{ flex: 1, width: "80%", alignSelf: "center" }}>
      <Text
        style={{
          fontSize: 32,
          lineHeight: 35.2,
          color: "rgba(255, 255, 255, 1)",
          alignSelf: "center",
        }}
      >
        {stationName}
      </Text>

      <Text
        style={{
          fontSize: 12,
          lineHeight: 15.38,
          color: "rgba(235, 235, 245, 1)",
          alignSelf: "center",
        }}
      >
        {subStationName}
      </Text>

      <View style={{ height: 5 }} />

      <Text
        style={{
          fontSize: 10,
          lineHeight: 12.82,
          color: "rgba(185, 234, 255, 1)",
          alignSelf: "center",
          textAlign: "center",
        }}
      >
        {content}
      </Text>

      <View style={{ height: 10 }} />

      <View
        style={{
          flexDirection: "row",
          alignContent: "center",
          alignSelf: "center",
        }}
      >
        <SmallTextComp
          HighlightedText={textComponents[0].HighlightedText}
          NormalText={textComponents[0].NormalText}
        />
        <View style={{ width: 40 }} />
        <SmallTextComp
          HighlightedText={textComponents[1].HighlightedText}
          NormalText={textComponents[1].NormalText}
        />
        <View style={{ width: 40 }} />
        <SmallTextComp
          HighlightedText={textComponents[2].HighlightedText}
          NormalText={textComponents[2].NormalText}
        />
      </View>

      <View style={{ height: 10 }} />

      <Text
        style={{
          fontSize: 20,
          lineHeight: 22,
          color: "rgba(255, 255, 255, 1)",
          textAlign: "left",
        }}
      >
        Places to visit in {stationName}
      </Text>
      <View style={{ height: 20 }} />
    </View>
  );
};

const CustomImage = ({ source }) => {
  return <Image source={source} style={styles.image} resizeMode="cover" />;
};

const PopularDestinationSection = ({ image_path, destination_name }) => {
  return (
    <View style={styles.container_where_to_image}>
      <BlurView style={styles.blurView}>
        <CustomImage source={image_path} />
        <View style={{ height: 5 }}></View>
        <Text
          style={{
            color: "rgba(255, 255, 255, 1)",
            fontSize: 11.71,
            textAlign: "center",
          }}
        >
          {destination_name}
        </Text>
      </BlurView>
    </View>
  );
};

const DefaultContent = ({ image_path, title, description }) => {
  return (
    <View style={styles.cultural_container}>
      <CustomImage source={image_path} />

      <View style={{ width: 10 }} />
      <View style={{ flexDirection: "column", width: "50%" }}>
        <Text style={{ fontSize: 24, lineHeight: 30, color: COLORS.textColor }}>
          {title}
        </Text>

        <View style={{ height: 17 }} />
        <Text
          style={{
            fontSize: 11,
            lineHeight: 18,
            color: COLORS.textColor,
            flex: 1,
            textAlign: "left",
          }}
        >
          {description}
        </Text>
      </View>
    </View>
  );
};

const HiddenContent = ({ hiddenDescription }) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          lineHeight: 22,
          color: "rgba(255, 255, 255, 1)",
          left: 7,
        }}
      >
        More ...
      </Text>
      <View style={{ height: 6 }} />
      <Text
        style={{
          fontSize: 12,
          lineHeight: 15.38,
          color: "rgba(255, 255, 255, 1)",
          left: 7,
        }}
      >
        {hiddenDescription}
      </Text>
    </View>
  );
};

const Cultural_Diversity_Section = ({
  culturalDetailsArrayData,
  selectedStation,
}) => {
  const filteredCulturalDetails = selectedStation
    ? culturalDetailsArrayData.filter(
        (item) => item.station_number === selectedStation.id
      )
    : culturalDetailsArrayData;
  
  // console.log("selectedStationID", selectedStation?.id);
  // console.log("filteredCulturalDetails", filteredCulturalDetails);
  // console.log(culturalDetailsArrayData[0].station_number == selectedStation?.id)

  const SECTIONS = useMemo(
    () =>
      filteredCulturalDetails.map((item) => ({
        title: item.title,
        content: <HiddenContent hiddenDescription={item.hiddenDescription} />,
        image_path: item.image_path,
        description: item.description,
      })),
    [filteredCulturalDetails]
  );

  const [activeSections, setActiveSections] = useState([]);

  const renderHeader = useCallback((section, _, isActive) => {
    return (
      <BlurViewCard
        containerStyle={
          isActive
            ? {
                ...styles.container,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                borderBottomWidth: 0,
              }
            : { ...styles.container, marginBottom: 20 }
        }
      >
        <DefaultContent
          image_path={section.image_path}
          title={section.title}
          description={section.description}
        />
      </BlurViewCard>
    );
  }, []);

  const renderContent = (section) => {
    return (
      <BlurViewCard
        containerStyle={{
          ...styles.hidden_container,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderTopWidth: 0,
          marginBottom: 20,
        }}
      >
        {section.content}
      </BlurViewCard>
    );
  };

  return (
    <View>
      <Accordion
        sections={SECTIONS}
        activeSections={activeSections}
        onChange={setActiveSections}
        renderHeader={renderHeader}
        renderContent={renderContent}
        touchableComponent={TouchableWithoutFeedback}
      />
      <View style={{ height: 10 }} />
    </View>
  );
};

const Planet_Details_Section = ({ selectedStation }) => {
  const renderItem = ({ item, index }) => {
    // If selectedStation is null or item's station_number matches the selectedStation.id
    if (!selectedStation || item.station_number === selectedStation.id) {
      return (
        <PopularDestinationSection
          image_path={item.image_path}
          destination_name={item.destination_name}
        />
      );
    }

    // If the conditions are not met, return null (don't render anything)
    return null;
  };

  const Separator = ({}) => <View style={{ width: 10 }} />;

  // console.log("titleItem", titleItem);
  // console.log(titleItem);
  let previousItemMatchesCondition = true;

  return (
    <BottomSheetScrollView>
      {selectedStation ? (
        <PlanetSelectedTitleContainer
          stationName={
            stationDetailsArrayData[
              selectedStation.id ? selectedStation.id - 1 : 0
            ]?.stationName
          }
          subStationName={
            stationDetailsArrayData[
              selectedStation.id ? selectedStation.id - 1 : 0
            ]?.subStationName
          }
          content={
            stationDetailsArrayData[
              selectedStation.id ? selectedStation.id - 1 : 0
            ]?.content
          }
          textComponents={
            stationDetailsArrayData[
              selectedStation.id ? selectedStation.id - 1 : 0
            ]?.textComponents
          }
        />
      ) : (
        <TitleContainer
          stationName={planetArrayData[0].stationName}
          subStationName={planetArrayData[0].subStationName}
          content={planetArrayData[0].content}
        />
      )}

      <View style={{ flexDirection: "row" }}>
        <View style={{ width: "5%" }} />
        <FlatList
          data={whereToGoArrayData}
          renderItem={({ item, index }) => {
            const currentItemMatchesCondition =
              !selectedStation || item.station_number === selectedStation.id;

            const renderItemResult = renderItem({ item, index });

            // Render separator only if both the previous and current items match the condition
            const renderSeparator =
              index > 0 &&
              (previousItemMatchesCondition || currentItemMatchesCondition);

            previousItemMatchesCondition = currentItemMatchesCondition;

            return (
              <>
                {renderSeparator && <Separator />}
                {renderItemResult}
              </>
            );
          }}
          keyExtractor={(item) => item.destination_name}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContent}
        />
      </View>

      <View style={{ height: 20 }} />

      <Text
        style={{
          fontSize: 20,
          lineHeight: 22,
          color: "rgba(255, 255, 255, 1)",
          textAlign: "left",
          left: 40,
        }}
      >
        Cultural Diversity
      </Text>
      <View style={{ height: 20 }} />

      <Cultural_Diversity_Section
        culturalDetailsArrayData={culturalDetailsArrayData}
        selectedStation={selectedStation}
      />

      <View style={{ height: 50 }} />
    </BottomSheetScrollView>
  );
};

const PlanetSelectedScreen = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [selectedStation, setSelectedStation] = useState();

  // variables
  const snapPoints = useMemo(() => ["60%", "100%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    // console.log("handleSheetChanges", index);
  }, []);

  const stations = [
    { id: 1, name: "Station 1", degree: 90 },
    { id: 2, name: "Station 2", degree: 270 },
    { id: 3, name: "Station 3", degree: 20 },
    // { id: 4, name: "Station 3", degree: 180 },
  ];

  return (
    <ImageBackground
      source={require("../assets/images/Booking_BG.png")}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <View style={{ position: "relative", marginTop: 50 }}>
        <PlanetStationsView
          stations={stations}
          selectedStation={selectedStation}
          setSelectedStation={setSelectedStation}
        />
      </View>
      <BottomSheet
        handleIndicatorStyle={{ backgroundColor: "white", width: 60 }}
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        style={{ backgroundColor: "transparent" }}
        // containerStyle={{backgroundColor: 'red'}}
        backgroundStyle={{ backgroundColor: "transparent" }}
        backgroundComponent={({ style }) => (
          <View style={[styles.contentContainer, style]}>
            <BlurView
              intensity={15}
              style={[
                { flex: 1, width: "100%", borderRadius: BORDER_RADIUS },
                style,
              ]}
            />
          </View>
        )}
      >
        {/* <BottomSheetScrollView> */}
        {/* {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9.1].map((i) => {
            return (
              <View key={i} style={{ height: 200, width: "90%" }}>
                <Text>{i}</Text>
              </View>
            );
          })} */}
        {/* <BlurView style={{ flex: 1, width: "100%" }}> */}
        {/* <Text>Awesome 🎉</Text> */}
        {/* </BottomSheetScrollView> */}
        {/* </BlurView> */}

        <Planet_Details_Section selectedStation={selectedStation} />
      </BottomSheet>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  blurView: {
    width: "100%",
    alignItems: "center",
    paddingTop: 20,
    height: "100%",
    borderRadius: 20,
  },
  container: {
    flex: 1,
    // padding: 24,
    // backgroundColor: "grey",
    width: "85%",
  },
  hidden_container: {
    // bor
    width: "85%",
  },
  container_where_to_image: {
    overflow: "hidden",
    borderRadius: 20,
    width: 175,
    height: 195,
    backgroundColor: "transparent",
    borderColor: "rgba(255,255,255,0.5)",
  },
  contentContainer: {
    borderWidth: BLURVIEW_BORDER_WIDTH,
    borderColor: BLUEVIEW_BORDER_COLOR,
    borderRadius: BORDER_RADIUS,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    alignItems: "center",
    backgroundColor: "transparent",
  },
  image: {
    borderRadius: 10,
    width: 140,
    height: 140,
  },
  cardContainer: {
    width: "40%",
    position: "relative",
  },
  cultural_container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  flatListContent: {
    paddingHorizontal: 10, // Adjust horizontal padding to control spacing
  },
});

export default PlanetSelectedScreen;
