import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";

export default function SignInScreen({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  // const navigation = useNavigation();
  const naviagteHandler = () => {
    // console.log("called");
    // navigation.navigate("bottomNavi")

  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/images/Logo.png")}
          style={styles.logo}
        // resizeMode="contain"
        />

        <Text style={styles.title}>Sign In</Text>
      </View>

      <View style={styles.fields}>
        
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="patient@self.com"
          placeholderTextColor="#ccc"
          style={styles.input}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Min 8 cyfr"
            placeholderTextColor="#ccc"
            secureTextEntry={!passwordVisible}
            style={styles.passwordInput}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Ionicons
              name={passwordVisible ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="#888"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={{ alignSelf: "flex-end", marginBottom: 20 }}>
          <Text style={styles.forgotText}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <Pressable
          style={styles.signInButton}
          onPress={() => naviagteHandler()}
        >
          <Text style={styles.signInText}>Sign In</Text>
        </Pressable>

        <Text style={styles.signupText}>
          Don’t have an account?{" "}
          <Text
            style={styles.signupLink}
            onPress={() => {
              navigation.navigate("PatientSignUp");
            }}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //   justifyContent: 'center',
    paddingHorizontal: 30,
    justifyContent: "center"
  },

  bottom: {
    marginTop: 0,
  },

  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",

  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 12,
    color: "#000",
  },
  fields: { marginTop: 20 },
  label: {
    fontSize: 14,
    color: "#777",
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#F3F3F3",
    borderRadius: 10,
    padding: 14,
    marginBottom: 20,
    fontSize: 14,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F3F3",
    borderRadius: 10,
    paddingHorizontal: 14,
    marginBottom: 10,
   
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 14,
    fontSize: 14,
  },
  forgotText: {
    color: "#2DB5FF",
    fontSize: 13,
  },
  signInButton: {
    backgroundColor: "#2FC1FF",
    borderRadius: 20,
    paddingVertical: 18,
    alignItems: "center",
    width: "65%",
    alignSelf: "center",
  },
  signInText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  signupText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 13,
    color: "#666",
  },
  signupLink: {
    color: "#2DB5FF",
    fontWeight: "500",
  },
});
