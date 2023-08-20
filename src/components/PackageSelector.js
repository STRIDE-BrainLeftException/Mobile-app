import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"; // Make sure to import from 'react-native'
import PackageBlurViewCard from "./basic/PackageBlurViewCard";
import { useNavigation, useRoute } from "@react-navigation/native";
import { HStack, Modal, VStack } from "native-base";
import { BlurView } from "expo-blur";
import { Image } from "react-native";
import { WIDTH } from "../utils/constants";
const PackageSelector = () => {
  const packages = [
    {
      image: require("../assets/images/Booking_Process/Package_Selection_Screen/krypium-img.png"),
      pkg: "Krypium",
      description:
        "Gourmet food, top health care,pet-friendly, Galaxicony access, language training.",
      benefits: [
        {
          b: "Any food item that you like from any corner of the galaxy prepared just for you",
        },
        {
          b: "We arrange for you Grade-A healthcare to guarantee your safety and well-being",
        },
        {
          b: "You are allowed to have your pet with you through out the journey",
        },
        { b: "Free entrance to our Galaxicony" },
      ],
      price: 253.7,
    },
    {
      image: require("../assets/images/Booking_Process/Package_Selection_Screen/omium-img.png"),
      pkg: "Omium",
      description:
        "100+ food choices, health care, pet choice, Galaxicony discount, language training.",
      benefits: [
        { b: "Choose among 100+ food items from our Omium menu" },
        {
          b: "We arrange for you Grade-B healthcare to guarantee your safety and well-being",
        },
        {
          b: "Enjoy 20% off at the entrance to Galaxicony",
        },
        { b: "Enjoy our acclaimed language courses with a 30% discount" },
      ],
      price: 223.64,
    },
    {
      image: require("../assets/images/Booking_Process/Package_Selection_Screen/serynium-img.png"),
      pkg: "Terynium",
      description:
        "50+ food options, health care, pet space, Galaxicony offer, language discount.",
      benefits: [
        { b: "Choose among 50+ food items from our Terynium menu" },
        {
          b: "We arrange for you Grade-C healthcare to guarantee your safety and well-being",
        },
        {
          b: "Enjoy 5% off at the entrance to Galaxicony",
        },
        { b: "Enjoy our acclaimed language courses with a 15% discount" },
      ],
      price: 189.65,
    },
    {
      image: require("../assets/images/Booking_Process/Package_Selection_Screen/terynium-img.png"),
      pkg: "Serynium",
      description: "Varied food, basic health care, worry-free explorations.",
      benefits: [
        { b: "Choose among 25+ food items from our galactic menu" },
        {
          b: "Travel safe and sound with our basic healthcare plan covering all your necessities",
        },
      ],
      price: 140.49,
    },
  ];

  const navigation = useNavigation();

  const route = useRoute();

  const data = route?.params?.data;

  console.log("PACKAGESELECT data", { data });

  return (
    <View style={styles.pakageSelectorStyle}>
      {/* <Text>Testing the pakage selector card</Text> */}
      {packages.map((p) => {
        const [open, setOpen] = useState(false);
        return (
          <TouchableOpacity
            key={p.pkg}
            onPress={() => {
              navigation.navigate("Checkout", {
                data: { ...data, package: p },
              });
            }}
          >
            <Modal
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
              isOpen={open}
              onClose={() => setOpen(false)}
            >
              <View style={{ width: 400, alignItems: "center" }}>
                <Modal.Content>
                  <Modal.Header>
                    <HStack style={{ alignItems: "center" }} space={5}>
                      <Image
                        style={{ width: 90, height: 90, borderRadius: 20 }}
                        source={p.image}
                      />
                      <Text style={{ color: "#fff", fontSize: 20 }}>
                        {p.pkg}
                      </Text>
                    </HStack>

                    <Modal.CloseButton />
                  </Modal.Header>
                  {/* <Modal.Body> */}
                  <View style={{ padding: 10 }}>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "500",
                        color: "#fff",
                      }}
                    >
                      Benefits:
                    </Text>
                    <View style={{}}>
                      {p.benefits.map((benefit) => {
                        return (
                          <Text
                            style={{ color: "#fff", fontSize: 12, padding: 3 }}
                          >
                            - {benefit.b}
                          </Text>
                        );
                      })}
                      <View height={3} />
                    </View>
                  </View>

                  {/* </Modal.Body> */}
                  <Modal.Footer style={{ justifyContent: "center" }}>
                    <HStack style={{ alignItems: "center" }} space={7}>
                      <Text style={{ color: "#fff", fontSize: 18 }}>
                        Rate per Person{" "}
                      </Text>
                      <VStack style={{ alignItems: "center" }}>
                        <Text
                          style={{
                            color: "#1DBBFF",
                            fontSize: 18,
                            fontWeight: "500",
                          }}
                        >
                          {p.price}Ñ
                        </Text>
                        <Text style={{ color: "#fff", fontSize: 10 }}>
                          per Light-Year
                        </Text>
                      </VStack>
                    </HStack>
                  </Modal.Footer>
                </Modal.Content>
              </View>
            </Modal>
            <PackageBlurViewCard
              img={p.image}
              pkg={p.pkg}
              description={p.description}
              onPress={setOpen}
            />
            <View height={8} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  pakageSelectorStyle: {
    width: "90%",
  },
});

export default PackageSelector;
