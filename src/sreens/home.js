import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';
import colors from '../helper/constant';
const profilepic = ["https://instagram.fstv5-1.fna.fbcdn.net/v/t51.2885-19/454837168_322641514177562_4543743564091306202_n.jpg?_nc_ht=instagram.fstv5-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=Ad5qq0gIM-UQ7kNvgGhkXJv&_nc_gid=a06b6a619a224fdf8a0380844cd49984&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AYDgtu4PnRMGRfpW9iRcghlKzi7CezJGqgemeRBW0aFk8A&oe=66F48567&_nc_sid=7d3ac5",
  "https://instagram.fstv5-1.fna.fbcdn.net/v/t51.2885-19/460827328_1771721280299642_8632251657500811285_n.jpg?_nc_ht=instagram.fstv5-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=ob8cAlM7DmQQ7kNvgE1my1o&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AYBxlA2pdCeW5E1I-N7NExjpl-PgRn-zlxB2Eho3YKhlKw&oe=66F60C12&_nc_sid=7d3ac5",
]
// Example JSX
function Home() {
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
          latitude: 23.0225,
          longitude: 72.5714,
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
    backgroundColor: colors.ThemeBG,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.ThemeText,
    textAlignVertical: "center",
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
    backgroundColor:colors.ThemeButton,
  },
  actionButton: {
    backgroundColor:colors.ThemeBorder,
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