import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  CheckBox, // or use from react-native-paper or expo-checkbox
  Platform,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SignUpDocScreen({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/images/Logo.png")}
          style={styles.logo}
          // resizeMode="contain"
        />

        <Text style={styles.title}>Sign Up</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          placeholder="Jan Kowalski"
          placeholderTextColor="#ccc"
          style={styles.input}
        />

        {/* Email */}
        <Text style={styles.label}>Email</Text>

        <TextInput
          placeholder="patient@self.com"
          placeholderTextColor="#ccc"
          style={styles.input}
          keyboardType="email-address"
        />

        {/* Phone */}
        <Text style={styles.label}>Phone Number</Text>

        <TextInput
          placeholder="(555) 555-1234"
          placeholderTextColor="#ccc"
          style={styles.input}
          keyboardType="phone-pad"
        />
        <Text style={styles.label}>Doctor Specialization</Text>

        <TextInput
          placeholder="Cardiologist"
          placeholderTextColor="#ccc"
          style={styles.input}
        />

        {/* Password */}
        <Text style={styles.label}>Password</Text>

        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
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

      
        
      </View>
      {/* Sign Up Button */}
      <View style={styles.bottom}>
        <Pressable
          style={styles.signUpButton}
          onPress={() => navigation.navigate("OTP")}
        >
          <Text style={styles.signUpText}>Sign Up</Text>
        </Pressable>

        <Text style={styles.footerText}>
          Already have account?{" "}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("SignIn")}
          >
            Sign In
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
    paddingHorizontal: 30,
    //   justifyContent: 'center',
  },

  bottom: {
    marginTop: 10,
  },
  header: {
    marginTop: 20,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 28,
  },
  label: {
    fontSize: 14,
    color: "#777",
    marginBottom: 6,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 28,
    color: "#000",
  },
  input: {
    backgroundColor: "#F3F3F3",
    borderRadius: 10,
    padding: 14,
    marginBottom: 18,
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
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 14,
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 13,
    color: "#333",
  },
  link: {
    color: "#2DB5FF",
    fontWeight: "500",
  },
  signUpButton: {
    backgroundColor: "#2FC1FF",
    borderRadius: 20,
    paddingVertical: 18,
    alignItems: "center",
    width: "65%",
    alignSelf: "center",
  },
  signUpText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  footerText: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 13,
    color: "#666",
  },
});
