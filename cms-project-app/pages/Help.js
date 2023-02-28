import { useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Help() {
  return (
    <View>
      <View style={styles.helppage}>
        <Text style={styles.andcont}>Help</Text>
      </View>
      <View style={styles.phone}>
        <MaterialIcons name="phone" size={30} />
        <Text style={styles.contact}>Contact Us</Text>
      </View>
      <View>
        <Text style={styles.gmail}>e_campus123@gmail.com</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  helppage: {
    // backgroundColor: "#A38ED1",
    paddingVertical: 30,
  },
  andcont: {
    fontSize: 20,
    textAlign: "auto",
    marginLeft: 30,
  },
  contact: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 50,
  },
  gmail: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 50,
  },
  phone: {
    flexDirection: "row",
    marginLeft: 20,
  },
});
