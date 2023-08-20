import React from "react";
import { View, Text, ImageBackground } from "react-native"; // Make sure to import from 'react-native'
import PackageSelector from "../components/PackageSelector";

const SelectPackage = () => {
  return (
    // <View>
    //   <Text>Testing the pakage selector card</Text>
    // </View>
    <View
      source={require("../assets/images/Booking_BG.png")}
      style={{ flex: 1, resizeMode: "cover" }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {/* <Text
          style={{
            fontSize: 32,
            lineHeight: 35.2,
            fontWeight: 700,
            alignSelf: "center",
            color: "#fff",
            padding: 20,
            paddingBottom: 50,
          }}
        >
          Select Your Package
        </Text> */}
        <PackageSelector />
      </View>
    </View>
  );
};

export default SelectPackage;
