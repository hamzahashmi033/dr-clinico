import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { API } from "../utils/data-service";

export default function SignUpScreen({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    // if (!name || !email || !phone || !password) {
    //   Alert.alert("Error", "Please fill in all fields");
    //   return;
    // }

    // try {
    //   const response = await fetch(`${API}/api/auth/register-paitent`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ name, email, phone, password }),
    //   });

    //   const data = await response.json();
      
    //   if (response.ok) {
    //     Alert.alert("Success", "OTP sent to your email");
    //     navigation.replace("OTP", { email }); // Pass email to OTP screen
    //   } else {
    //     Alert.alert("Error", data.message || "Something went wrong");
    //   }
    // } catch (error) {
    //   console.error(error);
    //   Alert.alert("Error", "Failed to connect to the server");
    // }
    navigation.navigate("OTP")
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/images/Logo.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Sign Up</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          placeholder="Jan Kowalski"
          placeholderTextColor="#ccc"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="patient@self.com"
          placeholderTextColor="#ccc"
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          placeholder="(555) 555-1234"
          placeholderTextColor="#ccc"
          style={styles.input}
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />

        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="min 8 characters"
            placeholderTextColor="#ccc"
            secureTextEntry={!passwordVisible}
            style={styles.passwordInput}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
            <Ionicons
              name={passwordVisible ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="#888"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.checkboxContainer}>
          <Text style={styles.checkboxText}>
            I agree with Terms and{" "}
            <Text style={styles.link}>Privacy Policy</Text>
          </Text>
        </View>
      </View>

      <View style={styles.bottom}>
        <Pressable style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </Pressable>

        <Text style={styles.footerText}>
          Already have an account?{" "}
          <Text style={styles.link} onPress={() => navigation.navigate("SignIn")}>
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
  },
  bottom: {
    marginTop: 20,
  },
  header: {
    marginTop: 50,
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
  inputContainer: {
    marginTop: 10,
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
    marginTop: 20,
    fontSize: 13,
    color: "#666",
  },
});
