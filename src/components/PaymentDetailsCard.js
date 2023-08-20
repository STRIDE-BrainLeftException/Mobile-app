import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import COLORS from "../utils/colors";
import { PayWithGalacticId } from "./PayWithGalacticId";
const PaymentDetailsCard = ({ disablePay, ...data }) => {
  return (
    <View
      style={{
        paddingHorizontal: 40,
      }}
    >
      <View style={styles.paymentSections}>
        <Text style={styles.paymentStyle}>Payment</Text>
        <Text style={styles.refStyle}>Ref : #45ßKA</Text>
      </View>
      <View style={styles.paymentSections}>
        <Text style={styles.grayText}>Order</Text>
        <Text style={styles.grayText}>798Ñ</Text>
      </View>
      <View style={styles.paymentSections}>
        <Text style={styles.grayText}>Universal Taxes</Text>
        <Text style={styles.grayText}>0.3Ñ</Text>
      </View>
      <View style={styles.paymentSections}>
        <Text style={styles.summeryStyle}>Summary</Text>
        <Text style={styles.summeryStyle}>798.3Ñ</Text>
      </View>
      {/* <TouchableOpacity style={styles.buttonContainer} onPress>
        <Text style={styles.buttonText}>Pay with Galactic ID</Text>
      </TouchableOpacity> */}
      {!disablePay && <PayWithGalacticId />}
    </View>
  );
};

const styles = {
  paymentSections: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  grayText: {
    color: "#EDEDED",
  },
  paymentStyle: {
    color: "#FFFFFF",
    lineHeight: 30,
    fontSize: 20,
  },
  refStyle: {
    fontSize: 10.76,
    color: "#A9A9A9",
  },
  summeryStyle: {
    color: "#3DC5FF",
    fontSize: 20,
  },
  buttonContainer: {
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
};

export default PaymentDetailsCard;
