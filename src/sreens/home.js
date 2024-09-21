import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';

// Example JSX
function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello, Nirmal!</Text>
        <Image
          source={{ uri: 'https://instagram.fstv5-1.fna.fbcdn.net/v/t51.2885-19/454837168_322641514177562_4543743564091306202_n.jpg?_nc_ht=instagram.fstv5-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=Ad5qq0gIM-UQ7kNvgGhkXJv&_nc_gid=a06b6a619a224fdf8a0380844cd49984&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AYDgtu4PnRMGRfpW9iRcghlKzi7CezJGqgemeRBW0aFk8A&oe=66F48567&_nc_sid=7d3ac5' }}
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
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  actionButton: {
    backgroundColor: '#3498db',
    // padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  actionText: {
    color: '#fff',
    marginTop: 5,
  },
  map: {
    flex: 1,
    margin: 10,
  },
});
export default Home