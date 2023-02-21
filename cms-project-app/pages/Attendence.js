import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useState } from "react";

export default function Attendence() {
  const date = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();

  const [attendence, setttAttendence] = useState([
    { name: "aleesha", rollno: "1", key: "1", status: "present" },
    { name: "aneena", rollno: "2", key: "2", status: "present" },
    { name: "linto", rollno: "3", key: "3", status: "absent" },
    { name: "ahalya", rollno: "4", key: "4", status: "absent" },
    { name: "anjana", rollno: "5", key: "5", status: "present" },
    { name: "ansila", rollno: "6", key: "6", status: "absent" },
    { name: "fahima", rollno: "7", key: "7", status: "absent" },
    { name: "jadeera", rollno: "8", key: "8", status: "present" },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.attendanceTitleDate}>
        <Text style={styles.attendText}>Attendance</Text>
        <Text>
          {date}-{month}-{year}
        </Text>
      </View>
      <FlatList
        data={attendence}
        renderItem={({ item }) => (
          <View style={styles.studentListView}>
            <TouchableOpacity>
              <View style={styles.attendsub}>
                <View>
                  <Text>{item.name}</Text>
                  <Text>{item.rollno}</Text>
                </View>
                <View>
                  <Text>{item.status}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
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
});
