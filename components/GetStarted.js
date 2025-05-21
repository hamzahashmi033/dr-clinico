import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  Pressable,
  Dimensions
} from 'react-native';
import { StatusBar } from 'react-native';


export default function GetStarted({ navigation }) {
  return (
    
    <View style={styles.container}>
      
      <StatusBar barStyle="dark-content" backgroundColor="#3AB4F2" />

      <View style={styles.topSection}>
        <Image source={require('../assets/images/dr.jpg')} style={styles.doctor} resizeMode="contain" />
      </View>


      <View style={styles.bottomSection}>
        <Text style={styles.title}>Manage your health and{"\n"}happy future</Text>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Home1')}>
          <Text style={styles.buttonText}>Get started</Text>
        </Pressable>
      </View>
    </View>

  );
}
const styles = StyleSheet.create({
  topSection: {
    
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    // borderBottomLeftRadius: 40,
    // borderBottomRightRadius: 40,
    // overflow: 'hidden',
    // paddingTop: 60,
    // backgroundColor:'blue'
    // objectFit:'cover'
  },
  doctor: {
    width: Dimensions.get("screen").width,
    // height: '105%',
  },

  
  container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    topBackground: {
      height: '65%',
      width: '100%',
      alignItems: 'center',
    //   paddingTop: 20,
      position: 'relative',
    //   objectFit:'cover'
    },
    // logo: {
    //   fontSize: 20,
    //   fontWeight: 'bold',
    //   color: '#fff',
    //   marginTop: 10,
    // },
    // doctorImage: {
    //   width: 280,
    //   height: 420,
    //   position: 'absolute',
    //   bottom: -10,
    // },
    bottomSection: {
      flex: 1,
      backgroundColor: '#fff',
      // borderTopLeftRadius: 40,
      // borderTopRightRadius: 40,
      alignItems: 'center',
      padding: 24,
      paddingTop: 50,
    },
    title: {
      fontSize: 20,
      textAlign: 'center',
      fontWeight: '600',
      marginBottom: 30,
      color: '#000',
    },
    button: {
      backgroundColor: '#2DB5FF',
      paddingHorizontal: 32,
      paddingVertical: 12,
      borderRadius: 20,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });
  