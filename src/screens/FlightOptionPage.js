import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
// import MapComponent from '../components/MapComponent';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

// const PlaceholderImage = require('./../../assets/splash.png');
import PlaceholderImage from '../assets/images/bookingProcessBackground.png';
import { ONBOARDING_BOTTOM_COLOR } from '../utils/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // background: {
  //   position: "absolute",
  //   left: 0,
  //   right: 0,
  //   top: 0,
  //   bottom: 0,
  //   zIndex: 1,
  // },
  textHead: {
    backgroundColor: 'transparent',
    fontSize: 25,
    color: '#fff',
    zIndex: 3,
    fontWeight: 'bold',
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 17,
    color: '#fff',
    zIndex: 3,
  },
  textBox: {
    paddingHorizontal: 30,
    paddingVertical: 30,
    top: 550,
    justifyContent: 'flex-end',
    alignContent: 'center',
    zIndex: 3,
  },
  dots: {},
  image: { width: '100%', height: '100%' },
});

const FlightOptionPage = ({ item, ...props }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={item.image}
        style={styles.image}
        resizeMode='cover'
      >
        {/* <LinearGradientr
          // Background Linear Gradient
          colors={["rgba(0,0,0,0)", ONBOARDING_BOTTOM_COLOR]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.background}
        /> */}
        <View style={styles.textBox}>
          <Text style={styles.textHead}>{item.heading}</Text>
          <Text style={styles.text}>{item.description}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default FlightOptionPage;
