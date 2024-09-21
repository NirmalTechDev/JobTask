import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth';
const ProfileScreen = () => {

    const logout = ({navigation}) => {
        try {
            auth().signOut()
                .then(() => navigation.navigate('login'));

        } catch (error) {
                console.log(error);
                
        }
    }

    return (
        <View style={styles.container}>
            <Text>Profile Screen</Text>
            <Pressable onPress={logout}>
                <Text style={styles.logouttxt}>Log Out</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    logouttxt: {
        fontSize: 30,
        padding: 10,
        color: "black"
    }
})
export default ProfileScreen