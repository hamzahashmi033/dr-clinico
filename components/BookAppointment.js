import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'react-native';

const popularDoctors = [
  {
    id: '1',
    name: 'Dr. Truluck Nik',
    specialization: 'Medicine Specialist',
    status: 'active',
    image: require('../assets/images/Screen3DrTruluck.jpg'),
  },
  {
    id: '2',
    name: 'Dr. Tranquilli',
    specialization: 'Pathology Specialist',
    status: 'non active',
    image: require('../assets/images/Screen3DrTranquilli.jpg'),
  },
  {
    id: '3',
    name: 'Dr. Truluck Nik',
    specialization: 'Medicine Specialist',
    status: 'active',
    image: require('../assets/images/Screen3DrTruluck.jpg'),
  },
];

const categoryDoctors = [
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
];

const StatusBadge = ({ status }) => {
  const isActive = status === 'active';
  return (
    <View style={[styles.statusBadge, { backgroundColor: isActive ? '#DFFFE2' : '#FFF5D1' }]}>
      <Text style={{ color: isActive ? '#27AE60' : '#F4B400', fontSize: 12 }}>{status}</Text>
    </View>
  );
};



const BookAppointment = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#3AB4F2" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userRow}>
          <Image source={require('../assets/images/mainScreen2.jpg')} style={styles.profilePic} />
          <View style={styles.content}> 
            <Text style={styles.helloText}>Hello, Welcome</Text>
            <Text style={styles.nameText}>Mark</Text>
            <Ionicons name="notifications-outline" size={24} color="white" style={styles.notificationIcon} />
          </View>
        </View>
        <View style={styles.search}>
        <TextInput style={styles.searchBar} placeholder="Search Doctor..." placeholderTextColor="#fff" />
        <Ionicons name="search-outline" size={24} color="white" style={styles.searchicon}/>        
        </View>
      </View>

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 20 }}>
        {/* Popular Doctors */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Popular Doctor</Text>
            <Text style={styles.seeAll}>See all </Text>
          </View>

          <FlatList
            data={popularDoctors}
            horizontal
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 12 }}
            renderItem={({ item }) => (
              <View style={styles.popularCard}>
                <Image source={item.image} style={styles.popularImage} />
                <Text style={styles.cardName}>{item.name}</Text>
                <Text style={styles.cardSpecial}>{item.specialization}</Text>
                <StatusBadge status={item.status} />
              </View>
            )}
          />
        </View>

        {/* Category Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Category</Text>
          {categoryDoctors.map((doc) => (
            <View key={doc.id} style={styles.categoryCard}>
              <Image source={doc.image} style={styles.categoryImage} />
              <View style={{ flex: 1 }}>
                <Text style={styles.cardName}>{doc.name}</Text>
                <Text style={styles.cardSpecial}>{doc.specialization}</Text>
                <StatusBadge status={doc.status} />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#F2F4F8'
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
        paddingHorizontal:16,
    },
    content: {
        width:'100%',
        display:'flex',
        justifyContent:'space-between'
    
    
      },
      profilePic: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 12,
      },
      helloText: {
        color: '#fff',
        fontSize: 14,
      },
      nameText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      },
      notificationIcon: { 
        position: 'absolute', 
        top: 5,
        marginLeft:230
    },
      search:{
        paddingHorizontal:26,
        width:'85%',
        borderWidth: 2,
        borderColor: '#0099FF',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 12,
        height:55,
        padding:14,
        marginLeft:20,
        
      },
      searchBar:{
        marginLeft:9
      },
      searchicon: {
        position:'absolute',
        top:6,
        padding:4,
      },
  section: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    marginBottom: 12,
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom:20
  },
  seeAll: {
    fontSize: 14,
    color: '#3AB4F2',
  },
  popularCard: {
    backgroundColor: '#fff',
    width: 150,
    borderRadius: 12,
    padding: 10,
    elevation: 2,
    // height:200
  },
  popularImage: {
    width: '100%',
    height: 100,
    borderRadius: 12,
    marginBottom: 8,
  },
  cardName: {
    fontSize: 14,
    fontWeight: '600',
  },
  cardSpecial: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },

  categoryCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
    height:100,
    
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 12,
  },
});

export default BookAppointment;
