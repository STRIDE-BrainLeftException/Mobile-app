import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";

const SeatBookingBtn = ({}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        borderColor: "rgba(151, 169, 246, 0.5)",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderWidth: 1.12,
        borderRadius: 34,
        width: 198.2,
        height: 45.53,
        alignItems: "center",
        alignSelf: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("PersonSelect");
        }}
      >
        <Text
          style={{
            color: "rgba(255, 255, 255, 1)",
            fontSize: 15.32,
            lineHeight: 19.82,
            paddingTop: 10,
          }}
        >
          {" "}
          Continue{" "}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const BookingSeats = ({ deckSeats }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (rowIndex, seatIndex) => {
    const seatStatus = deckSeats[rowIndex][seatIndex];
    if (seatStatus === "A") {
      const updatedSelectedSeats = [...selectedSeats];
      const seatKey = `${rowIndex}-${seatIndex}`;
      if (updatedSelectedSeats.includes(seatKey)) {
        updatedSelectedSeats.splice(updatedSelectedSeats.indexOf(seatKey), 1);
      } else {
        updatedSelectedSeats.push(seatKey);
      }
      setSelectedSeats(updatedSelectedSeats);
    }
  };

  return (
    <View>
      <View style={styles.seatsContainer}>
        {deckSeats.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.seatRow}>
            {row.map((seat, seatIndex) => (
              <TouchableOpacity
                key={seatIndex}
                onPressIn={() => toggleSeat(rowIndex, seatIndex)}
                disabled={seat === "N"} // Disable press for "N" seats
                style={[
                  styles.seat,
                  seat === "A" && styles.availableSeat,
                  seat === "N" && styles.unavailableSeat,
                  seat === "*" && styles.emptySeat,
                  selectedSeats.includes(`${rowIndex}-${seatIndex}`) &&
                    styles.selectedSeat,
                ]}
              />
            ))}
          </View>
        ))}
      </View>
      <SeatBookingBtn />
    </View>
  );
};

const styles = StyleSheet.create({
  seatsContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  seatRow: {
    flexDirection: "row",
    justifyContent: "center",
  },
  seat: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    borderWidth: 0,
    margin: 2,
  },
  availableSeat: {
    backgroundColor: "rgba(217, 217, 217, 1)",
  },
  unavailableSeat: {
    backgroundColor: "rgba(57, 57, 57, 1)",
  },
  selectedSeat: {
    backgroundColor: "rgba(29, 187, 255, 1)",
  },
  emptySeat: {
    backgroundColor: "transparent",
    borderWidth: 0,
  },
});

export default BookingSeats;
