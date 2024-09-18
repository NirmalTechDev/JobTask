import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import colors from '../helper/constant';
import { useToast } from 'react-native-toast-notifications';
const OTPScreen = ({ route, navigation }) => {
  const { mobileNumber } = route.params;
  const Toast = useToast();
  // const mobileNumber = '12345670987'
  const [otp, setOtp] = useState('');
  const [isFocus, setIsFocus] = useState(false);

  const handleVerifyOTP = () => {
    if (otp.length === 6) {
      // Logic to verify OTP
      Toast.show("OTP Verified Successfully!", {
        type:"success",
        placement: "bottom",
        duration: 1300,
        offset: 30,
        animationType: "slide-in",
      });
      navigation.navigate('home');
    } else {
      Toast.show("Please enter a valid 6-digit OTP", {
        type:"warning",
        placement: "bottom",
        duration: 1300,
        offset: 30,
        animationType: "slide-in",
      });
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
        style={[styles.input, isFocus && {borderWidth:1, borderColor:colors.ThemeText}]}
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
    backgroundColor: colors.ThemeBG,
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
  fontSize: 25,
  fontWeight: 'bold',
  marginBottom: 10,
  color:colors.ThemeText,
},
  subHeader: {
    fontSize: 16,
    marginBottom: 20,
    color: colors.ThemeText,
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
});

export default OTPScreen;
