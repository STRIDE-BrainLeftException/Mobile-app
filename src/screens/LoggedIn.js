//Displays logged in screen with user info after logged in
//Allow props to be used to enter image and name

import React, { useState } from 'react';
import { Button, Checkbox } from 'native-base';
import { FormControl } from 'native-base';
import { Input } from 'native-base';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
// import MapComponent from '../components/MapComponent';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

// const PlaceholderImage = require('./../../assets/splash.png');
import PlaceholderImage from '../assets/images/bookingProcessBackground.png';
import { ONBOARDING_BOTTOM_COLOR, WIDTH } from '../utils/constants';
import Logo from '../components/basic/Logo';
import { BlurView } from 'expo-blur';
import { ChevronRightIcon, HStack, Modal } from 'native-base';

const bg = require('./../assets/images/login/loginScreenBG.png');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textBoxHeading: {
    backgroundColor: 'transparent',

    top: 100,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3,
  },

  text: {
    backgroundColor: 'transparent',
    fontSize: 25,
    color: '#fff',
  },

  listTextBox: {
    alignItems: 'center',
    padding: 12,
  },
  listItems: {
    padding: 8,
    color: '#fff',
    fontSize: 14,
  },
  image: { width: '100%', height: '100%' },

  profilepic: {
    top: 180,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3,
  },
  outerCard: {
    borderRadius: 12,
    overflow: 'hidden',
    alignItems: 'center',
    top: 130,
    zIndex: 2,
  },
  card: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    zIndex: 2,
    paddingTop: 45,
  },

  tickOath: {
    backgroundColor: 'transparent',
    zIndex: 3,
    top: 210,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const tempDP = require('./../assets/images/login/loginScreenUser.png');
const tempName = 'Charles Oliveira';
const galaxy = 'MilkyWay';
const planet = 'Earth';
//Variable to change image dimensions
const w = 140;
const languages = [{ data: 'English' }, { data: 'Rōǩḗ' }, { data: 'Kpūswi' }];
const currencies = [{ data: 'Dollars' }, { data: 'Ñovar' }];
const LoggedIn = () => {
  const [lang, setLang] = useState('English');
  const [currency, setCurrency] = useState('Dollars');
  const [modalOpenLang, setOpenLang] = useState(false);
  const [modalOpenCurr, setOpenCurr] = useState(false);
  const [check, setCheck] = useState(false);
  const onPressLang = () => {
    setOpenLang(true);
  };

  const onPressCurr = () => {
    setOpenCurr(true);
  };

  const pressContinue = () => {
    //To be implemented
  };

  return (
    <View style={styles.container}>
      <Modal isOpen={modalOpenLang} onClose={() => setOpenLang(false)}>
        <Modal.Content maxWidth='400px'>
          {/* <Modal.Body> */}
          <BlurView style={styles.listTextBox}>
            {languages.map((language) => (
              <Text
                style={styles.listItems}
                onPress={() => {
                  setOpenLang(false);
                  setLang(language.data);
                }}
              >
                {language.data}
              </Text>
            ))}
          </BlurView>
          {/* </Modal.Body> */}
        </Modal.Content>
      </Modal>
      <Modal isOpen={modalOpenCurr} onClose={() => setOpenCurr(false)}>
        <Modal.Content maxWidth='400px'>
          {/* <Modal.Body> */}
          <BlurView style={styles.listTextBox}>
            {currencies.map((curr) => (
              <Text
                style={styles.listItems}
                onPress={() => {
                  setOpenCurr(false);
                  setCurrency(curr.data);
                }}
              >
                {curr.data}
              </Text>
            ))}
          </BlurView>
          {/* </Modal.Body> */}
        </Modal.Content>
      </Modal>
      <ImageBackground source={bg} style={styles.image} resizeMode='cover'>
        <View style={styles.textBoxHeading}>
          <Text style={styles.text}>Log In</Text>
          <Text style={styles.text}>Lő Nìƴțū</Text>
        </View>
        <View style={styles.profilepic}>
          <Image
            source={tempDP}
            style={{ width: w, height: w, borderRadius: w / 2 }}
          />
        </View>
        <View style={{ alignItems: 'center' }}>
          <View style={styles.outerCard}>
            <BlurView intensity={70} style={{ padding: 4, width: WIDTH * 0.9 }}>
              <View style={styles.card}>
                <Text style={{ fontSize: 20, color: '#fff' }}>{tempName}</Text>
                <Text style={{ fontSize: 12, color: '#fff', paddingBottom: 8 }}>
                  {planet} | {galaxy}
                </Text>
                <View style={{ padding: 6 }}></View>
                <View
                  style={{
                    borderRadius: 12,
                    overflow: 'hidden',
                    alignItems: 'center',
                  }}
                >
                  <BlurView
                    intensity={120}
                    style={{ padding: 4, width: WIDTH * 0.7 }}
                  >
                    <HStack style={{ padding: 8 }} space={100}>
                      <Text style={{ fontSize: 14, color: '#fff' }}>
                        Language
                      </Text>
                      <HStack space={4}>
                        <Text
                          onPress={onPressLang}
                          style={{ fontSize: 14, color: '#fff' }}
                        >
                          {lang}
                        </Text>
                        <ChevronRightIcon size={3} style={{ top: 4 }} />
                      </HStack>
                    </HStack>
                  </BlurView>
                </View>
                <View style={{ padding: 6 }}></View>
                <View
                  style={{
                    borderRadius: 12,
                    overflow: 'hidden',
                    alignItems: 'center',
                  }}
                >
                  <BlurView
                    intensity={120}
                    style={{ padding: 4, width: WIDTH * 0.7 }}
                  >
                    <HStack style={{ padding: 8 }} space={108}>
                      <Text style={{ fontSize: 14, color: '#fff' }}>
                        Currency
                      </Text>
                      <HStack space={4}>
                        <Text
                          onPress={onPressCurr}
                          style={{ fontSize: 14, color: '#fff' }}
                        >
                          {currency}
                        </Text>
                        <ChevronRightIcon size={3} style={{ top: 4 }} />
                      </HStack>
                    </HStack>
                  </BlurView>
                </View>
              </View>
              <View style={{ padding: 6 }}></View>
            </BlurView>
          </View>
        </View>
        <View style={styles.tickOath}>
          <HStack
            space={3}
            style={{ padding: 8, width: '60%', paddingBottom: 18 }}
          >
            <Checkbox
              colorScheme={'green'}
              onChange={() => setCheck(!check)}
              top={1}
            />
            <Text style={{ fontSize: 12, color: '#fff' }}>
              I agree to be bound by the Intergalactic Oath and Stride Oath
            </Text>
          </HStack>

          <View
            style={{
              borderRadius: 26,
              overflow: 'hidden',
              alignItems: 'center',
            }}
          >
            <BlurView
              style={{ padding: 12, width: WIDTH * 0.6, alignItems: 'center' }}
              onPress={() => {
                if (check) {
                  pressContinue();
                }
              }}
            >
              <Text style={{ fontSize: 18, color: '#fff', padding: 4 }}>
                Continue
              </Text>
            </BlurView>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoggedIn;
