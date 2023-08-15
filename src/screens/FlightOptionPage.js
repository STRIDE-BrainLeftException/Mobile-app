import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
// import MapComponent from '../components/MapComponent';
import { StyleSheet, Text, View, Image } from 'react-native';

const PlaceholderImage = require('./../../assets/splash.png');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 1,
  },
  textHead: {
    backgroundColor: 'transparent',
    fontSize: 22,
    color: '#fff',
    zIndex: 3,
    fontWeight: 'bold',
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 16,
    color: '#fff',
    zIndex: 3,
  },
  textBox: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 150,
    justifyContent: 'flex-end',
    alignContent: 'center',
    zIndex: 3,
  },
  dots: {},
  image: { position: 'absolute', zIndex: 2 },
});

const FlightOptionPage = (props) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#301934', '#05014a']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.5, y: 0.5 }}
        style={styles.background}
      />
      <Image source={PlaceholderImage} style={styles.image} />
      <View style={styles.textBox}>
        <Text style={styles.textHead}>Best-Way to Travel Inter-Galactic</Text>
        <Text style={styles.text}>
          We made travelling across galaxies easier and faster than ever
        </Text>
      </View>
    </View>
  );
};

export default FlightOptionPage;
