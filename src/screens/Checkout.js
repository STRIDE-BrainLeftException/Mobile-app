import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";
import ShipCheckouts from "../components/ShipCheckouts";
import PaymentDetailsCard from "../components/PaymentDetailsCard";
import CheckoutDetailsCard from "../components/CheckoutDetailsCard";
const Checkout = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/Booking_BG.png")}
        style={styles.image}>
        {/* use to add header section*/}
        <View
          style={{
            height: "8%",
          }}></View>
        <CheckoutDetailsCard />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
          }}>
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 20,
            }}>
            Travel Mode
          </Text>
          <View
            style={{
              paddingHorizontal: 5,
              paddingVertical: 2,
              borderBlockColor: "black",
              borderRadius: 20,
              borderWidth: 1,
              borderColor: "#3DC5FF",
            }}>
            <Text
              style={{
                color: "#3DC5FF",
              }}>
              HyperStride
            </Text>
          </View>
        </View>
        <ShipCheckouts
          name="NotAShip"
          seatID="12434"
          description={`\u2022 Upper deck \n\u2022 Keypium package \n \u2022 Food grade : BBB`}
          price="100Ñ"
        />
        <ShipCheckouts
          name="Ship 123"
          seatID="123"
          description={`\u2022 Upper deck \n\u2022 Kaypium package \n \u2022 Food grade : AAA`}
          price="399Ñ"
        />
        <PaymentDetailsCard />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  image: { width: "100%", height: "100%" },
});

export default Checkout;
