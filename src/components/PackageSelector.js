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
        pkg={'Krypium'}
        description={
          'Gourmet food, top health care,pet-friendly, Galaxicony access, language training.'
        }
      />
      <PackageBlurViewCard
        img={
          '../../assets/images/Booking Process/Package Selection Screen/planet.png'
        }
        pkg={'Omium'}
        description={
          '100+ food choices, health care, pet choice, Galaxicony discount, language training.'
        }
      />
      <PackageBlurViewCard
        img={
          '../../assets/images/Booking Process/Package Selection Screen/planet.png'
        }
        pkg={'Terynium'}
        description={
          '50+ food options, health care, pet space, Galaxicony offer, language discount.'
        }
      />
      <PackageBlurViewCard
        img={
          '../../assets/images/Booking Process/Package Selection Screen/planet.png'
        }
        pkg={'Serynium'}
        description={'Varied food, basic health care, worry-free exploration.'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pakageSelectorStyle: {
    width: '90%',
  },
});

export default PackageSelector;
