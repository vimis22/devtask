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
import LoginScreen from './components/LoginScreen';
import SignupPage from './components/SignupPage';

const Stack = createStackNavigator();

export default function App() {
  return (
      <GestureHandlerRootView>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="SplashPage">
            <Stack.Screen name="SplashPage" component={SplashPage} />
            <Stack.Screen name="LoginPage" component={LoginScreen} />
            <Stack.Screen name="SignupPage" component={SignupPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
  );
}

