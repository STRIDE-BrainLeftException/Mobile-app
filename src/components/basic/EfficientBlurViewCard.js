import React, { FC } from "react";
import { Text, View } from "native-base";
import { StyleSheet } from "react-native";

const EfficientBlurViewCard = ({ children, containerStyle }) => {
  return (
    <View style={[styles.view, styles.blurView, containerStyle]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  blurView: {
    padding: 10,
  },
  view: {
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "rgba(255,255,255,0.3)",
    borderColor: "rgba(255,255,255,0.5)",
    borderWidth: 1,
    width: "90%",
    alignSelf: "center",
  },
});

export default EfficientBlurViewCard;
