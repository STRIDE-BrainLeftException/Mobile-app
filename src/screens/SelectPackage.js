import React from 'react';
import { View, Text, ImageBackground } from 'react-native'; // Make sure to import from 'react-native'
import PackageSelector from '../components/PackageSelector';

const SelectPackage = () => {
  return (
    // <View>
    //   <Text>Testing the pakage selector card</Text>
    // </View>
    <ImageBackground
      source={require('../assets/images/Booking_BG.png')}
      style={{ flex: 1, resizeMode: 'cover' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* <Text>Testing the package selector</Text> */}
        <PackageSelector />
      </View>
    </ImageBackground>
  );
};

export default SelectPackage;
