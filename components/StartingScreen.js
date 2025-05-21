import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar, Pressable } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons'; 

const StartingScreen = ({ navigation }) => {
  const [selectedRole, setSelectedRole] = useState(null);

  const options = [
    {
      id: 'patient',
      label: "I'm a patient",
      description: 'Proin convallis libero ac nisl',
      icon: require('../assets/icons/icons-02.png'),
    },
    {
      id: 'doctor',
      label: "I'm a doctor",
      description: 'Proin convallis libero ac nisl',
      icon: require('../assets/icons/icons-03.png'),
    },
    {
      id: 'emergency',
      label: 'Emergency',
      description: 'Proin convallis libero ac nisl',
      icon: require('../assets/icons/icons-1.png'),
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f9fafa" />

      <Image
        source={require('../assets/images/Logo.png')}
        style={styles.logo}
      />

      <Text style={styles.title}>Let's get acquainted</Text>
      <Text style={styles.subtitle}>
        Pellentesque placerat arcu in risus facilisis, sed laoreet eros laoreet.
      </Text>

      {options.map((option) => (
        <Pressable
          key={option.id}
          style={[
            styles.optionContainer,
            selectedRole === option.id && styles.selectedOption,
          ]}
          onPress={() => setSelectedRole(option.id)}
        >
          <Image source={option.icon}  style={styles.icon} />
          <View>
            <Text style={styles.optionTitle}>{option.label}</Text>
            <Text style={styles.optionDescription}>{option.description}</Text>
          </View>
        </Pressable>
      ))}
      <Pressable
  style={styles.button}
  onPress={() => {
    if (selectedRole === 'patient') {
      navigation.navigate('PatientSignUp');
    } else if (selectedRole === 'doctor') {
      navigation.navigate('DoctorSignUp');
    } else if (selectedRole === 'emergency') {
      navigation.navigate('Home')
    }
  }}
  disabled={!selectedRole}
>
  <Text style={styles.buttonText}>Continue</Text>
</Pressable>

      



    </View>
  );
};

export default StartingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 34,
    paddingTop: 50,

  },
  logo: {
    width: 80,
    height: 50,
    alignSelf: 'center',
    marginBottom: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    marginBottom: 60,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#f0f0f0',

  },
  selectedOption: {
    borderColor: '#2FC1FF',
    backgroundColor: '#e8f7ff',
    
  },
  icon: {
    marginRight: 16,
    marginTop: 5,
    height:40,
    width:30,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  optionDescription: {
    fontSize: 13,
    color: '#999',
    marginTop: 18,
  },
  button: {
    backgroundColor: '#00AEEF',
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 30,
    alignItems: 'center',
    opacity: 1,
    width:'75%',
    alignSelf:'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
