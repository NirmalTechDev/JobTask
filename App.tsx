import { Platform, PermissionsAndroid, Alert, Linking } from 'react-native';
import React, { useEffect } from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import { ToastProvider } from 'react-native-toast-notifications';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {

  useEffect(() => {
    if (Platform.OS === 'android') {
      checkAndRequestLocationPermission();
      requestCameraPermission();
    }
  });

  // Check if the location permission is granted or denied
  const checkAndRequestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);

      if (granted) {
        console.log('Location permission already granted');
        // getCurrentLocation();
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
            { text: 'Open Settings', onPress: () => Linking.openSettings() },
          ]
        );
      } else {
        Alert.alert('Permission Denied', 'Location permission is required to use this feature.');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const requestCameraPermission = async (): Promise<void> => {
    if (Platform.OS === 'android') {
      try {
        const granted: string = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Camera permission granted');
        } else {
          console.log('Camera permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };


  return (
    <ToastProvider>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </ToastProvider>
  );
};

export default App;
