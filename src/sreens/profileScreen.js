// import { View, Text, StyleSheet, Pressable } from 'react-native'
// import React from 'react'
// const ProfileScreen = ({navigation}) => {



//     return (
//         <View style={styles.container}>
//             <Text>Profile Screen</Text>
//             
//         </View>
//     )
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//     },
//     
// })
// export default ProfileScreen

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';

export default function ProfileScreen({navigation}) {

    const logout = () => {
        auth()
            .signOut()
            .then(() => { navigation.navigate('login') }).catch((error) => { console.log(error) })
    }

    return (
        <ScrollView style={styles.container}>
            {/* Header with background gradient */}
            <View style={styles.header}>
                <Image
                    source={{
                        uri: 'https://randomuser.me/api/portraits/men/1.jpg',
                    }}
                    style={styles.profileImage}
                />
                <Text style={styles.userName}>John Doe</Text>
                <Text style={styles.userOccupation}>Software Developer</Text>
            </View>

            {/* Action Buttons */}
            <View style={styles.actionButtonsContainer}>
                <TouchableOpacity style={styles.actionButton}>
                    <Icon name="create-outline" size={24} color="#fff" />
                    <Text style={styles.actionButtonText}>Edit Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton}>
                    <Icon name="people-outline" size={24} color="#fff" />
                    <Text style={styles.actionButtonText}>Friends List</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton}>
                    <Icon name="settings-outline" size={24} color="#fff" />
                    <Text style={styles.actionButtonText}>Settings</Text>
                </TouchableOpacity>
            </View>

            {/* Stats Section */}
            <View style={styles.statsContainer}>
                <View style={styles.statBox}>
                    <Text style={styles.statNumber}>120</Text>
                    <Text style={styles.statLabel}>Posts</Text>
                </View>

                <View style={styles.statBox}>
                    <Text style={styles.statNumber}>350</Text>
                    <Text style={styles.statLabel}>Followers</Text>
                </View>

                <View style={styles.statBox}>
                    <Text style={styles.statNumber}>180</Text>
                    <Text style={styles.statLabel}>Following</Text>
                </View>
            </View>

            {/* Bio Section */}
            <View style={styles.bioContainer}>
                <Text style={styles.bioText}>
                    Passionate about technology and coding. I love exploring new frameworks and solving real-world problems through software.
                </Text>
            </View>
            <Pressable onPress={logout}>
                <Text style={styles.logouttxt}>Log Out</Text>
            </Pressable>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    header: {
        backgroundColor: '#6c63ff',
        paddingTop: 50,
        paddingBottom: 30,
        alignItems: 'center',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 3,
        borderColor: '#fff',
    },
    userName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 10,
    },
    userOccupation: {
        fontSize: 16,
        color: '#fff',
        marginTop: 5,
    },
    actionButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
    },
    actionButton: {
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },
    actionButtonText: {
        color: '#fff',
        marginLeft: 10,
        fontWeight: 'bold',
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
    },
    statBox: {
        alignItems: 'center',
    },
    statNumber: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
    },
    statLabel: {
        fontSize: 14,
        color: '#888',
    },
    bioContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    bioText: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
    },
    logouttxt: {
        fontSize: 30,
        padding: 10,
        color: "black",
        backgroundColor:"red",
        textAlign:"center",
    }
});
