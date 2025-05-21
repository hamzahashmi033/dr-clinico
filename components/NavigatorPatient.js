import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatScreen from './ChatScreen';
import ProfileScreen from './ProfileScreen';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import CustomTabBar from './CustomTabBar'; 
import Prescription from './PrescriptionScreen';
import HomePage from './HomePage';
const Tab = createBottomTabNavigator();

const PatientTabs = () => {
  return (
<Tab.Navigator
  tabBar={(props) => <CustomTabBar {...props} />} 
  screenOptions={{
    headerShown: false,
  }}
>
  <Tab.Screen name="Home" component={HomePage} />
  <Tab.Screen name="Docs" component={Prescription} />
  <Tab.Screen name="Emergency" component={HomePage} />
  <Tab.Screen name="Chat" component={ChatScreen} />
  <Tab.Screen name="Profile" component={ProfileScreen} />
</Tab.Navigator>

  );
};

export default PatientTabs;
