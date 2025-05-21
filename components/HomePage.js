import react from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  Pressable,
} from "react-native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
// import { NavigationContainer } from "@react-navigation/native";

// import AppNavigator from "./BottomNavigator";
export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>
          Pellentesque placerat arcu in risus facilisis, sed laoreet eros
          laoreet
        </Text>
        <Ionicons
          name="notifications-outline"
          size={24}
          color="gray"
          style={styles.notificationIcon}
        />
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/mainImg.jpg")}
          style={styles.image}
        />
        <TouchableOpacity style={styles.donateButton}>
          <Text style={styles.donateText}>Donate</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <Pressable onPress={() => navigation.navigate("InstantDoctor")}>
            <FontAwesome name="user-md" size={30} color="black" style={styles.icon} />
            <Text style={styles.cardTitle}>Instant Doctor</Text>
            <Text style={styles.cardSubtitle}>
              GP, Psychologists & Nutritionists
            </Text>
          </Pressable>
        </View>
        <View style={styles.card}>
          <Pressable onPress={() => navigation.navigate("BookAppoinment")}>
            <FontAwesome name="stethoscope" size={30} color="black" style={styles.icon} />
            <Text style={styles.cardTitle} numberOfLines={1}
            >Book Appointment</Text>
            <Text style={styles.cardSubtitle}>
              Book a doctor for your consultation
            </Text>
          </Pressable>
        </View>
      </View>

      {/* <AppNavigator /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFF",
    paddingTop: 30,
    paddingTop: 50,
    paddingHorizontal: 26,
  },
  header: { marginTop: 15 },
  title: { fontSize: 28, fontWeight: "600" },
  subtitle: { color: "gray", marginTop: 10 },
  notificationIcon: { position: "absolute", top: 5, right: 0 },
  imageContainer: { position: "relative", marginTop: 20, marginBottom: 40 },
  image: { width: "100%", height: 200, borderRadius: 10 },
  donateButton: {
    position: "absolute",
    bottom: 12,
    right: 12,
    backgroundColor: "#2FC1FF",
    padding: 10,
    borderRadius: 5,
  },
  donateText: { color: "white", fontWeight: "bold" },
  cardsContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems:"center",
  },
  icon: {
    alignSelf: 'center'
  },
  card: {
    width: "80%",
    backgroundColor: "white",
    padding: 18,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    // **Shadow for Depth Effect**
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "400",
    color: "#2FC1FF",
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',


  },
  cardSubtitle: {
    fontSize: 12,
    fontWeight: "400",
    color: "gray",
    textAlign: "center",
  },
});
