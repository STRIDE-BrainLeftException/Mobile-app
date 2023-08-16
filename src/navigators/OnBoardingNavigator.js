import React, { useState } from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import GalaxyScreen from '../screens/GalaxyScreen';
import SolarSystemScreen from '../screens/SolarSystemScreen';
import FlightOptionPage from '../screens/FlightOptionPage';
import WelcomePage from '../screens/WelcomePage';
import OnBoardingPage from '../components/OnBoardingPage';
import { useRoute } from '@react-navigation/native';
import { NavigationState } from '@react-navigation/native';
import { HStack, Text, View } from 'native-base';
import { Button } from 'react-native';
import { ONBOARDING_BOTTOM_COLOR } from '../utils/constants';
import AnimatedDotsCarousel from 'react-native-animated-dots-carousel';
import PlaceholderImage from '../assets/images/onboarding/OnboardingScreen2.png';

const Screen1 = require('./../assets/images/onboarding/OnboardingScreen1.png');
const Screen3 = require('./../assets/images/onboarding/OnboardingScreen3.png');
const Screen4 = require('./../assets/images/onboarding/OnboardingScreen4.png');
const Screen5 = require('./../assets/images/onboarding/OnboardingScreen5.png');
const Screen6 = require('./../assets/images/onboarding/OnboardingScreen6.png');
const Stack = createStackNavigator();

const screens = [
  // {
  //   page: 1,
  //   image: Screen1,
  //   heading: 'fndjipaf fdjif',
  //   description: 'fdmjiafpd',
  // },
  {
    page: 1,
    image: PlaceholderImage,
    heading: 'Best Way to Travel Inter-Galactic',
    description:
      'We made travelling across galaxies easier and faster than ever',
  },
  {
    page: 2,
    image: Screen3,
    heading: 'Easy Login & Payments',
    description:
      'Inter-Galactic ID Biometrics makes the login and payment processes simpler',
  },
  {
    page: 3,
    image: Screen4,
    heading: 'Many Travel Modes and Ships to Choose From',
    description:
      'Experience galactic travel at the highest speeds and best comforts',
  },
  {
    page: 4,
    image: Screen5,
    heading: 'Premium to Affordable',
    description: 'Select from our plethora of luxury options',
  },
  {
    page: 5,
    image: Screen6,
    heading: 'At Your Service On Board',
    description: 'At your fingertips to provide all your transportation needs',
  },
];

function OnBoardingNavigator({ navigation }) {
  const [page, setPage] = useState(0);
  const LENGTH = screens.length;
  return (
    <>
      <Stack.Navigator
        initialRouteName={'welcome'}
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        <Stack.Screen name={'welcome'}>
          {(props) => <WelcomePage />}
        </Stack.Screen>
        {screens.map((s, index) => (
          <Stack.Screen key={index} name={String(s.page)}>
            {(props) => (
              <FlightOptionPage key={index} {...props} page={s.page} item={s} />
            )}
          </Stack.Screen>
        ))}
      </Stack.Navigator>
      {page != 0 ? (
        <HStack
          backgroundColor={ONBOARDING_BOTTOM_COLOR}
          style={{
            height: 100,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 30,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'transparent',
          }}
        >
          <AnimatedDotsCarousel
            length={LENGTH}
            currentIndex={page - 1}
            maxIndicators={4}
            interpolateOpacityAndColor={true}
            activeIndicatorConfig={{
              color: 'white',
              margin: 3,
              opacity: 1,
              size: 8,
            }}
            inactiveIndicatorConfig={{
              color: 'white',
              margin: 3,
              opacity: 0.5,
              size: 8,
            }}
            style={{ margin: 20 }}
            decreasingDots={[
              {
                config: { color: 'white', margin: 3, opacity: 0.5, size: 6 },
                quantity: 1,
              },
              {
                config: { color: 'white', margin: 3, opacity: 0.5, size: 4 },
                quantity: 1,
              },
            ]}
          ></AnimatedDotsCarousel>
          <Button
            onPress={() => {
              const prev = Math.max(1, page - 1);

              navigation.navigate(String(prev));
              setPage(prev);
            }}
            title='prev'
          />
          <Button
            onPress={() => {
              const next = Math.min(page + 1, screens.length);
              navigation.navigate(String(next));
              setPage(next);
            }}
            title='next'
          />
        </HStack>
      ) : (
        <Button
          onPress={() => {
            navigation.navigate(String(1));
            setPage(1);
          }}
          title={'continue'}
        ></Button>
      )}
    </>
  );
}

export default OnBoardingNavigator;
