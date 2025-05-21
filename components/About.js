import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { StatusBar } from 'expo-status-bar';
export default function About({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="dark" translucent={false} />
      <View style= {styles.header}>
        <Ionicons name="chevron-back-outline" size={24} color="black" style={styles.headericon}/>        
      <Text style={styles.headerText}>Doctor Specialization</Text>
      </View>
      {/* Doctor Card */}
      <View style={styles.card}>
        <Image
        source={require('../assets/images/AboutDr.png')}
        style={styles.image}
        />
        <View style={styles.cardRow}>
          <View>
            <Text style={styles.doctorName}>Dr. Elia Ana</Text>
            <Text style={styles.speciality}>Cardiologists</Text>
          </View>
          <Text style={styles.active}>active</Text>
        </View>
      </View>

      {/* About Section */}
      <View style={styles.aboutSection}>
        <Text style={styles.aboutTitle}>About Me</Text>
        <Text style={styles.aboutText}>
          Dr. Carly Angel is the top most immunologists specialist in Crist Hospital in London, UK. She achived several awards for her wonderful contribution{' '}
          <Text style={styles.readMore}>Read More. . .</Text>
        </Text>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button}
      onPress={() => navigation.navigate('ChatwithDoc')}>
        <Text style={styles.buttonText}>Start Chat</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    paddingHorizontal:25,
  },
  header:{
    flexDirection: 'row',
    justifyContent:"center",
    position:"relative"
  },
  headericon:{
    position:"absolute",
    left:0
  },
  headerText: {
    fontSize: 18,
    fontWeight: '700',
  },
  card: {
    backgroundColor: '#fff',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 4,
    // padding: 16,
    marginTop:30
  },
  image: {
    height: '200',
    width: '100%',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    marginBottom: 2,
    
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding:12
  },
  doctorName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom:6
  },
  speciality: {
    fontSize: 14,
    color: '#777',
    
    
  },
  active: {
    color: '#22c55e',
    fontSize: 14,
    fontWeight: '500',
    
  },
  aboutSection: {
    marginTop: 54,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 14,
    color: '#777',
    lineHeight:20
  },
  readMore: {
    color: '#3b82f6',
    fontWeight: '500',
  },
  button: {
    marginTop: 52,
    backgroundColor: '#2FC1FF',
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
    padding:9

  },
});
