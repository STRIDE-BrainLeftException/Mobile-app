import { AddIcon, Button, IconButton, MinusIcon, VStack } from "native-base";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderColor: "#2596be",

    backgroundColor: "transparent",
    borderRadius: 13,
    width: 26,
  },
  button: {
    borderRadius: 15,
    width: 30,
    height: 30,
  },
  numberBox: {
    width: 26,
    height: 29,

    alignItems: "center",
    justifyContent: "center",
  },
  text: { color: "#fff" },
});

const NumericInput = ({ value, onChange, minValue = 0, maxValue = 10 }) => {
  const onUp = () => {
    if (value < maxValue) {
      onChange(value + 1);
    }
  };
  const onDown = () => {
    if (value > minValue) {
      onChange(value - 1);
    }
  };
  return (
    <VStack style={styles.container}>
      <Button rounded style={styles.button} onPress={onUp}>
        <AddIcon size={3} />
      </Button>
      <View style={styles.numberBox}>
        <Text style={styles.text}>{value}</Text>
      </View>

      <Button rounded style={styles.button} onPress={onDown}>
        <MinusIcon size={3} />
      </Button>
    </VStack>
  );
};

export default NumericInput;
