import { ChevronLeftIcon, HStack, Text } from "native-base";
import { APP_HEADER_HEIGHT, WIDTH } from "../../utils/constants";
import { UiIconButton } from "./UiIconButton";
import BlurViewCard from "./BlurViewCard";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, TouchableOpacity } from "react-native";
import EfficientBlurViewCard from "./EfficientBlurViewCard";

export const Header = ({
  title = "Change title",
  onBackPress = null,
  rightIconButton,
}) => {
  const navigation = useNavigation();
  const onPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      navigation.goBack();
    }
  };

  return (
    // <SafeAreaView>
    <BlurViewCard
      containerStyle={{
        borderRadius: 10,
        borderWidth: 0,
        padding: 0,
        margin: 0,
        width: "100%",
      }}
      tint={"dark"}
      intensity={30}
    >
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
          <UiIconButton icon={<ChevronLeftIcon />} onPress={onPress} />
        </HStack>

        <HStack flex={0.6} justifyContent={"center"}>
          <Text
            numberOfLines={1}
            fontSize={35}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            {title}
          </Text>
        </HStack>

        <HStack flex={0.2}>{rightIconButton}</HStack>
      </HStack>
    </BlurViewCard>
    // </SafeAreaView>
  );
};

export const NavigationHeader = ({
  props,
  mapping,
  rightIconButton = null,
}) => {
  const name = props.route.name;
  return <Header title={mapping[name]} rightIconButton={rightIconButton} />;
};

// const CustomHeader = ({ route, ...props }) => {
//   console.log({ route });
//   const name = route.name;
//   const title =
//     name == "Galaxies"
//       ? "Select galaxy"
//       : name == "SolarSystems"
//       ? "Select solar system"
//       : name == "Planets"
//       ? "Select planet"
//       : "Error 404";
//   return <Header title={title} />;
// };
