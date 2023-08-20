import React from "react";
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
import { HStack, VStack } from "native-base";
// const PlaceholderImage = require('./../../assets/splash.png');
import PlaceholderImage from "../assets/images/Booking_BG.png";
import { HEIGHT, ONBOARDING_BOTTOM_COLOR, WIDTH } from "../utils/constants";
import EfficientBlurViewCard from "../components/basic/EfficientBlurViewCard";
const Circle = () => {
  return <View style={styles.circle} />;
};

const ActivityPage = () => {
  return (
    <>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "transparent",
            paddingHorizontal: 30,
            paddingVertical: 30,
            top: 50,
            justifyContent: "flex-end",
            alignContent: "center",
            zIndex: 3,
          }}
        >
          <Text
            style={{
              backgroundColor: "transparent",
              fontSize: 35,
              color: "#fff",
              zIndex: 3,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            My Activity
          </Text>
          <View height={8} />
          <Text
            style={{
              backgroundColor: "transparent",
              fontSize: 20,
              color: "#fff",
              zIndex: 3,
              textAlign: "center",
            }}
          >
            Travel Log
          </Text>
          <View height={10} />
          <EfficientBlurViewCard
            containerStyle={{ width: WIDTH * 0.95, height: HEIGHT * 0.75 }}
          >
            <TouchableOpacity>
              <EfficientBlurViewCard>
                <HStack style={styles.longCard} space={3}>
                  <Image
                    source={require("./../assets/images/My_Activity/Travel_Log/icon-1.png")}
                    style={styles.serviceImage}
                  ></Image>
                  <VStack width="50%">
                    <Text style={styles.servicesText}>Volarizen 30A</Text>

                    <Text style={styles.description}>Albaexperia</Text>
                  </VStack>
                  <VStack>
                    <HStack
                      style={{ justifyContent: "space-evenly" }}
                      space={2}
                    >
                      <Circle />
                      <Text style={styles.description}>In Progress</Text>
                    </HStack>
                    <View height={5} />
                    <View
                      style={{
                        borderColor: "rgba(61, 197, 255, 1)",
                        paddingHorizontal: 10,
                        alignSelf: "center",
                        borderRadius: 10,
                        borderWidth: 0.9,
                      }}
                    >
                      <Text
                        style={{ color: "rgba(61, 197, 255, 1)", fontSize: 8 }}
                      >
                        HyperStride
                      </Text>
                    </View>
                  </VStack>
                </HStack>
              </EfficientBlurViewCard>
            </TouchableOpacity>
          </EfficientBlurViewCard>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    backgroundColor: "green",
  },
  container: {
    flex: 1,
  },
  longCard: { alignItems: "center", justifyContent: "space-evenly" },
  shortCard: { alignItems: "center" },
  shortCardText: { fontSize: 10, fontWeight: "500", textAlign: "center" },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  cardH: {
    width: "100%",

    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 15,
  },
  servicesText: {
    fontSize: 16,
    paddingBottom: 5,
    fontWeight: "500",
    color: "#fff",
  },
  description: { fontSize: 10, lineHeight: 10, color: "#fff" },
  serviceImage: { width: 70, height: 70, borderRadius: 25 },
  page: {
    paddingHorizontal: 20,
    alignItems: "center",
  },
  title1: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "500",
  },
  title2: {
    fontSize: 20,
    lineHeight: 25,
    fontWeight: "500",
  },
  button: {
    borderRadius: 25,
    width: 50,
    height: 50,
  },
});
export default ActivityPage;
