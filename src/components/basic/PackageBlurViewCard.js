import React, { FC } from 'react';
import { BlurView } from 'expo-blur';
import { Text, View, Image } from 'native-base';
import { StyleSheet } from 'react-native';

const PackageBlurViewCard = ({ image, pkg, description }) => {
  const img = image;
  return (
    <View style={styles.view}>
      <BlurView style={[styles.blurView]}>
        {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}> */}
        <View
          style={{
            width: 100,
            height: 100,
            // backgroundColor: 'blue',
            marginRight: 10,
          }}>
          <Image
            // source={{
            //   uri: 'https://img.freepik.com/premium-photo/illustration-neon-tropical-theme-with-palm-tree-exotic-floral-ai_564714-1270.jpg',
            // }}
            source={require('../../assets/images/Booking_Process/Package_Selection_Screen/omium-img.png')}
            alt="Alternate Text"
            style={{
              width: 100,
              height: 100,
              borderRadius: 10,
            }} // Set desired width and height
          />
        </View>
        <View
          style={{
            flex: 2,
            justifyContent: 'center',
          }}>
          <Text>{pkg}</Text>
          <Text>{description}</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'red',
          }}></View>
        {/* </View> */}
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  blurView: {
    padding: 10,
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  view: {
    borderRadius: 20,
    marginBottom: 10,
    overflow: 'hidden',
    backgroundColor: 'transparent',
    borderColor: 'rgba(255,255,255,0.5)',
    borderWidth: 1,
  },
});

export default PackageBlurViewCard;
