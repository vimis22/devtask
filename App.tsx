/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashPage from './components/SplashPage.tsx';
import LoginPage from './components/LoginPage.tsx';
import SignupPage from './components/SignupPage.tsx';
import RoomlistPage from './components/RoomlistPage.tsx';

const Stack = createStackNavigator();

export default function App() {
  return (
      <GestureHandlerRootView>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="SplashPage">
              <Stack.Screen name="SplashPage" component={SplashPage} />
              <Stack.Screen name="LoginPage" component={LoginPage} />
              <Stack.Screen name="SignupPage" component={SignupPage} />
              <Stack.Screen name="RoomlistPage" component={RoomlistPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
  );
}

