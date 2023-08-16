import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const Calender = () => {
  const [selected, setSelected] = useState('');
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
  return (
    <View style={styles.container}>
      <Calendar
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 10,
          backgroundColor: 'black',
        }}
        markingType="period"
        initialDate={`${currentYear + 100}-${currentMonth}-${currentDay}`}
        theme={{
          // backgroundColor: "#ffffff",
          calendarBackground: 'black',
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: 'gray',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#00adf5',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          dotColor: '#00adf5',
          selectedDotColor: '#ffffff',
          arrowColor: 'white',
          monthTextColor: '#00adf5',
          indicatorColor: 'black',
          textDayFontFamily: 'roboto',
          textMonthFontFamily: 'roboto',
          textDayHeaderFontFamily: 'monospace',
          textDayFontWeight: '300',
          // textMonthFontWeight: "bold",
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
        onDayPress={(day) => {
          setSelected(day.dateString);
          console.log(day);
          console.log(day.dateString);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: 'orange',
            customStyles: {
              container: {
                backgroundColor: 'white', // Change the background color of the selected day
                borderRadious: 2, // Add border radius to make it a square
                borderWidth: 1, // Add a border
                borderColor: 'orange', // Border color for the selected day
              },
              text: {
                color: '#ffffff', // Text color for the selected day
              },
            },
          },
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Calender;
