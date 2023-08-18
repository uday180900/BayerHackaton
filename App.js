/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Text, View} from 'react-native';
import HomeScreen from './src/HomeScreen';
import ProfileScreen from './src/ProfileScreen';
import DetailsScreen from './src/DetailsScreen';
import {LogBox} from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={() => ({
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTitle: () => (
              <Text style={{fontSize: 24, color: 'white'}}>
                VEGETABLES | CA
              </Text>
            ),
          })}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={() => ({
            headerTitle: '',
          })}
        />
        {/* <Stack.Screen
          options={({route, navigation}) => ({
            route: {route},
            navigation: {navigation},
          })}
          component={ProfileScreen}
          name="Profile"
        /> */}
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={() => ({
            headerTitle: '',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
