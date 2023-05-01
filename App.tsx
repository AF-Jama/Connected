/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useState,useEffect,useReducer,useContext} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;
import AuthContextProvider from './src/Contexts/AuthContext/AuthContextProvider';
import UserContextProvider from './src/Contexts/UserContext/UserContextProvider';
import HomeScreen from './src/Screens/HomeScreen/HomeScreen';
import LoginScreen from './src/Screens/LoginScreen/LoginPage';
import FeatureScreen from './src/Screens/FeatureScreen/FeatureScreen';
import LoginFormScreen from './src/Screens/LoginFormScreen/LoginFormScreen';
import SignupFormScreen from './src/Screens/SignupFormScreen/SignupFormScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigation from './src/CustomHooks/useNavigation';

// function HomeScreen() {
//   return (
//     <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </SafeAreaView>
//   );
// }

function App(): JSX.Element {

  const Stack = createNativeStackNavigator();

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // const navigator = useNavigation();


  return (
    <NavigationContainer>
      <AuthContextProvider>
        <UserContextProvider>
          <AppNavigation/>
        </UserContextProvider>
      </AuthContextProvider>
    </NavigationContainer>
  );
}

export default App;