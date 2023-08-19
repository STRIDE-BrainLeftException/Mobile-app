import React from "react";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
// import MapComponent from '../components/MapComponent';
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

// const PlaceholderImage = require('./../../assets/splash.png');
import PlaceholderImage from "../assets/images/Booking_BG.png";
import { ONBOARDING_BOTTOM_COLOR } from "../utils/constants";
import Logo from "../components/basic/Logo";
import { UiIconButton } from "../components/basic/UiIconButton";
import { ChevronRightIcon } from "native-base";
const hostess = require("./../assets/images/onboarding/OnboardingScreen1.png");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  // background: {
  //   position: "absolute",
  //   left: 0,
  //   right: 0,
  //   top: 0,
  //   bottom: 0,
  //   zIndex: 1,
  // },
  textHead: {
    backgroundColor: "transparent",
    fontSize: 25,
    color: "#fff",
    zIndex: 3,
    fontWeight: "bold",
    textAlign: "center",
  },

  welcome: {
    backgroundColor: "transparent",
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
    zIndex: 3,
  },

  text: {
    backgroundColor: "transparent",
    fontSize: 25,
    color: "#fff",
    zIndex: 3,
  },
  textBox: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 90,
    justifyContent: "flex-end",
    alignContent: "center",
    zIndex: 3,
  },
  dots: {},
  image: { width: "100%", height: "100%" },
});

const WelcomePage = ({ navigation, setPage }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={hostess} style={styles.image} resizeMode="cover">
        <View style={styles.welcome}>
          <Text style={styles.text}>Welcome </Text>
          <Text style={styles.text}>UnhiījŁ Nì</Text>
        </View>

        <View style={styles.textBox}>
          <View style={{ alignItems: "center" }}>
            <Logo size={200} isBlue={true} />
          </View>

          <Text style={styles.textHead}>
            #1 Inter-Galactic Space Travel Agency
          </Text>
        </View>
        <UiIconButton
          onPress={() => {
            navigation.navigate(String(1));
            setPage(1);
          }}
          icon={<ChevronRightIcon />}
          style={{
            marginBottom: 30,
          }}
        />
      </ImageBackground>
    </View>
  );
};

export default WelcomePage;
