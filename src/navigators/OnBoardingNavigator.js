import React, { useState } from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import GalaxyScreen from '../screens/GalaxyScreen';
import SolarSystemScreen from '../screens/SolarSystemScreen';
import FlightOptionPage from '../screens/FlightOptionPage';
import OnBoardingPage from '../components/OnBoardingPage';
import { useRoute } from '@react-navigation/native';
import { NavigationState } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { Button } from 'react-native';

const Stack = createStackNavigator();

const screens = [
  { page: 1, image: '', heading: 'fndjipaf fdjif', description: 'fdmjiafpd' },
  { page: 2, image: '', heading: 'fndjipaf fdjif', description: 'fdmjiafpd' },
  { page: 3, image: '', heading: 'fndjipaf fdjif', description: 'fdmjiafpd' },
  { page: 4, image: '', heading: 'fndjipaf fdjif', description: 'fdmjiafpd' },
  { page: 5, image: '', heading: 'fndjipaf fdjif', description: 'fdmjiafpd' },
];

function OnBoardingNavigator({ navigation }) {
  const [page, setPage] = useState(1);

  return (
    <>
      <Stack.Navigator
        initialRouteName={'page'}
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      ><Stack.Screen name={'page'} component={FlightOptionPage}/>
        {screens.map((s, index) => (
          <Stack.Screen name={String(s.page)}>
            {(props) => <OnBoardingPage key={index} {...props} page={s.page} />}
          </Stack.Screen>
        ))}
      </Stack.Navigator>
      <View>
        <Text>{page}</Text>
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
      </View>
    </>
  );
}

export default OnBoardingNavigator;
