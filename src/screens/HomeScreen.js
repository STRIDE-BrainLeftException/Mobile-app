import { StyleSheet } from "react-native";
import { Button, ScrollView } from "native-base";

import {
  View,
  Image,
  Text,
  HStack,
  VStack,
  SearchIcon,
  IconButton,
} from "native-base";
import BackGroundImage from "../assets/images/Booking_BG.png";
import { StatusBar } from "expo-status-bar";
import CarouselCards from "../components/Carousel/Carousel";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../components/basic/Logo";
import { WIDTH } from "../utils/constants";
import { AnimatePresence } from "moti";
import AnimatedView from "../components/basic/AnimatedView";
import { Header } from "../components/basic/Header";
import EfficientBlurViewCard from "../components/basic/EfficientBlurViewCard";
import { TouchableOpacity } from "react-native";

const HomeScreen = ({ jumpTo }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="light" />
        <SafeAreaView>
          <AnimatePresence>
            <VStack space={5}>
              <HStack
                style={{ alignItems: "center", justifyContent: "center" }}
              >
                <Logo size={WIDTH / 2.5} isBlue={true} />
              </HStack>
              <AnimatedView>
                <View style={styles.page}>
                  <Text style={styles.title1}>Let's explore together!</Text>
                </View>
              </AnimatedView>
              <CarouselCards />
              <AnimatedView>
                <View style={{ alignItems: "center", padding: 10 }}>
                  <VStack>
                    <HStack
                      style={{
                        backgroundColor: "transparent",
                        alignItems: "center",
                        padding: 10,
                        justifyContent: "space-evenly",
                      }}
                    >
                      <View style={{ width: WIDTH * 0.6 }}>
                        <Text style={styles.title2}>
                          Travel beyond the known worlds
                        </Text>
                      </View>

                      <Button rounded style={styles.button} variant={"outline"}>
                        <SearchIcon size={8} />
                      </Button>
                    </HStack>
                    <View height={5} />
                    <EfficientBlurViewCard>
                      <HStack style={styles.longCard} space={6}>
                        <Image
                          source={require("./../assets/images/HomeScreen/Cards/img.png")}
                          style={styles.serviceImage}
                        ></Image>
                        <VStack width="50%">
                          <Text style={styles.servicesText}>Solo-Ventures</Text>

                          <Text style={styles.description}>
                            Explore cosmic frontiers with your own vessel
                            without any hassle
                          </Text>
                        </VStack>
                      </HStack>
                    </EfficientBlurViewCard>
                    <View height={3} />
                    <View alignItems={"center"}>
                      <HStack style={styles.cardH}>
                        <EfficientBlurViewCard>
                          <Image
                            source={require("./../assets/images/HomeScreen/Cards/img-1.png")}
                            style={styles.serviceImage}
                          ></Image>
                          <Text style={styles.shortCardText}>
                            Health Services
                          </Text>
                        </EfficientBlurViewCard>

                        <EfficientBlurViewCard>
                          <Image
                            source={require("./../assets/images/HomeScreen/Cards/img-2.png")}
                            style={styles.serviceImage}
                          ></Image>
                          <Text style={styles.shortCardText}>Work With Us</Text>
                        </EfficientBlurViewCard>
                      </HStack>

                      <HStack style={styles.cardH}>
                        <TouchableOpacity
                          style={{ backgroundColor: "transparent" }}
                          onPress={() => {
                            jumpTo("map");
                          }}
                        >
                          <EfficientBlurViewCard>
                            <Image
                              source={require("./../assets/images/HomeScreen/Cards/img-3.png")}
                              style={styles.serviceImage}
                            ></Image>
                            <Text style={styles.shortCardText}>
                              Book a Ride
                            </Text>
                          </EfficientBlurViewCard>
                        </TouchableOpacity>

                        <EfficientBlurViewCard>
                          <Image
                            source={require("./../assets/images/HomeScreen/Cards/img-4.png")}
                            style={styles.serviceImage}
                          ></Image>
                          <Text style={styles.shortCardText}>
                            Shipment Delivery
                          </Text>
                        </EfficientBlurViewCard>
                      </HStack>
                    </View>
                  </VStack>
                </View>
              </AnimatedView>
            </VStack>
          </AnimatePresence>
        </SafeAreaView>
      </View>
      <View height={"100px"} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
  servicesText: { fontSize: 16, paddingBottom: 5, fontWeight: "500" },
  description: { fontSize: 9, lineHeight: 10 },
  serviceImage: { width: 100, height: 100, borderRadius: 25 },
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

export default HomeScreen;
