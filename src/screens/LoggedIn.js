//Displays logged in screen with user info after logged in
//Allow props to be used to enter image and name

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
// import MapComponent from '../components/MapComponent';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

// const PlaceholderImage = require('./../../assets/splash.png');
import PlaceholderImage from '../assets/images/bookingProcessBackground.png';
import { ONBOARDING_BOTTOM_COLOR } from '../utils/constants';
import Logo from '../components/basic/Logo';
import { BlurView } from 'expo-blur';

const bg = require('./../assets/images/login/loginScreenBG.png');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textBoxHeading: {
    backgroundColor: 'green',

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

  image: { width: '100%', height: '100%' },

  profilepic: {
    top: 180,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3,
  },

  card: { backgroundColor: 'blue', alignItems: 'center', zIndex: 2, top: 200 },
});

const tempDP = require('./../assets/images/login/loginScreenUser.png');
const tempName = 'Charles Oliveira';
const galaxy = 'MilkyWay';
const planet = 'Earth';
//Variable to change image dimensions
const w = 140;
const LoggedIn = () => {
  return (
    <View style={styles.container}>
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
        <View style={styles.card}>
          <Text style={{ fontSize: 20, color: '#fff' }}>{tempName}</Text>
          <Text style={{ fontSize: 12, color: '#fff' }}>
            {planet} | {galaxy}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoggedIn;
