// components/EmergencyTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EmergencyDoctor from './Emergency';
import ProfileScreen from './ProfileScreen';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import CustomTabBar from './CustomTabBar'; 
import About from './About';
import ChatDrScreen from './chatDr';
const Tab = createBottomTabNavigator();

const EmergencyTabs = () => {
  return (
<Tab.Navigator
  tabBar={(props) => <CustomTabBar {...props} />} 
  screenOptions={{
    headerShown: false,
  }}
>
  <Tab.Screen name="Home" component={EmergencyDoctor} />
  <Tab.Screen name="Docs" component={About} />
  <Tab.Screen name="Chat" component={ChatDrScreen} />
  <Tab.Screen name="Profile" component={ProfileScreen} />
</Tab.Navigator>

  );
};

export default EmergencyTabs;
