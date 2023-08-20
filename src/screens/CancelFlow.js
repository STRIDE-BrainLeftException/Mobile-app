import React, { useEffect, useState } from "react";

import { Button, Checkbox, CloseIcon } from "native-base";
import { FormControl } from "native-base";
import { Input } from "native-base";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
// import MapComponent from '../components/MapComponent';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

// const PlaceholderImage = require('./../../assets/splash.png');
import PlaceholderImage from "../assets/images/bookingProcessBackground.png";
import { ONBOARDING_BOTTOM_COLOR, WIDTH } from "../utils/constants";
import Logo from "../components/basic/Logo";
import { BlurView } from "expo-blur";
import { ChevronRightIcon, HStack, Modal } from "native-base";

import bg from "./../assets/images/login/loginScreenBG.png";
import tempDP from "./../assets/images/login/loginScreenUser.png";
import { useNavigation } from "@react-navigation/native";
import { HEIGHT } from "../constants/styles";
import { UiButton } from "../components/basic/UiButton";
import { UiIconButton } from "../components/basic/UiIconButton";

const styles = StyleSheet.create({
  TextBox: {
    alignItems: "center",
    padding: 10,
  },
  Items: {
    color: "#fff",
    fontSize: 16,

    paddingBottom: 30,
  },
});
const CancelFlow = ({ jumpTo }) => {
  const [open, setOpen] = useState(false);
  const onPressCancel = () => {
    setOpen(false);
    jumpTo("home");
  };
  const onPressResume = () => {
    setOpen(false);
  };
  return (
    <>
      <UiIconButton icon={<CloseIcon />} onPress={() => setOpen(true)} />
      <Modal
        isOpen={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Modal.Content>
          {/* <Modal.Body> */}
          <BlurView style={styles.TextBox}>
            <View height={10} />
            <Text style={[styles.Items, { fontWeight: "bold" }]}>
              Are you sure you want to cancel the booking?
            </Text>
            <Text style={styles.Items}>Any changes will be discarded</Text>
            <HStack
              space={12}
              alignItems={"center"}
              justifyContent={"center"}
              paddingBottom={4}
            >
              <Button
                rounded
                borderRadius={8}
                width={"30%"}
                variant={"subtle"}
                onPress={onPressResume}
              >
                No
              </Button>
              <Button
                rounded
                borderRadius={8}
                width={"30%"}
                variant={"subtle"}
                textAlign={"center"}
                colorScheme="secondary"
                onPress={onPressCancel}
              >
                Yes
              </Button>
            </HStack>
          </BlurView>
          {/* </Modal.Body> */}
        </Modal.Content>
      </Modal>
    </>
  );
};

export default CancelFlow;
