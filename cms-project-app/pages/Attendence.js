import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  Dimensions,
} from "react-native";
import { TouchableRipple } from "react-native-paper";

import { useState } from "react";

export default function Attendence() {
  const date = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();

  const [attendence, setttAttendence] = useState([
    { name: "Aleesha", rollno: "1", key: "1", status: "present" },
    { name: "Aneena", rollno: "2", key: "2", status: "present" },
    { name: "Linto", rollno: "3", key: "3", status: "absent" },
    { name: "Ahalya", rollno: "4", key: "4", status: "absent" },
    { name: "Anjana", rollno: "5", key: "5", status: "present" },
    { name: "Ansila", rollno: "6", key: "6", status: "absent" },
    { name: "Fahima", rollno: "7", key: "7", status: "absent" },
    { name: "Jadeera", rollno: "8", key: "8", status: "present" },
    { name: "Jadeera", rollno: "8", key: "9", status: "present" },
    { name: "Jadeera", rollno: "8", key: "10", status: "present" },
    { name: "Jadeera", rollno: "8", key: "11", status: "present" },
    { name: "Jadeera", rollno: "8", key: "12", status: "present" },
    { name: "Jadeera", rollno: "8", key: "13", status: "present" },
    { name: "Jadeera", rollno: "8", key: "14", status: "present" },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.attendanceTitleDate}>
        <Text style={styles.attendText}>Students</Text>
        <Text>
          {date}-{month}-{year}
        </Text>
      </View>
      <FlatList
        data={attendence}
        renderItem={({ item }) => (
          <View style={styles.studentListView}>
            <View style={styles.attendsub}>
              <View>
                <Text>Rollno: {item.rollno}</Text>
                <Text>{item.name}</Text>
              </View>
              <View>
                <Text>{item.status}</Text>
              </View>
            </View>
          </View>
        )}
      />
      <TouchableRipple
        onPress={() => Alert.alert("Welcome to Geeks for Geeks ")}
        rippleColor="#ccc"
      >
        <View style={styles.floatingButtonStyle}>
          <Text style={{ fontSize: 30 }}>+</Text>
        </View>
      </TouchableRipple>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dfdfdf",
    justifyContent: "center",
    paddingVertical: 30,
    width: Dimensions.get("window").width,
  },
  attendanceTitleDate: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
  studentListView: {
    marginVertical: 10,
    padding: 10,
    borderColor: "black",
    borderBottomWidth: 1,
    borderStyle: "dashed",
  },
  attendsub: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  attendText: {
    fontWeight: "bold",
  },
  floatingButtonStyle: {
    position: "absolute",
    width: 65,
    height: 65,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 30,
    backgroundColor: "#A38ED1",
    borderRadius: 50,
  },
});
