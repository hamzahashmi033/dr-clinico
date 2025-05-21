import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Pressable } from 'react-native';


const OtpScreen = ({route,navigation}) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = useRef([]);
  const email = route.params?.email
  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputs.current[index + 1]?.focus();
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Image
        source={require('../assets/images/Logo.png')}
        style={styles.logo}
      />

      <Text style={styles.title}>Your Code</Text>
      <Text style={styles.subtitle}>Code sent to your Email</Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputs.current[index] = ref)}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(value) => handleOtpChange(index, value)}
          />
        ))}
      </View>

      <Text style={styles.timer}>
        (2:10) Resend Code?{' '}
        <Text style={styles.clickHere}>Click here</Text>
      </Text>

      <Pressable style={styles.verifyButton}
      onPress={() => {navigation.navigate('PatientHome')}}
      >
        <Text style={styles.verifyText}>Verify</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#Fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logo: {
    height: 100,
    resizeMode: 'contain',
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 30,

  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 30,
    marginTop: 5,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    marginBottom: 20,
  },
  otpInput: {
    width: 55,
    height: 55,
    borderRadius: 10,
    backgroundColor: '#F3F4F6',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '600',
  },
  timer: {
    color: '#6B7280',
    fontSize: 13,
    marginBottom: 30,
  },
  clickHere: {
    color: '#0EA5E9',
    textDecorationLine: 'underline',
  },
  verifyButton: {
    backgroundColor: '#3AB4F2',
    paddingVertical: 14,
    paddingHorizontal: 80,
    borderRadius: 10,
  },
  verifyText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default OtpScreen;
