import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, BackHandler, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Geolocation from 'react-native-geolocation-service';
import MapView, { Marker } from 'react-native-maps';

const profilepic = ['https://instagram.fstv5-1.fna.fbcdn.net/v/t51.2885-19/454837168_322641514177562_4543743564091306202_n.jpg?_nc_ht=instagram.fstv5-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=XTixJITJBicQ7kNvgFA6NQE&_nc_gid=5722a423e5214232a472f93f1e74a167&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AYBxqofYCR_L4rfij6g1TqRKEug56A3JVD0tPSyWfmNwNw&oe=670DCA27&_nc_sid=7d3ac5',
'https://instagram.fstv5-1.fna.fbcdn.net/v/t51.2885-19/460879976_2264819820520905_5224897982768735743_n.jpg?_nc_ht=instagram.fstv5-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=htSqrrlELusQ7kNvgG-l40Z&_nc_gid=9c9561dc94e74e6aaf9770c0fcaf7d13&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AYCBJUg1t6dOFaHx8hs_do8fFp4l27DiY7mqfNIMAmXVFw&oe=670DC693&_nc_sid=7d3ac5'];
import firestore from '@react-native-firebase/firestore';
import { styles } from './styles';

// Example JSX
function Home() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Exit App', 'Are you sure you want to exit?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        { text: 'Yes', onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    const getCurrentLocation = () => {
      Geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({
            latitude,
            longitude,
          });
        },
        (error) => {
          console.log(error);
          Alert.alert('Error', 'Unable to fetch location.');
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    };
    // getCurrentLocation();
  }, []);

  const markers = [
    {
      coordinate: { latitude: 21.1702, longitude: 72.8311 },
      title: 'Location 1',
      description: 'This is the first location',
    },
    {
      coordinate: { latitude: 19.0760, longitude: 72.8777 },
      title: 'Location 2',
      description: 'This is the second location',
    },
    // {
    //   coordinate: { latitude: 37.76825, longitude: -122.4824 },
    //   title: 'Location 3',
    //   description: 'This is the third location'
    // },
    // Add more markers here...
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello, Nirmal!</Text>
        <Image
          source={{ uri: profilepic[1] }}
          style={styles.profilePic}
        />
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="location-outline" size={30} color="#fff" />
          {/* <Text style={styles.actionText}>Share Location</Text> */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="person-add-outline" size={30} color="#fff" />
          {/* <Text style={styles.actionText}>Find Friends</Text> */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="notifications-outline" size={30} color="#fff" />
          {/* <Text style={styles.actionText}>Notifications</Text> */}
        </TouchableOpacity>
      </View>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 21.1702,
          longitude: 72.8311,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
          >
            <View style={styles.customMarker}>
              <Image
                source={{ uri: profilepic[index]}}
                style={styles.markerImage}
              />
              <Text style={styles.markerText}>📍</Text>
            </View>
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

export default Home;
