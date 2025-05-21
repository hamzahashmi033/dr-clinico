// components/CustomTabBar.js
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        // Icons for each route
        const getIcon = () => {
          switch (route.name) {
            case 'Home':
              return <Ionicons name="home-outline" size={24} color={isFocused ? '#00BFFF' : '#ccc'} />;
            case 'Docs':
              return <Ionicons name="document-text-outline" size={24} color={isFocused ? '#00BFFF' : '#ccc'} />;
            case 'Emergency':
              return (
                <MaterialCommunityIcons name="dots-grid" size={28} color="#fff" />
              );
            case 'Chat':
              return <Ionicons name="chatbubble-ellipses-outline" size={24} color={isFocused ? '#00BFFF' : '#ccc'} />;
            case 'Profile':
              return <FontAwesome name="user-o" size={24} color={isFocused ? '#00BFFF' : '#ccc'} />;
            default:
              return null;
          }
        };

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const isCenter = route.name === 'Emergency';

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            onPress={onPress}
            style={isCenter ? styles.centerTab : styles.tab}
          >
            <View style={isCenter ? styles.centerIconContainer : null}>
              {getIcon()}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  centerTab: {
    top: -25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00BFFF',
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  centerIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomTabBar;
