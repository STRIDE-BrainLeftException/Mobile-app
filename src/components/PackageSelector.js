import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; // Make sure to import from 'react-native'
import PackageBlurViewCard from './basic/PackageBlurViewCard';

const PackageSelector = () => {
  return (
    <View style={styles.pakageSelectorStyle}>
      {/* <Text>Testing the pakage selector card</Text> */}
      <PackageBlurViewCard
        image={
          '../../assets/images/Booking_Process/Package_Selection_Screen/krypium-img.png'
        }
        pkg={'Krypium'}
        description={
          'Gourmet food, top health care,pet-friendly, Galaxicony access, language training.'
        }
      />
      <PackageBlurViewCard
        image={
          '../../assets/images/Booking_Process/Package_Selection_Screen/krypium-img.png'
        }
        pkg={'Omium'}
        description={
          '100+ food choices, health care, pet choice, Galaxicony discount, language training.'
        }
      />
      <PackageBlurViewCard
        image={
          '../../assets/images/Booking_Process/Package_Selection_Screen/krypium-img.png'
        }
        pkg={'Terynium'}
        description={
          '50+ food options, health care, pet space, Galaxicony offer, language discount.'
        }
      />
      <PackageBlurViewCard
        image={
          '../../assets/images/Booking_Process/Package_Selection_Screen/krypium-img.png'
        }
        pkg={'Serynium'}
        description={'Varied food, basic health care, worry-free explorations.'}
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
