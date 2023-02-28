import { useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Logout() {
  return (
    <View>
      <View style={styles.loged}>
        <Text style={styles.logedin}>Log Out</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  loged: {
    // backgroundColor: "#A38ED1",
    paddingVertical: 30,
  },
  logedin: {
    fontSize: 20,
    textAlign: "center",
  },
});
