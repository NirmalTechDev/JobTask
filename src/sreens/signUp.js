import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../helper/constant';

const SignUp = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [isFocus1, setIsFocus1] = useState(false);
    const [isFocus2, setIsFocus2] = useState(false);
    const [isFocus3, setIsFocus3] = useState(false);

    const handleSignup = () => {
        // Validate inputs
        if (!username || !email || !mobileNumber) {
            alert('Please fill all fields');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email');
            return;
        }

        if (mobileNumber.length !== 10) {
            alert('Please enter a valid 10-digit mobile number');
            return;
        }

        // Add signup logic here
        alert('Signup successful');
        navigation.navigate('login');
    };

    const validateEmail = (email) => {
        // Basic email validation regex
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return regex.test(email);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View style={styles.design_container}>
                        <View style={styles.image_container}>
                            <Image source={require('../assets/images/login1.jpg')} style={styles.image} />
                        </View>
                    </View>

                    <View style={styles.felds_container}>
                        <Text style={styles.header}>Sign Up</Text>

                        <TextInput
                            style={[styles.input, isFocus1 && { borderWidth: 1, borderColor:colors.ThemeText }]}
                            placeholder="Username"
                            value={username}
                            onChangeText={setUsername}
                            onFocus={() => setIsFocus1(true)}
                            onBlur={() => setIsFocus1(false)}
                        />

                        <TextInput
                            style={[styles.input, isFocus2 && { borderWidth: 1, borderColor:colors.ThemeText }]}
                            placeholder="Email"
                            keyboardType="email-address"
                            value={email}
                            onChangeText={setEmail}
                            onFocus={() => setIsFocus2(true)}
                            onBlur={() => setIsFocus2(false)}
                        />

                        <TextInput
                            style={[styles.input, isFocus3 && { borderWidth: 1, borderColor: colors.ThemeText }]}
                            placeholder="Mobile Number"
                            keyboardType="numeric"
                            maxLength={10}
                            value={mobileNumber}
                            onChangeText={setMobileNumber}
                            onFocus={() => setIsFocus3(true)}
                            onBlur={() => setIsFocus3(false)}
                        />

                        <TouchableOpacity style={styles.button} onPress={handleSignup}>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableOpacity>
                        <View style={styles.note}>
                            <Pressable onPress={() => { navigation.navigate('login') }}>
                                <Text>Login!</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.ThemeBG,
    },
    design_container: {
        flex: 0.5,
        width: '100%',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        shadowColor: "black",
        elevation: 30,
    },
    image: {
        height: "100%",
        width: '100%',
        resizeMode: 'cover',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    felds_container: {
        flex: 0.5,
        width: "90%",
        paddingTop: 20,
        alignItems: 'center',
    },
    header: {
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 20,
        marginLeft: 40,
        color:colors.ThemeText,
        alignSelf: "flex-start"
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
        backgroundColor:colors.ThemeText,
        paddingVertical: 13,
        paddingHorizontal: 25,
        borderRadius: 6,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    note: {
        padding: 5,
        margin: 5,
        fontSize: 15,
        color: 'gray',
        fontWeight: '600',
    }
});

export default SignUp;
