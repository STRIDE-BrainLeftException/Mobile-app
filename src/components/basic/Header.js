import { ChevronLeftIcon, HStack, Text } from "native-base";
import { APP_HEADER_HEIGHT, WIDTH } from "../../utils/constants";
import { UiIconButton } from "./UiIconButton";
import BlurViewCard from "./BlurViewCard";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, TouchableOpacity } from "react-native";
import EfficientBlurViewCard from "./EfficientBlurViewCard";

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
          <TouchableOpacity onPress={onPress}>
            <EfficientBlurViewCard
              containerStyle={{ borderRadius: 50, height: 50, width: 50 ,alignItems:'center', justifyContent: 'center' }}
            >
              <ChevronLeftIcon size={'xl'}/>
            </EfficientBlurViewCard>
          </TouchableOpacity>
        </HStack>

        <HStack flex={0.6} justifyContent={"center"}>
          <EfficientBlurViewCard containerStyle={{ flex: 1, borderRadius: 10 }}>
            <Text numberOfLines={1} fontSize={"xl"} textAlign={"center"}>
              {title}
            </Text>
          </EfficientBlurViewCard>
        </HStack>

        <HStack flex={0.2}></HStack>
      </HStack>
    </SafeAreaView>
  );
};

export const NavigationHeader = ({ props, mapping }) => {
  const name = props.route.name;
  return <Header title={mapping[name]} />;
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
