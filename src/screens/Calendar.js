import React, { useCallback, useMemo, useRef, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Calendar } from "react-native-calendars";
import { UiButton } from "../components/basic/UiButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import COLORS from "../utils/colors";
import { BlurView } from "expo-blur";
import BottomSheet from "@gorhom/bottom-sheet";
import {
  BLUEVIEW_BORDER_COLOR,
  BLURVIEW_BORDER_WIDTH,
  BORDER_RADIUS,
} from "../utils/constants";
import { AnimatePresence, MotiText, MotiView } from "moti";
import { VStack } from "native-base";

const DateSelectScreen = () => {
  const [selected, setSelected] = useState({});
  const [showSelectedDate, setShowSelectedDate] = useState(false);
  const navigation = useNavigation();

  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  const handleDayPress = (day) => {
    setShowSelectedDate(false);
    setTimeout(() => {
      setSelected(day);
      setShowSelectedDate(true);
    }, 10);
    console.log(day.dateString);
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["100%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);
  const daySuffix = (day) => {
    if (day >= 11 && day <= 13) {
      return "th";
    }
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const formatDate = (dateObject) => {
    const day = dateObject.day;
    const monthName = months[dateObject.month - 1];
    const year = dateObject.year;

    const formattedDate = `${day}${daySuffix(day)} ${monthName}, ${year}`;
    return formattedDate;
  };

  const formattedDate =
    Object.keys(selected).length > 0 ? formatDate(selected) : "Select a Date";

  const route = useRoute();

  const data = route?.params?.data;
  console.log("DATESELECT data", { data });

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backgroundStyle={{ backgroundColor: "transparent" }}
        backgroundComponent={({ style }) => (
          <View style={[styles.contentContainer, style]}>
            <BlurView
              intensity={50}
              tint="dark"
              style={[
                { flex: 1, width: "100%", borderRadius: BORDER_RADIUS },
                style,
              ]}
            />
          </View>
        )}
      >
        <VStack marginTop={10} space={30} justifyContent="space-between">
          <Calendar
            style={{
              borderRadius: 10,
              backgroundColor: "#110e2559",
              marginHorizontal: 20,
            }}
            markingType="period"
            initialDate={`${currentYear + 100}-${currentMonth}-${currentDay}`}
            theme={{
              // backgroundColor: "#ffffff",
              calendarBackground: "transparent",
              textSectionTitleColor: "#b6c1cd",
              selectedDayBackgroundColor: "gray",
              selectedDayTextColor: "#ffffff",
              todayTextColor: "#00adf5",
              dayTextColor: "#d9e1e8",
              textDisabledColor: "#2d4150",
              dotColor: "#00adf5",
              selectedDotColor: "#ffffff",
              arrowColor: "white",
              monthTextColor: "#00adf5",
              indicatorColor: "#00001a",
              textDayFontWeight: "300",
              // textMonthFontWeight: "bold",
              textDayHeaderFontWeight: "300",
              textDayFontSize: 16,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 16,
            }}
            onDayPress={(day) => {
              handleDayPress(day);
              // console.log(day);
              // console.log(day.dateString);
            }}
            markedDates={{
              [selected]: {
                selected: true,
                disableTouchEvent: true,
                selectedDotColor: "orange",
                customStyles: {
                  container: {
                    backgroundColor: "red",
                    borderRadius: 2,
                    borderWidth: 1,
                    borderColor: "orange",
                  },
                  text: {
                    color: "#ffffff",
                  },
                },
              },
            }}
            // renderHeader={(date) => {
            //   const month = date.toString("MMMM");
            //   return <Text>{month}</Text>;
            // }}
          />
          <View>
            <View style={styles.selectedDateContainer}>
              <AnimatePresence>
                {Object.keys(selected).length > 0 ? (
                  <MotiView
                    from={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    transition={{
                      type: "timing",
                      duration: 1000,
                    }}
                    style={{
                      marginBottom: 30,
                    }}
                  >
                    <Text style={styles.departureText}>Depature date</Text>
                    <AnimatePresence>
                      {showSelectedDate && (
                        <MotiText
                          from={{
                            opacity: 0,
                          }}
                          animate={{
                            opacity: 1,
                          }}
                          exit={{
                            opacity: 0,
                          }}
                          transition={{
                            type: "timing",
                            duration: 100,
                          }}
                          style={styles.formattedDate}
                        >
                          {formattedDate}
                        </MotiText>
                      )}
                    </AnimatePresence>
                    <Text style={styles.startingFromText}>Starting from</Text>
                    <Text style={styles.priceText}>399Ñ</Text>

                    <Text style={styles.priceNoteText}>
                      Prices may differ depending on dates
                    </Text>
                  </MotiView>
                ) : (
                  <Text style={styles.formattedDate}>{formattedDate}</Text>
                )}
              </AnimatePresence>
            </View>
            {/* <UiButton
        onPress={() => {
          navigation.navigate("MotionSelect");
        }}>
        <Text>Continue</Text>
      </UiButton> */}
            {/* <TouchableOpacity
              style={[
                styles.buttonContainer,
                Object.keys(selected).length > 0
                  ? styles.buttonContainer
                  : styles.disabledButton,
              ]}
              disabled={Object.keys(selected).length === 0}
              onPress={() => {
                navigation.navigate("MotionSelect");
              }}
            >
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity> */}
            <UiButton
              label={"Continue"}
              onTap={() => {
                navigation.navigate("MotionSelect", {
                  data: { ...data, date: selected },
                });
              }}
              disabled={Object.keys(selected).length === 0}
              style={[
                styles.buttonContainer,
                Object.keys(selected).length > 0
                  ? styles.buttonContainer
                  : styles.disabledButton,
              ]}
            />
          </View>
        </VStack>
      </BottomSheet>
    </View>
  );
};
const styles = StyleSheet.create({
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
  container: {
    // top: "10%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    overflow: "hidden",
    flex: 1,
  },
  calendar: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    backgroundColor: "#00001a",
  },
  selectedDateContainer: {
    // height: 150,
    // justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  departureText: {
    color: "white",
    fontSize: 12,
  },
  formattedDate: {
    fontSize: 20,
    color: "white",
  },
  startingFromText: {
    color: "white",
    opacity: 0.5,
    fontSize: 10,
  },
  priceText: {
    color: "#1DBBFF",
    fontSize: 20,
  },
  priceNoteText: {
    color: "white",
    opacity: 0.75,
    fontSize: 10,
  },
  buttonContainer: {
    bottom: "10%",
    position: "relative",
    top: 20,
    width: "50%",
    alignSelf: "center",
    backgroundColor: COLORS.buttonBGColor,
    opacity: 0.5,
    borderColor: COLORS.buttonBorderColor,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },
  buttonText: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    textAlign: "center",
  },
  disabledButton: {
    opacity: 0.25,
  },
});

export default DateSelectScreen;
