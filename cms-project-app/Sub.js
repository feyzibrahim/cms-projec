import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
// import Subject from "./Subject";

export default function Sub() {
  const [subject, setSubjects] = useState([
    { sub: "java", teacher: "neethu", key: "1" },
    { sub: "coa", teacher: "alanta", key: "2" },
    { sub: "php", teacher: "sumesh", key: "3" },
    { sub: "se", teacher: "neethu", key: "4" },
  ]);

  return (
    <View>
      <FlatList
        data={subject}
        renderItem={({ item }) => (
          <View style={styles.subItem}>
            <TouchableOpacity>
              <Text>{item.sub}</Text>
              <Text>{item.teacher}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
      subItem: {
        backgroundColor: '#999',
        padding:30,
        margin: 50,
      }
  });