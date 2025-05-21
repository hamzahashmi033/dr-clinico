import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const prescriptionData = [
    {
      id: '1',
      doctor: 'Dr. Floyd Miles',
      specialization: 'Pediatrics',
      avatar: require('../assets/images/Screen5Doc2.jpg'),
      date: '10 Nov–20 Nov',
      prescriptions: [
        { name: 'PLENAXIS', qty: '2x', time: '10 am' },
        { name: 'ABLAVAR', qty: '1x', time: '10 am' },
        { name: 'ABSORICA LD', qty: '1x', time: '08 pm' },
      ],
      selected: true,
    },
    {
      id: '2',
      doctor: 'Dr. Floyd Miles',
      specialization: 'Pediatrics',
      avatar: require('../assets/images/Screen5Doc2.jpg'),
      date: '10 Oct–20 Oct',
      prescriptions: [
        { name: 'PLENAXIS', qty: '2x', time: '10 am' },
        { name: 'ABLAVAR', qty: '1x', time: '10 am' },
        { name: 'ABSORICA LD', qty: '1x', time: '08 pm' },
      ],
      selected: false,
    },
    {
        id: '3',
        doctor: 'Dr. Floyd Miles',
        specialization: 'Pediatrics',
        avatar: require('../assets/images/Screen5Doc2.jpg'),
        date: '10 Oct–20 Oct',
        prescriptions: [
          { name: 'PLENAXIS', qty: '2x', time: '10 am' },
          { name: 'ABLAVAR', qty: '1x', time: '10 am' },
          { name: 'ABSORICA LD', qty: '1x', time: '08 pm' },
        ],
        selected: false,
      },
  ];

const Prescription = () => {
  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.header}>
        <TouchableOpacity>
            
          <Text style={styles.backText}>‹ Back</Text>
        </TouchableOpacity>
        <Ionicons name="notifications-outline" size={22} color="#A4A4A4" />
      </View>
      <View style={styles.titleSection}>
      <Text style={styles.title}>Prescription</Text>
      </View>

      <FlatList
        data={prescriptionData}
        keyExtractor={item => item.id}
        contentContainerStyle={{ padding: 20 }}
        renderItem={({ item }) => (
          <View style={[styles.card, item.selected ]}>
            <View style={styles.topRow}>
              <Image source={item.avatar} style={styles.avatar} />
              <View style={{ marginLeft: 10, flex: 1 }}>
                <Text style={styles.doctorName}>{item.doctor}</Text>
                <Text style={styles.specialization}>{item.specialization}</Text>
              </View>
              <Text style={styles.date}>{item.date}</Text>
            </View>
            <View style={styles.meds}>
              {item.prescriptions.map((med, idx) => (
                <View style={styles.medRow} key={idx}>
                  <Text style={styles.medName}>
                    {med.name} – {med.qty}
                  </Text>
                  <Text style={styles.medTime}>{med.time}</Text>
                </View>
              ))}
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F8',
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: '#F2F4F8',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backText: {
    fontSize: 16,
    fontWeight: '500',
  },
  titleSection:{
    paddingHorizontal:'16',
    marginTop:10,
    marginBottom:10
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginLeft: 10,
    fontSize:28
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 14,
    marginBottom: 15,
  },
 
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: { width: 40, height: 40, borderRadius: 20 },
  doctorName: { fontWeight: 'bold', fontSize: 15 },
  specialization: { fontSize: 13, color: '#38C976' },
  date: { fontSize: 12, color: '#555' },
  meds: {
    marginTop: 10,
  },
  medRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  medName: {
    color: '#222',
    fontSize: 13,
  },
  medTime: {
    fontSize: 13,
    color: '#999',
  },
 
});

export default Prescription;
