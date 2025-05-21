import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, StatusBar,Dimensions } from 'react-native';


const LoadingScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Get Started");
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);
   
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Text style={styles.title}>DrClinic</Text>
      <Image
        source={require('../assets/images/Logo.png')} 
        style={styles.logo}
      />
      <Text style={styles.loading}>Loading...</Text>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        fontSize: 22,
        fontWeight: '600',
        color: '#000',
        marginBottom: 20,

      },
      logo: {
        width: 180,
        height: 80,
        
        
      },
      loading: {
        position: 'absolute',
        bottom: 100,
        fontSize: 14,
        color: '#888',
      },

})

export default LoadingScreen;