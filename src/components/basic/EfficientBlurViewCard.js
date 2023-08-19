import React, { FC } from "react";
import { Text, View } from "native-base";
import { StyleSheet } from "react-native";
import { efficientBlurViewStyles } from "../../utils/constants";

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
    borderWidth: 1,
    // width: "90%",
    alignSelf: "center",
    ...efficientBlurViewStyles
  },
});

export default EfficientBlurViewCard;
