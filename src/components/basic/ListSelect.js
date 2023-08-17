//List to select item in login screen when choosing language and currency
//Blurred background
//List elements in each row

//Displays logged in screen with user info after logged in
//Allow props to be used to enter image and name

import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
// import MapComponent from '../components/MapComponent';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { BlurView } from 'expo-blur';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 1,
  },
});

const ListSelect = (items) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['purple', 'blue']}
        style={styles.background}
      />
      {items.map((data) => (
        <Text>{data}</Text>
      ))}
    </View>
  );
};

export default ListSelect;
