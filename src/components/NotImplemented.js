import { View, Text, StyleSheet } from "react-native";

const NotImplemented = () => {
  return (
    <View style={styles.continer}>
      <Text style={styles.whiteText}>Not Implemented</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  continer: {
    width: "100%",
    height: "100%",
    top: "30%",
  },
  whiteText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default NotImplemented;
