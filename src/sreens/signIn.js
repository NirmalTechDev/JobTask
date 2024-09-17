import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable, Image } from 'react-native';
import colors from '../helper/constant';

const SignIn = ({ navigation }) => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [isFocus,setIsFocus] = useState(false);
    const handleSendOTP = () => {
        if (mobileNumber.length === 10) {
            // Navigate to OTP Screen
            navigation.navigate('otp', { mobileNumber });
        } else {
            alert("Please enter a valid 10-digit mobile number");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.design_container}>
                <View style={styles.image_container}>
                    <Image source={require('../assets/images/login1.jpg')} style={styles.image} />
                </View>
            </View>
            <View style={styles.felds_container}>
                <Text style={styles.header}>LogIn</Text>

                <TextInput
                    style={[styles.input, isFocus && { borderWidth:1, borderColor:colors.ThemeText }]}
                    placeholder="Mobile Number"
                    keyboardType="numeric"
                    maxLength={10}
                    value={mobileNumber}
                    onChangeText={setMobileNumber}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                />

                <TouchableOpacity style={styles.button} onPress={handleSendOTP}>
                    <Text style={styles.buttonText}>Send OTP</Text>
                </TouchableOpacity>
                <View style={styles.note}>
                    <Pressable onPress={() => { navigation.navigate('register') }}>
                        <Text>Register!</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:colors.ThemeBG,
    },
    design_container:{
        flex:0.6,
        width:'100%',
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50,
        shadowColor:"black",
        elevation:30,
    },
    image:{
        height:"100%",
        width:'100%',
        resizeMode:'cover',
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50,
    },
    felds_container:{
        flex:0.4,
        width:"90%",
        paddingTop:20,
        alignItems: 'center',
    },
    header: {
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 30,
        marginLeft:40,
        color: colors.ThemeText,
        alignSelf:"flex-start"
    },
    input: {
        width: '80%',
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        marginBottom: 20,
        fontSize:16,
    },
    button: {
        backgroundColor: colors.ThemeText,
        paddingVertical: 13,
        paddingHorizontal: 25,
        borderRadius: 6,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    note:{
        padding:5,
        margin:5,
        fontSize:15,
        color:'gray',
        fontWeight:'600',
      }
});

export default SignIn;
