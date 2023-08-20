//Displays logged in screen with user info after logged in
//Allow props to be used to enter image and name

import React, { useEffect, useState } from "react";
import { Button, Checkbox } from "native-base";
import { FormControl } from "native-base";
import { Input } from "native-base";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
// import MapComponent from '../components/MapComponent';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

// const PlaceholderImage = require('./../../assets/splash.png');
import PlaceholderImage from "../assets/images/bookingProcessBackground.png";
import { ONBOARDING_BOTTOM_COLOR, WIDTH } from "../utils/constants";
import Logo from "../components/basic/Logo";
import { BlurView } from "expo-blur";
import { ChevronRightIcon, HStack, Modal } from "native-base";

import bg from "./../assets/images/login/loginScreenBG.png";
import tempDP from "./../assets/images/login/loginScreenUser.png";
import { useNavigation } from "@react-navigation/native";
import { AnimatePresence, View as MotiView } from "moti";
import { UiButton } from "../components/basic/UiButton";

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  listTextBox: {
    alignItems: "center",
    padding: 12,
    tintColor: "dark",
  },
  listItems: {
    padding: 8,
    color: "#fff",
    fontSize: 14,
  },
  image: { width: "100%", height: "100%" },

  profilepic: {
    top: 180,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 3,
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
    paddingTop: 45,
  },

  tickOath: {
    backgroundColor: "transparent",
    zIndex: 3,
    top: 210,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

const LoggedIn = () => {
  const [lang, setLang] = useState("English");
  const [currency, setCurrency] = useState("Dollars");
  const [modalOpenLang, setOpenLang] = useState(false);
  const [modalOpenCurr, setOpenCurr] = useState(false);
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const tempName = "Charles Oliveira";
  const galaxy = "MilkyWay";
  const planet = "Earth";
  //Variable to change image dimensions
  const w = 140;
  const languages = [{ data: "English" }, { data: "Rōǩḗ" }, { data: "Kpūswi" }];
  const currencies = [{ data: "Dollars" }, { data: "Ñovar" }];

  const onPressLang = () => {
    setOpenLang(true);
  };

  const onPressCurr = () => {
    setOpenCurr(true);
  };

  const pressContinue = () => {
    //To be implemented
    if (check) {
      setLoading(true);
      setTimeout(() => {
        navigation.navigate("Home");
      }, 500);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  return (
    <AnimatePresence>
      {!loading && (
        <MotiView
          from={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1, opacity: 0 }}
          style={styles.container}
          transition={{
            type: "timing",
            duration: 500,
          }}
        >
          <Modal isOpen={modalOpenLang} onClose={() => setOpenLang(false)}>
            <Modal.Content
              maxWidth="400px"
              style={{ backgroundColor: "transparent" }}
            >
              {/* <Modal.Body> */}
              <BlurView style={styles.listTextBox}>
                {languages.map((language) => (
                  <Text
                    key={language.data}
                    style={styles.listItems}
                    onPress={() => {
                      setOpenLang(false);
                      setLang(language.data);
                    }}
                  >
                    {language.data}
                  </Text>
                ))}
              </BlurView>
              {/* </Modal.Body> */}
            </Modal.Content>
          </Modal>
          <Modal isOpen={modalOpenCurr} onClose={() => setOpenCurr(false)}>
            <Modal.Content
              maxWidth="400px"
              style={{ backgroundColor: "transparent" }}
            >
              {/* <Modal.Body> */}
              <BlurView style={styles.listTextBox}>
                {currencies.map((curr) => (
                  <Text
                    key={curr.data}
                    style={styles.listItems}
                    onPress={() => {
                      setOpenCurr(false);
                      setCurrency(curr.data);
                    }}
                  >
                    {curr.data}
                  </Text>
                ))}
              </BlurView>
              {/* </Modal.Body> */}
            </Modal.Content>
          </Modal>
          <View source={bg} style={styles.image} resizeMode="cover">
            <View style={styles.textBoxHeading}>
              <Text style={styles.text}>Log In</Text>
              <Text style={styles.text}>Lő Nìƴțū</Text>
            </View>
            <View style={styles.profilepic}>
              <Image
                source={tempDP}
                style={{ width: w, height: w, borderRadius: w / 2 }}
              />
            </View>
            <View style={{ alignItems: "center" }}>
              <View style={styles.outerCard}>
                <BlurView
                  intensity={70}
                  style={{ padding: 4, width: WIDTH * 0.9 }}
                >
                  <View style={styles.card}>
                    <Text style={{ fontSize: 20, color: "#fff" }}>
                      {tempName}
                    </Text>
                    <Text
                      style={{ fontSize: 12, color: "#fff", paddingBottom: 8 }}
                    >
                      {planet} | {galaxy}
                    </Text>
                    <View style={{ padding: 6 }}></View>
                    <View
                      style={{
                        borderRadius: 12,
                        overflow: "hidden",
                        alignItems: "center",
                      }}
                    >
                      <BlurView
                        intensity={120}
                        style={{ padding: 4, width: WIDTH * 0.7 }}
                      >
                        <HStack style={{ padding: 8 }} space={100}>
                          <Text style={{ fontSize: 14, color: "#fff" }}>
                            Language
                          </Text>
                          <HStack space={4}>
                            <Text
                              onPress={onPressLang}
                              style={{ fontSize: 14, color: "#fff" }}
                            >
                              {lang}
                            </Text>
                            <ChevronRightIcon size={3} style={{ top: 4 }} />
                          </HStack>
                        </HStack>
                      </BlurView>
                    </View>
                    <View style={{ padding: 6 }}></View>
                    <View
                      style={{
                        borderRadius: 12,
                        overflow: "hidden",
                        alignItems: "center",
                      }}
                    >
                      <BlurView
                        intensity={120}
                        style={{ padding: 4, width: WIDTH * 0.7 }}
                      >
                        <HStack style={{ padding: 8 }} space={108}>
                          <Text style={{ fontSize: 14, color: "#fff" }}>
                            Currency
                          </Text>
                          <HStack space={4}>
                            <Text
                              onPress={onPressCurr}
                              style={{ fontSize: 14, color: "#fff" }}
                            >
                              {currency}
                            </Text>
                            <ChevronRightIcon size={3} style={{ top: 4 }} />
                          </HStack>
                        </HStack>
                      </BlurView>
                    </View>
                  </View>
                  <View style={{ padding: 6 }}></View>
                </BlurView>
              </View>
            </View>
            <View style={styles.tickOath}>
              <HStack
                space={3}
                style={{ padding: 8, width: "60%", paddingBottom: 18 }}
              >
                <Checkbox
                  colorScheme={"green"}
                  onChange={() => setCheck(!check)}
                  top={1}
                >
                  <Text style={{ fontSize: 12, color: "#fff" }}>
                    I agree to be bound by the Intergalactic Oath and Stride
                    Oath
                  </Text>
                </Checkbox>
              </HStack>

              <UiButton label={"Continue"} onTap={pressContinue} />
            </View>
          </View>
        </MotiView>
      )}
    </AnimatePresence>
  );
};

export default LoggedIn;
