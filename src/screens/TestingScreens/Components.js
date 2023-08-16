import { VStack, Text } from "native-base";
import { ImageBackground } from "react-native";
import { BackButton, ForwardButton } from "../../components/basic/IconButtons";
export const ComponentsScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/Booking_BG.png")}
      style={{ flex: 1 }}
    >
      <VStack backgroundColor={"transparent"} flex={1} width={"100%"}>
        <Text>Hello</Text>
        <BackButton />
        <ForwardButton />
      </VStack>
    </ImageBackground>
  );
};
