/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @link https://reactnavigation.org/docs/auth-flow
 * @link https://github.com/MidnightRocketEducation/msd-car-rental/blob/main/frontend/App.tsx
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
import ChatPage from './components/ChatPage.tsx';
import {LoginProvider} from './functionHandlers/LoginProvider.tsx';

const Stack = createStackNavigator();

export default function App() {
  return (
      <GestureHandlerRootView>
          <LoginProvider>
              <NavigationContainer>
                  <Stack.Navigator initialRouteName="SplashPage">
                      <Stack.Screen name="SplashPage" component={SplashPage} />
                      <Stack.Screen name="LoginPage" component={LoginPage} />
                      <Stack.Screen name="SignupPage" component={SignupPage} />
                      <Stack.Screen name="RoomlistPage" component={RoomlistPage} />
                      <Stack.Screen name="ChatPage" component={ChatPage}/>
                  </Stack.Navigator>
              </NavigationContainer>
          </LoginProvider>
      </GestureHandlerRootView>
  );
}

