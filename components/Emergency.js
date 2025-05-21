import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'react-native';
// import AppNavigator from './BottomNavigator';

const doctors = [
  {
    id: '1',
    name: 'Dr. Pediatrician',
    specialization: 'Specialist Cardiologist',
    status: 'active',
    image: require('../assets/images/Doc1.jpg'),
  },
  {
    id: '2',
    name: 'Dr. Friska',
    specialization: 'Specialist Cardiologist',
    status: 'active',
    image: require('../assets/images/Doc2.png'),
  },
  {
    id: '3',
    name: 'Dr. Berlin',
    specialization: 'Specialist Cardiologist',
    status: 'active',
    image: require('../assets/images/Doc3.png'),
  },

];

<StatusBar barStyle="light-content" backgroundColor="#3AB4F2" />


const DoctorCard = ({ doctor, isSelected, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, isSelected && styles.selectedCard]}>
      <Image source={doctor.image} style={styles.image} />
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{doctor.name}</Text>
        <Text style={styles.specialization}>{doctor.specialization}</Text>
        <View style={styles.statusBox}>
          <Text style={styles.statusText}>{doctor.status}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const EmergencyDoctor = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null);

  return (

    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#3AB4F2" />
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userRow}>
          <Image source={require('../assets/images/mainScreen2.jpg')} style={styles.profilePic} />
          <View style={styles.content}>
            <Text style={styles.helloText}>Hello, Welcome</Text>
            <Text style={styles.nameText}>Anonymus</Text>
            {/* <Ionicons name="notifications-outline" size={24} color="white" style={styles.notificationIcon} /> */}
          </View>
        </View>
        <View style={styles.search}>
          <TextInput style={styles.searchBar} placeholder="Search Doctor..." placeholderTextColor="#fff" />
          <Ionicons name="search-outline" size={24} color="white" style={styles.searchicon} />
        </View>
      </View>

      {/* Doctor List */}
      <View style={styles.cardContainer}>
        <FlatList
          data={doctors}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ padding: 16 }}
          renderItem={({ item }) => (
            <DoctorCard
              doctor={item}
              isSelected={selectedId === item.id}
              onPress={() => navigation.navigate('About')}
            // onPress={() => setSelectedId(item.id)}
            />
          )}
        />
      </View>
      {/* <AppNavigator/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F8',
  },
  header: {
    backgroundColor: '#3AB4F2',
    padding: 20,
    paddingBottom: 40,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 40,
    paddingHorizontal: 16,
  },
  content: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'


  },
  profilePic: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  helloText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 4
  },
  nameText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  notificationIcon: {
    position: 'absolute',
    top: 5,
    marginLeft: 230
  },
  search: {
    paddingHorizontal: 16,
    borderWidth: 2,
    borderColor: '#0099FF',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 12,
    alignItems: "center",
    flexDirection: "row-reverse"
  },
  searchBar: {
    color: "white",
    fontSize: 14,
    width: "90%"
  },
  searchicon: {

  },
  cardContainer: {
    paddingHorizontal: '12',
    marginTop: '40'
  },

  card: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
    elevation: 3,
    height: 110
  },
  selectedCard: {
    // borderWidth: 2,
    // borderColor: '#0099FF',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  specialization: {
    fontSize: 13,
    color: '#555',
    marginVertical: 4,
  },
  statusBox: {
    backgroundColor: '#DFFFE2',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  statusText: {
    color: '#27AE60',
    fontSize: 12,
  },
});

export default EmergencyDoctor;
