import { View, Text, Platform, PermissionsAndroid, Alert, Linking } from 'react-native'
import React, { useEffect } from 'react'
import AppNavigation from './src/navigation/AppNavigation'
import { ToastProvider } from 'react-native-toast-notifications'
import { NavigationContainer } from '@react-navigation/native'
import { PERMISSIONS, request } from 'react-native-permissions'

const App = () => {

  useEffect(() => {
    if (Platform.OS === 'android') {
      checkAndRequestLocationPermission();
    }
  }, []);

  // Check if the location permission is granted or denied
  const checkAndRequestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);

      if (granted) {
        console.log('Location permission already granted');
        getCurrentLocation();
      } else {
        requestLocationPermission();
      }
    } catch (err) {
      console.warn(err);
    }
  };

  // Request for location permission
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app needs access to your location.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission granted');
      } else if (granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
        Alert.alert(
          'Permission Denied Permanently',
          'You have permanently denied location permission. To enable it, go to Settings.',
          [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Open Settings', onPress: () => Linking.openSettings() }
          ]
        );
      } else {
        Alert.alert('Permission Denied', 'Location permission is required to use this feature.');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <ToastProvider>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </ToastProvider>
  )

  // if (!true) {
  //   return (
  //     <AppNavigation />
  //   )
  // } else {
  //   return (
  //       <TabNavigation />
  //   )
  // }

}

export default App