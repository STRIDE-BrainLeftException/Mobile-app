import { View, Text } from "native-base";
import { UiButton } from "../components/basic/UiButton";
import { useNavigation } from "@react-navigation/native";

const CabinSelectScreen = () => {
  const navigation = useNavigation();
  return (
    <View flex={1} alignItems={'center'} justifyContent={'center'}>
      <UiButton
        onPress={() => {
          navigation.navigate("PersonSelect");
        }}
      >
        <Text>Continue</Text>
      </UiButton>
    </View>
  );
};

export default CabinSelectScreen;
