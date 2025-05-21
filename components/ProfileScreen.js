import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#F2F4F8' }}>
      <StatusBar barStyle="light-content" backgroundColor="#3AB4F2" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#666" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>

        <Text style={styles.setupTitle}>Set up your profile</Text>
        <Text style={styles.setupSubTitle}>
          Update your profile to connect your doctor with better impression.
        </Text>

        {/* Profile Image */}
        <View style={styles.imageContainer}>
          <Image source={require('../assets/images/Screen4Profile.png')} style={styles.profileImage} />
          <TouchableOpacity style={styles.cameraIcon}>
            <Ionicons name="camera" size={18} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Personal Information</Text>
      </View>

      {/* Personal Info Form */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput placeholder="Jan Kowalski" style={styles.input} />

        <Text style={styles.label}>Phone Number</Text>
        <TextInput placeholder="(555) 555-1234" keyboardType="phone-pad" style={styles.input} />

        <Text style={styles.label}>Date of Birth</Text>
        <TextInput placeholder="DD MM YYYY" style={styles.input} />

        <TouchableOpacity style={styles.continueBtn}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3AB4F2',
    paddingTop: 50,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 50,
    backgroundColor: 'white',
    borderRadius: 7,
    padding: 1
  },
  headerTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 16,
    
  },
  setupTitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
    marginBottom: 4,
  },
  setupSubTitle: {
    fontSize: 13,
    color: '#f1f1f1',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 18
  },
  imageContainer: {
    marginTop: 10,
    position: 'relative',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,

  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#3AB4F2',
    padding: 6,
    borderRadius: 16,
  },
  infoContainer: {
    paddingHorizontal: 20,
    padding: 16
  },
  infoText: {
    fontWeight: '600',
    fontSize: 18,
    color: '#333'
  },

  formContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  label: {
    fontWeight: '500',
    marginBottom: 6,
    color: '#555',
  },
  input: {
    backgroundColor: '#F5F5F5',
    padding: 14,
    borderRadius: 12,
    marginBottom: 16,
  },
  continueBtn: {
    backgroundColor: '#3AB4F2',
    padding: 16,
    width: '80%',
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'center'
  },
  continueText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
