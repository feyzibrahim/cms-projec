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
    { sub: "java", teacher: "neethu", key: "1", color: "#CDC7DA" },
    { sub: "coa", teacher: "alanta", key: "2", color: "#9A85C9" },
    { sub: "php", teacher: "sumesh", key: "3", color: "#A29AFF" },
    { sub: "se", teacher: "neethu", key: "4", color: "pink" },
  ]);

  return (
    <View>
      <FlatList
        data={subject}
        renderItem={({ item }) => (
          <View style={styles.subItem}>
            <View
              style={{
                backgroundColor: item.color,
                width: 300,
                padding: 30,
                marginBottom: 40,
                borderRadius: 20,
              }}
            >
              <TouchableOpacity>
                <Text>{item.sub}</Text>
                <Text>{item.teacher}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({});
