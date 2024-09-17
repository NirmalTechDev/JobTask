import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const OTPScreen = ({ route, navigation }) => {
  // const { mobileNumber } = route.params;
  const mobileNumber = '12345670987'
  const [otp, setOtp] = useState('');
  const [isFocus, setIsFocus] = useState(false);

  const handleVerifyOTP = () => {
    if (otp.length === 6) {
      // Logic to verify OTP
      alert('OTP Verified Successfully!');
      navigation.navigate('home');
    } else {
      alert('Please enter a valid 6-digit OTP');
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
      <Text style={styles.header}>Enter OTP</Text>
      <Text style={styles.subHeader}>OTP sent to {mobileNumber} </Text>

      <TextInput
        style={[styles.input, isFocus && {borderWidth:1, borderColor:'#6e00ff'}]}
        placeholder="Enter OTP"
        keyboardType="numeric"
        maxLength={6}
        value={otp}
        onChangeText={setOtp}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />

      <TouchableOpacity style={styles.button} onPress={handleVerifyOTP}>
        <Text style={styles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  design_container:{
    flex:0.6,
    width:'100%',
    backgroundColor:"#f0f0f0",
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
  fontSize: 25,
  fontWeight: 'bold',
  marginBottom: 10,
  color: '#6e00ff',
},
  subHeader: {
    fontSize: 16,
    marginBottom: 20,
    color: '#6e00ff',
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
    backgroundColor: '#6e00ff',
    paddingVertical: 13,
    paddingHorizontal: 25,
    borderRadius: 6,
},
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default OTPScreen;
