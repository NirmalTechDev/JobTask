import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  ActivityIndicator,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';

const LoginScreen = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendOTP = () => {
    setLoading(true);
    // Your OTP sending logic goes here
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.fields_container}>
            <Text style={styles.header}>LogIn</Text>

            <TextInput
              style={[
                styles.input,
                mobileNumber.length && { borderColor: '#007AFF' }
              ]}
              placeholder="Name"
              placeholderTextColor="#888"
              maxLength={13}
              value={mobileNumber}
              onChangeText={setMobileNumber}
            />

            <TextInput
              style={[
                styles.input,
                mobileNumber.length && { borderColor: '#007AFF' }
              ]}
              placeholder="Email"
              placeholderTextColor="#888"
              keyboardType="email-address"
              value={mobileNumber}
              onChangeText={setMobileNumber}
            />

            <TextInput
              style={[
                styles.input,
                mobileNumber.length && { borderColor: '#007AFF' }
              ]}
              placeholder="Password"
              placeholderTextColor="#888"
              secureTextEntry
              value={mobileNumber}
              onChangeText={setMobileNumber}
            />

            <TextInput
              style={[
                styles.input,
                mobileNumber.length && { borderColor: '#007AFF' }
              ]}
              placeholder="Mobile Number"
              placeholderTextColor="#888"
              keyboardType="numeric"
              maxLength={13}
              value={mobileNumber}
              onChangeText={setMobileNumber}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={handleSendOTP}
            >
              {
                loading ? <ActivityIndicator style={styles.loader} size={20} color="#fff" /> :
                  <Text style={styles.buttonText}>Send OTP</Text>
              }
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  fields_container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    height: 50,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loader: {
    paddingHorizontal: 10,
  },
});

export default LoginScreen;
