import { StyleSheet } from "react-native";
import { View, Image, Text } from "native-base";
import BackGroundImage from "../assets/images/bookingProcessBackground.png";
import { StatusBar } from "expo-status-bar";
import CarouselCards from "../components/Carousel/Carousel";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        style={[StyleSheet.absoluteFill, styles.image]}
        source={BackGroundImage}
      />
      <SafeAreaView >
        <View style={styles.page}>
          <Text style={styles.title}>Let's explore together</Text>
        </View>
        <CarouselCards />
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
    padding: 30,
  },
  title: {
    fontSize: 30,
    lineHeight: 40
  },
});

export default HomeScreen;
