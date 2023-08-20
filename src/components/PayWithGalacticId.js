import React, { useEffect } from "react";
import { Modal, Text, View } from "native-base";
import { TouchableOpacity, StyleSheet } from "react-native";
import COLORS from "../utils/colors";
import { BlurView } from "expo-blur";
import { useState } from "react";
import loginGif from "../assets/animations/login.gif";
import { Image } from "react-native";
import { WIDTH } from "../utils/constants";
import { AnimatePresence, View as MViev, Text as MText } from "moti";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  buttonContainer: {
    position: "relative",
    top: 20,
    width: "50%",
    alignSelf: "center",
    backgroundColor: COLORS.buttonBGColor,
    opacity: 0.5,
    borderColor: COLORS.buttonBorderColor,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },
  buttonText: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    textAlign: "center",
  },
  listTextBox: {
    alignItems: "center",
    padding: 12,
  },
  outerCard: {
    borderRadius: 12,
    overflow: "hidden",
    alignItems: "center",
    // width: "100%",
  },
  card: {
    backgroundColor: "transparent",
    alignItems: "center",
    zIndex: 2,
    paddingTop: 20,
  },
  cardHead: { color: "#fff", fontSize: 25, lineHeight: 50 },
  cardText: {
    color: "#EBEBF5",
    textAlign: "center",
    paddingBottom: 30,
  },
});

export const PayWithGalacticId = () => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("INITIAL");

  const navigation = useNavigation();

  const MODAL_WIDTH = 600;

  useEffect(() => {
    if (open) {
      setStatus("INITIAL");
      setTimeout(() => {
        setStatus("PENDING");
        setTimeout(() => {
          setStatus("COMPLETED");
          setTimeout(() => {
            setOpen(false);
            navigation.navigate("Confirmation");
          }, 2000);
        }, 3000);
      }, 3000);
    }
  }, [open]);

  return (
    <>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          setOpen(true);
        }}
      >
        <Text style={styles.buttonText}>Pay with Galactic ID</Text>
      </TouchableOpacity>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <Modal.Content>
          {/* <Modal.Body> */}
          <View style={styles.outerCard}>
            <BlurView intensity={70}>
              {/* <View style={styles.card}> */}

              <View
                alignItems={"center"}
                style={{ width: MODAL_WIDTH, ...styles.card }}
              >
                <View style={{ padding: 6 }}>
                  {true && (
                    <Image
                      source={loginGif}
                      style={{ height: WIDTH / 3, width: WIDTH / 3 }}
                    />
                  )}
                </View>
                <Text style={styles.cardHead}>Galactic ID</Text>

                <AnimatePresence exitBeforeEnter>
                  {status == "INITIAL" && (
                    <MText
                      key={"initial"}
                      from={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1000 }}
                      style={styles.cardText}
                    >
                      Acquiring Biometric Information
                    </MText>
                  )}
                  {status == "PENDING" && (
                    <MText
                      key="pending"
                      from={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1000 }}
                      style={styles.cardText}
                    >
                      Biometric Information acquired
                    </MText>
                  )}
                  {status == "COMPLETED" && (
                    <MText
                      key="completed"
                      from={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1000 }}
                      style={styles.cardText}
                    >
                      Payment complete
                    </MText>
                  )}
                </AnimatePresence>
              </View>
            </BlurView>
          </View>
          {/* </Modal.Body> */}
        </Modal.Content>
      </Modal>
    </>
  );
};
