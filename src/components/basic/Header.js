import { ChevronLeftIcon, HStack, Text } from "native-base";
import { APP_HEADER_HEIGHT, WIDTH } from "../../utils/constants";
import { UiIconButton } from "./UiIconButton";
import BlurViewCard from "./BlurViewCard";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";

export const Header = ({ title = "Change title", onBackPress = null }) => {
  const navigation = useNavigation();
  const onPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView>
      <HStack
        height={APP_HEADER_HEIGHT}
        width={WIDTH}
        backgroundColor={"red"}
        justifyContent={"space-between"}
        zIndex={100000}
        alignItems={"center"}
        // mt={30}
      >
        <HStack flex={0.2} justifyContent={"center"}>
          <BlurViewCard
            containerStyle={{ borderRadius: 50, height: 50, width: 50 }}
          >
            <UiIconButton
              onPress={onPress}
              icon={<ChevronLeftIcon />}
              size={"lg"}
              m={0}
              p={1}
            />
          </BlurViewCard>
        </HStack>

        <HStack flex={0.6} justifyContent={"center"}>
          <BlurViewCard containerStyle={{ flex: 0.6, borderRadius: 10 }}>
            <Text textAlign={"center"}>{title}</Text>
          </BlurViewCard>
        </HStack>

        <HStack flex={0.2}></HStack>
      </HStack>
    </SafeAreaView>
  );
};
