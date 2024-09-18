import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../sreens/signUp';
import SignIn from '../sreens/signIn';
import Home from '../sreens/home';
import OTPScreen from '../sreens/optVerification';
import FirstScreen from '../sreens/firstScreen';
import { ToastProvider } from 'react-native-toast-notifications';
const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <ToastProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='first'>
          <Stack.Screen name='first' component={FirstScreen} options={{ headerShown: false }} />
          <Stack.Screen name='login' component={SignIn} options={{ headerShown: false }} />
          <Stack.Screen name='otp' component={OTPScreen} options={{ headerShown: false }} />
          <Stack.Screen name='register' component={SignUp} options={{ headerShown: false }} />
          <Stack.Screen name='home' component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ToastProvider>
  )
}

export default AppNavigation