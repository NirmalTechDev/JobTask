import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../sreens/signIn';
import FirstScreen from '../sreens/firstScreen';
import ProfileScreen from '../sreens/profile';
import TabNavigation from './TabNavigation';
import LoginScreen from '../sreens/hello';
import SettingScreen from '../sreens/profile/settings';
import ProfileEditScreen from '../sreens/profile/component/ProfileEditScreen';
import FriendsProfileScreen from '../sreens/friendsProfile';
const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    // <ToastProvider>
    //   <NavigationContainer>
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen name="test" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="first" component={FirstScreen} options={{ headerShown: false }} />
      <Stack.Screen name="login" component={SignIn} options={{ headerShown: false }} />
      <Stack.Screen name="home" component={TabNavigation} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      <Stack.Screen name='friendsProfile' component={FriendsProfileScreen} options={{headerShown:false}} />
      <Stack.Screen name="setting" component={SettingScreen} options={{ headerShown: false }} />
      <Stack.Screen name='editProfile' component={ProfileEditScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
    //   </NavigationContainer>
    // </ToastProvider>
  );
};

export default AppNavigation;
