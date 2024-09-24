import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../sreens/signIn';
import Home from '../sreens/home';
import FirstScreen from '../sreens/firstScreen';
import { ToastProvider } from 'react-native-toast-notifications';
import ProfileScreen from '../sreens/profileScreen';
import TabNavigation from './TabNavigation';
import LoginScreen from '../sreens/hello';
const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    // <ToastProvider>
    //   <NavigationContainer>
        <Stack.Navigator initialRouteName='login'>
          <Stack.Screen name='test' component={LoginScreen} options={{headerShown:false}}/>
          <Stack.Screen name='first' component={FirstScreen} options={{ headerShown: false }} />
          <Stack.Screen name='login' component={SignIn} options={{ headerShown: false }} />
          <Stack.Screen name='home' component={TabNavigation} options={{ headerShown: false }} />
          <Stack.Screen name='Profile' component={ProfileScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    //   </NavigationContainer>
    // </ToastProvider>
  )
}

export default AppNavigation