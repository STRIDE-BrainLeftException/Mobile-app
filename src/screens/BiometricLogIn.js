//Main screen for log in functions. LoggedIn page will be rendered here
//Screen with fingerprint scan (as substitute for biometrics) check for login
//Animation of login
//After scanning move into LoggedIn screen

import React, { useEffect, useState } from "react";
import { BlurView } from "expo-blur";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
// import MapComponent from '../components/MapComponent';
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { WIDTH } from "../constants/styles";
// const PlaceholderImage = require('./../../assets/splash.png');

import Logo from "../components/basic/Logo";
import BlurViewCard from "../components/basic/BlurViewCard";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
// import loginAnimation from "../assets/animations/lottieLoginAnimation.json";
// import loginAnimation from "../assets/animations/loginAnimated.lottie";
import loginGif from "../assets/animations/login.gif";
import * as LocalAuthentication from "expo-local-authentication";
import { getUniqueId } from "../utils/data";
import login from "../utils/auth";

const bg = require("../assets/images/Booking_BG.png");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  textBoxHeading: {
    backgroundColor: "transparent",

    top: 100,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 3,
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 25,
    color: "#fff",
  },
  logo: { backgroundColor: "transparent", alignItems: "center", top: 450 },
  image: { width: "100%", height: "100%" },
  cardHead: { color: "#fff", fontSize: 25 },
  cardText: {
    color: "#EBEBF5",
    textAlign: "center",
  },

  outerCard: {
    borderRadius: 12,
    overflow: "hidden",
    alignItems: "center",
    top: 130,
    zIndex: 2,
  },
  card: {
    backgroundColor: "transparent",
    alignItems: "center",
    zIndex: 2,
    // paddingTop: 45,
  },
});

const BiometricLogIn = () => {
  const navigation = useNavigation();
  const [scanned, setScanned] = useState(false);
  const [id, setId] = useState("");

  const onConfirm = () => {
    navigation.navigate("LoggedIn");
  };

  useEffect(() => {
    getUniqueId().then((value) => {
      console.log({ uniqueId: value });
      setId("C3B72561-5753-4C2E-8E69-4FCDF03E4B16");
      LocalAuthentication.authenticateAsync().then(async (result) => {
        if (result.success == true) {
          setScanned(true);
          console.log({ result, id });
          login(id).then(() => {
            onConfirm();
          }, 3000);
        }
      });
    });
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.image} resizeMode="cover">
        <View style={styles.textBoxHeading}>
          <Text style={styles.text}>Log In</Text>
          <Text style={styles.text}>Lő Nìƴțū</Text>
        </View>

        <View style={{ alignItems: "center", top: 100 }}>
          <View style={styles.outerCard}>
            <BlurView intensity={70} style={{ padding: 10 }}>
              <View style={styles.card}>
                <View alignItems={"center"}>
                  <Text style={styles.cardHead}>Galactic ID</Text>
                  <Text style={styles.cardText}>
                    Acquiring Biometric Information
                  </Text>
                </View>
                <View style={{ padding: 6 }}>
                  {scanned && (
                    <Image
                      source={loginGif}
                      style={{ height: WIDTH / 3, width: WIDTH / 3 }}
                    />
                  )}
                  {/* <LottieView
                  style={{
                    width: 200,
                    height: 200,
                    backgroundColor: "#eee",
                  }}
                  source={loginAnimation}
                  autoPlay
                  loop
                /> */}
                </View>
              </View>
            </BlurView>
          </View>
        </View>

        <View style={styles.logo}>
          <Logo size={80} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default BiometricLogIn;
