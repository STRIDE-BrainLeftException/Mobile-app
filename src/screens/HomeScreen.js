import { StyleSheet } from "react-native";
import { View, Image, Text, HStack, VStack } from "native-base";
import BackGroundImage from "../assets/images/Booking_BG.png";
import { StatusBar } from "expo-status-bar";
import CarouselCards from "../components/Carousel/Carousel";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../components/basic/Logo";
import { WIDTH } from "../utils/constants";
import { AnimatePresence } from "moti";
import AnimatedView from "../components/basic/AnimatedView";
import { Header } from "../components/basic/Header";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* <Image
        alt={" "}
        style={[StyleSheet.absoluteFill, styles.image]}
        source={BackGroundImage}
      /> */}
      <SafeAreaView>
        <AnimatePresence>
          <Header />
          <VStack space={5}>
            <HStack>
              <Logo size={WIDTH / 2.5} isBlue={true} />
            </HStack>
            <AnimatedView>
              <View style={styles.page}>
                <Text style={styles.title}>Let's explore together</Text>
              </View>
            </AnimatedView>
            <CarouselCards />
            <AnimatedView>
              <View style={styles.page}>
                <Text style={styles.title}>travel beyond the known worlds</Text>
              </View>
            </AnimatedView>
          </VStack>
        </AnimatePresence>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  page: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    lineHeight: 40,
  },
});

export default HomeScreen;
