import React, { FC } from "react";
import { BlurView } from "expo-blur";
import { Text, View } from "native-base";
import { StyleSheet } from "react-native";

const BlurViewCard = ({ children, containerStyle, intensity }) => {
  return (
    <View style={[styles.view, containerStyle]}>
      <BlurView intensity={intensity} style={[styles.blurView]}>
        {children}
      </BlurView>
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
    backgroundColor: "transparent",
    borderColor: "rgba(255,255,255,0.5)",
    borderWidth: 1,
    width: "90%",
    alignSelf: "center",
    textAlign: 'center'
  },
});

export default BlurViewCard;
