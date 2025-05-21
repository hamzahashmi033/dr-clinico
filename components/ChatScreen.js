import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const chatData = [
  {
    id: '1',
    name: 'Dr. Floyd Miles',
    specialization: 'Pediatrics',
    message: 'Vivamus varius odio non dui gravida...',
    time: '9:12',
    unread: 1,
    image: require('../assets/images/Screen5Doc1.jpg'),
    active: true,
  },
  {
    id: '2',
    name: 'Dr. Guy Hawkins',
    specialization: 'Dentist',
    message: 'Suspendisse efficitur orci eget nisl euismod...',
    time: '8:01',
    unread: 3,
    image: require('../assets/images/Screen5Doc2.jpg'),
    active: false,
  },
];

const ChatScreen = () => {
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
      <Text style={styles.title}>Chat</Text>
      </View>

      {/* Chat List */}
      <FlatList
        data={chatData}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 10 }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.chatCard}>
            <Image source={item.image} style={styles.avatar} />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <View style={styles.nameRow}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>
              <Text style={styles.specialization}>{item.specialization}</Text>
              <View style={styles.messageRow}>
                <Text style={styles.message} numberOfLines={1}>{item.message}</Text>
                {item.unread > 0 && (
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>{item.unread}</Text>
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>
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
  chatCard: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 14,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  time: {
    color: '#999',
    fontSize: 12,
  },
  specialization: {
    color: '#38C976',
    fontSize: 13,
    marginVertical: 2,
  },
  messageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  message: {
    color: '#888',
    flex: 1,
    fontSize: 13,
  },
  badge: {
    backgroundColor: '#FF5A5F',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 12,
    marginLeft: 8,
  },
  badgeText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '600',
  },
});

export default ChatScreen;
