import { VStack } from "native-base";
import { Button, View, Text } from "react-native";

const NumericInput = (value, onChange, min, max) => {
  const up = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };
  const down = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  return (
    <View>
      <VStack>
        <Button>Plus</Button>
        <Text>{value}</Text>,<Button>Minus</Button>
      </VStack>
    </View>
  );
};

export default NumericInput;
