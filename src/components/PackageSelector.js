import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; // Make sure to import from 'react-native'
import PackageBlurViewCard from './basic/PackageBlurViewCard';

const PackageSelector = () => {
  return (
    <View style={styles.pakageSelectorStyle}>
      {/* <Text>Testing the pakage selector card</Text> */}
      <PackageBlurViewCard
        img={
          '../../assets/images/Booking Process/Package Selection Screen/planet.png'
        }
        pkg={'krypto'}
        description={'best pakage'}
      />
      <PackageBlurViewCard />
      <PackageBlurViewCard />
    </View>
  );
};

const styles = StyleSheet.create({
  pakageSelectorStyle: {
    width: '90%',
  },
});

export default PackageSelector;
