import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Calendar } from "react-native-calendars";
import { UiButton } from "../components/basic/UiButton";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../utils/colors";

const DateSelectScreen = () => {
  const [selected, setSelected] = useState({});
  const navigation = useNavigation();

  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  const handleDayPress = (day) => {
    setSelected({ [day.dateString]: { selected: true } });
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

  return (
    <View style={styles.container}>
      <Calendar
        style={{
          borderWidth: 1,
          borderColor: "gray",
          borderRadius: 10,
          backgroundColor: "#00001a",
        }}
        markingType="period"
        initialDate={`${currentYear + 100}-${currentMonth}-${currentDay}`}
        theme={{
          // backgroundColor: "#ffffff",
          calendarBackground: "#00001a",
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
          setSelected(day);
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
                backgroundColor: "white",
                borderRadious: 2,
                borderWidth: 1,
                borderColor: "orange",
              },
              text: {
                color: "#ffffff",
              },
            },
          },
        }}
      />

      <View style={styles.selectedDateContainer}>
        {Object.keys(selected).length > 0 ? (
          <>
            <Text style={styles.departureText}>Depature date</Text>
            <Text style={styles.formattedDate}>{formattedDate}</Text>
            <Text style={styles.startingFromText}>Starting from</Text>
            <Text style={styles.priceText}>399Ñ</Text>

            <Text style={styles.priceNoteText}>
              Prices may differ depending on dates
            </Text>
          </>
        ) : (
          <Text style={styles.formattedDate}>{formattedDate}</Text>
        )}
      </View>

      <UiButton
        label={"Continue"}
        onTap={() => {
          navigation.navigate("MotionSelect");
        }}
        styles={{ padding: 50 }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    top: "10%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
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
