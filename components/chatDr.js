import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

export default function ChatDrScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" translucent={false} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.back}>
          <Ionicons name="chevron-back-outline" size={24} color="black" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <View style={styles.profileRow}>
          <Image
            source={require("../assets/images/AboutDr.png")}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.doctorName}>Dr. Elia Ana</Text>
            <Text style={styles.activeStatus}>● Active</Text>
          </View>
        </View>
      </View>

      {/* Messages */}
      <ScrollView contentContainerStyle={styles.chatArea}></ScrollView>

      {/* Input Area */}
      <View style={styles.inputArea}>
        <TextInput style={styles.input} placeholder="Write a message" />
        <TouchableOpacity>
          <Text style={styles.sendButton}>📤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
  },

  header: {
    backgroundColor: "#f1f5f9",
    backgroundColor: "#fff",
    padding:15
    
  },
  back: {
    flexDirection: "row",
  },
  backText: {
    fontSize: 16,
    fontWeight: "600",
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 20,
    marginLeft: 8,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 10,
    marginRight: 6,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  activeStatus: {
    fontSize: 12,
    color: "#22c55e",
    top: 4,
  },

  chatArea: {
    padding: 16,
    paddingBottom: 80,
  },
  inputArea: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderColor: "#eee",
    position: "relative",
    bottom: 10,
    width: "100%",
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 20,
    fontSize: 16,
    marginRight: 10,
  },
  sendButton: {
    fontSize: 24,
    color: "#3b82f6",
  },
});
