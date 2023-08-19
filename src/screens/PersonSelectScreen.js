import { View, Text } from "native-base";
import { UiButton } from "../components/basic/UiButton";
import { useNavigation } from "@react-navigation/native";

const PersonSelectScreen = () => {
  const navigation = useNavigation();
  return (
    <View flex={1} alignItems={"center"} justifyContent={"center"}>
      <UiButton
        onPress={() => {
          navigation.navigate("PackageSelect");
        }}
      >
        <Text>Continue</Text>
      </UiButton>
    </View>
  );
};

export default PersonSelectScreen;
